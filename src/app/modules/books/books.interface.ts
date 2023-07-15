import { Types } from "mongoose"
import { IUser } from "../users/users.interface"

export type IBooks = {
  title: string
  author: string
  genre: string
  publicationDate: string
  createdBy?: Types.ObjectId | IUser 
}

export type IBookFilters = {
  search: string
  genre: string
  publicationYear: number
}