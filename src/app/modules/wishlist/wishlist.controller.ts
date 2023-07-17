import { Request, Response } from "express"
import { IValidateUser } from "../auth/auth.interface"
import responseData from "../../../shared/response"
import catchAsync from "../../../shared/catch-async"
import { WishListService } from "./wishlist.service"

const getWishList = catchAsync(async (req: Request, res: Response) => {
  
  const user = req.user as IValidateUser
  const result = await WishListService.getWishList(user.userId);

  responseData(
    {
      result,
    },
    res
  );
});

const addToWishList = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  
  const user = req.user as IValidateUser
  const result = await WishListService.addToWishList(id, user.userId);

  responseData(
    {
      result,
      message: "booked added to wish list successful!",
    },
    res
  );
});


export const WishListController = {
  addToWishList,
  getWishList,
};
