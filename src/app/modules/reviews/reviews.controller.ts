import { Request, Response } from "express"
import catchAsync from "../../../shared/catch-async"
import { IValidateUser } from "../auth/auth.interface"
import responseData from "../../../shared/response"
import { ReviewService } from "./reviews.service"

const getReview = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await ReviewService.getReview(id);

  responseData(
    {
      result,
    },
    res
  );
});

const addReview = catchAsync(async (req: Request, res: Response) => {

  const body = req.body
  const user = req.user as IValidateUser
  const result = await ReviewService.addReview({...body, user: user.userId});

  responseData(
    {
      result,
    },
    res
  );
});


export const ReviewController = {
  getReview,
  addReview,
};
