import { IUser } from "../users/users.interface"

export type ILoginInput = {
  email: string
  password: string
}

export type ILoginResponse = {
  user: Partial<IUser>
  accessToken: string
}

export type IValidateUser = {
  userId: string
  email: string
  phone: string
  role?: string
}