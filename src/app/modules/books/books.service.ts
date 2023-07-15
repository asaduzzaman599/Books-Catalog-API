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

const getAllBooks = async (filters: Partial<IBookFilters>) => {

  const {search, ...filterOptions} = filters
  const and = [];

  if (search) {
    and.push({
      $or: booksSearchableFields.map(field => ({
        [field]: {
          $regex: search,
          $paginationOptions: 'i',
        },
      })),
    });
  }

  if (Object.keys(filterOptions).length) {
    and.push({
      $and: Object.entries(filterOptions).map(([field, value]) => {
        if(field === 'publicationYear'){
          return {
            PublicationDate: {
              $lte: new Date(Number(value), 11, 31),
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


  return await Book.find(where)
}

const getBook = async (id: string) => {
  return await Book.findById(id)
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
  
  return await Book.findByIdAndUpdate({id},payload,{new:true})
}

const deleteBook = async (id: string,  validateUser: IValidateUser) => {

    const user = await User.exists({
      email: validateUser.email
    })
    
    if(!user) 
    throw new Error('Failed to create book!')
    
    const book = await Book.findById(id)
    if(book?.createdBy?.toString() !== user._id.toString())
    throw new Error('Forbidden!')

  return await Book.findByIdAndDelete(id)
}


export const BookService = {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook
}