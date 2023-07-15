import { JwtHelpers } from "../../../helpers/jwt-helpers"
import { IUser } from "../users/users.interface"
import { User } from "../users/users.model"
import { ILoginInput, ILoginResponse } from "./auth.interface"

const createUser = async (payload: IUser): Promise<Partial<IUser>> => {
  const createdUser = await User.create(payload)
  if(!createdUser)
    throw new Error('Failed to create user!')

    const {password, ...user} = createdUser

    return user
}

const loginUser = async (payload: ILoginInput): Promise<ILoginResponse> => {
  const existsUser = await User.getExistsUser({email: payload.email})
  if(!existsUser)
    throw new Error('User does not exists!')

 const passwordMatched = await existsUser.isPasswordMatched(payload.password)
 if(!passwordMatched)
 throw new Error('Email or password not matched!')

 const user = existsUser.toObject()

 const { password, ...userWithOutPass} = user

 
 const accessToken = JwtHelpers.generateToken({ email: user.email, _id: user._id, phone: user.phone })
 
 return {
  user: userWithOutPass,
  accessToken
 }
}

export const AuthService = {
  createUser,
  loginUser
} 