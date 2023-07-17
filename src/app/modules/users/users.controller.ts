import { Request, Response } from "express"
import catchAsync from "../../../shared/catch-async"
import { UserService } from "./users.service"
import httpstatus from "http-status"
import { IValidateUser } from "../auth/auth.interface"
import responseData from "../../../shared/response"

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createUSer()

  res.status(httpstatus.OK).json({
    statusCode: httpstatus.OK,
    status: 'Success',
    result,
    message: 'Successful!'
  })
})

const getUser = catchAsync(async (req: Request, res: Response) => {
  const validateUser = req.user as IValidateUser

  const result = await UserService.getUser(validateUser)

  return responseData({
    result
  }, res)
})

export const UserController = {
  createUser,
  getUser
}