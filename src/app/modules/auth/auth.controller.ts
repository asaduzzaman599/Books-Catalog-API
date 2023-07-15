import { Request, Response } from "express";
import httpstatus from "http-status";
import catchAsync from "../../../shared/catch-async";
import responseData from "../../../shared/response";
import {AuthService } from "./auth.service";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.createUSer();

  res.status(httpstatus.OK).json({
    statusCode: httpstatus.OK,
    status: "Success",
    result,
    message: "Successful!",
  });
});

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.createUSer();

  return responseData({ result }, res);
});

export const AuthController = {
  createUser,
  loginUser,
};
