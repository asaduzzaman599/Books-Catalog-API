import { Request, Response } from "express"
import catchAsync from "../../../shared/catch-async"
import { IValidateUser } from "../auth/auth.interface"
import responseData from "../../../shared/response"
import { ReadListService } from "./readlist.service"

const getReadList = catchAsync(async (req: Request, res: Response) => {
  
  const user = req.user as IValidateUser
  const result = await ReadListService.getReadList(user.userId);

  responseData(
    {
      result,
    },
    res
  );
});

const addToReadList = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  
  const user = req.user as IValidateUser
  const result = await ReadListService.addToReadList(id, user.userId);

  responseData(
    {
      result,
      message: "booked added to read list successful!",
    },
    res
  );
});


export const ReadListController = {
  addToReadList,
  getReadList,
};
