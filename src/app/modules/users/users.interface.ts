import { HydratedDocument, Model } from "mongoose"

type IUserName = {
  firstName: string
  middleName?: string
  lastName: string
}
export type IUser = {
  name: IUserName
  phone: string,
  email: string
  password: string
  avatar?: string
}


export interface IUserMethods {
  isPasswordMatched(password: string): Promise<boolean>;
}

export interface UserModel extends Model<IUser, Record<string, unknown>, IUserMethods> {
  getExistsUser(input: {email?: string, phone?: string}): Promise<HydratedDocument<IUser, IUserMethods>>;
}