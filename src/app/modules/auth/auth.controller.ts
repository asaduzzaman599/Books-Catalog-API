import { Request, Response } from "express";
import catchAsync from "../../../shared/catch-async";
import responseData from "../../../shared/response";
import { IUser } from "../users/users.interface";
import { AuthService } from "./auth.service";

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;

  const result = await AuthService.loginUser(body);

  return responseData(
    {
      result,
    },
    res
  );
});

const createUser = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;
  const result = await AuthService.createUser(body);

  return responseData<Partial<IUser>>({ result }, res);
});

export const AuthController = {
  createUser,
  loginUser,
};
