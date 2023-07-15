import { Types } from "mongoose"
import { IBooks } from "../books/books.interface"
import { IUser } from "../users/users.interface"


export type IReview = {
  book : Types.ObjectId | IBooks
  user:  Types.ObjectId | IUser
  comment: string 
  rating: number
}