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