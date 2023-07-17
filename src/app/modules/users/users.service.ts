import mongoose from "mongoose"
import { IValidateUser } from "../auth/auth.interface"
import { User } from "./users.model"

const createUSer = async () => {
  return 'user Creating'
}
const getUser = async (payload: IValidateUser) => {
  const query =  {
      ...(payload?.userId ?  { _id: new mongoose.Types.ObjectId(payload.userId) }: {}),
      ...(payload?.email ?  { email: payload.email }: {}),
      ...(payload?.phone ?  { phone: payload.phone }: {})
    }
  
  return await User.findOne(query)
}

export const UserService = {
  createUSer,
  getUser
} 