import { Request, Response } from "express";
import httpstatus from "http-status";
import catchAsync from "../../../shared/catch-async";
import responseData from "../../../shared/response";
import {AuthService } from "./auth.service";
import { IUser } from "../users/users.interface"

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = ''

  res.status(httpstatus.OK).json({
    statusCode: httpstatus.OK,
    status: "Success",
    result,
    message: "Successful!",
  });
});

const createUser = catchAsync(async (req: Request, res: Response) => {
  const body = req.body
  const result = await AuthService.createUser(body);

  return responseData<Partial<IUser>>({ result }, res);
});

export const AuthController = {
  createUser,
  loginUser,
};
