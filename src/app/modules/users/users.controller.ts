import { Request, Response } from "express"
import catchAsync from "../../../shared/catch-async"
import { UserService } from "./users.service"
import httpstatus from "http-status"

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createUSer()

  res.status(httpstatus.OK).json({
    statusCode: httpstatus.OK,
    status: 'Success',
    result,
    message: 'Successful!'
  })
})

export const UserController = {
  createUser
}