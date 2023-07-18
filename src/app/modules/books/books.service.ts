import { IValidateUser } from "../auth/auth.interface"
import { User } from "../users/users.model"
import { booksSearchableFields } from "./books.constants"
import { IBookFilters, IBooks } from "./books.interface"
import { Book } from "./books.model"

const createBook = async (payload: IBooks, validateUser: IValidateUser) => {

  const user = await User.exists({
    email: validateUser.email
  })
  if(!user) 
  throw new Error('Failed to create book!')

  return (await Book.create({...payload, createdBy: user?._id})).toObject()
}

const getAllBooks = async (filters: Partial<IBookFilters>, paginationQuery?: {limit?:string}) => {

  const {search, ...filterOptions} = filters
  const and = [];

  if (search) {
    and.push({
      $or: booksSearchableFields.map(field => ({
        [field]: {
          $regex: search,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filterOptions).length) {
    and.push({
      $and: Object.entries(filterOptions).map(([field, value]) => {
        if(field === 'publicationYear'){
          
          return {
            publicationDate: {
              $lt: new Date(Number(value)+1, 0, 1),
              $gte: new Date(Number(value), 0, 1)
            }
          }
        }
        
        
        return {
          [field]: value,
        }
      }),
    });
  }


  const where =
    and.length > 0 ? { $and: and } : {};

if(paginationQuery?.limit){
  return await Book.find(where).sort({createdAt: 'desc'}).limit(+paginationQuery?.limit).populate('createdBy')
}
return await Book.find(where).populate('createdBy')
}

const getBook = async (id: string) => {
  return await Book.findById(id).populate('createdBy')
}

const updateBook = async (id: string, payload: Partial<IBooks>, validateUser: IValidateUser) => {
  const user = await User.exists({
    email: validateUser.email
  })
  
  if(!user) 
  throw new Error('Failed to create book!')
  const book = await Book.findById(id)

    if(book?.createdBy?.toString() !== user._id.toString())
    throw new Error('Forbidden!')
  
  return await Book.findByIdAndUpdate(id,payload,{new:true}).populate('createdBy')
}

const deleteBook = async (id: string,  validateUser: IValidateUser) => {

    const user = await User.exists({
      email: validateUser.email
    })
    
    if(!user) 
    throw new Error('Failed to delete book!')

    const book = await Book.findById(id)
    if(book?.createdBy?.toString() !== user._id.toString())
    throw new Error('Forbidden!')


  return await Book.findByIdAndDelete(id)
}

const getBooksGroupBy = async () => {
  const pipeline = [
    {
      $facet: {
        'years': [{
          $project: {
            year: { $year: '$publicationDate' },
          },
        },
        {
          $group: {
            _id: null,
            years: { $addToSet: '$year' },
          },
        },
        {
          $project: {
            _id: 0,
            years: 1,
          },
        },],
        'genre': [{
          $group:{
            _id: '$genre'
          }
        }, 
        {
          $group: {
            _id: null,
            genre: { $addToSet: '$_id' },
          },
        }
        ,{
          $project:{
            genre: 1,
            _id:0
          }
        }]
      }
    }
  ]
  const result = await Book.aggregate(pipeline)

  const years = result[0]?.years[0]?.years
  const genres = result[0]?.genre[0]?.genre
  return {
    years,
    genres
  }
}

export const BookService = {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
  getBooksGroupBy
}