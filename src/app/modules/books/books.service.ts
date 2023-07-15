import { IBooks } from "./books.interface"
import { Book } from "./books.model"

const createBook = async (payload: IBooks) => {
  return (await Book.create(payload)).toJSON()
}

const getAllBooks = async () => {
  let query = {}
  return await Book.find(query)
}

const getBook = async (id: string) => {
  return await Book.findById(id)
}

const updateBook = async (id: string, payload: Partial<IBooks>) => {
  return await Book.findByIdAndUpdate(id,payload,{new:true})
}

const deleteBook = async (id: string) => {
  return await Book.findByIdAndDelete(id)
}


export const BookService = {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook
}