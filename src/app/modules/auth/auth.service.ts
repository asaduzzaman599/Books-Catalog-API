import { IUser } from "../users/users.interface"
import { User } from "../users/users.model"

const createUser = async (payload: IUser): Promise<Partial<IUser>> => {
  const createdUser = await User.create(payload)
  if(!createdUser)
    throw new Error('Failed to create user!')

    const {password, ...user} = createdUser

    return user
}

export const AuthService = {
  createUser
} 