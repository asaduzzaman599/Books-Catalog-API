import mongoose from "mongoose";
import { Review } from "./reviews.model"
import { IReview } from "./reviews.interface"

const addReview = async (payload: IReview) => {
 
    return (
      await Review.create(payload)
    ).toObject();

};

const getReview = async (bookId: string) => {
  return await Review.findOne({
    book: new mongoose.Types.ObjectId(bookId),
  });
};

export const ReviewService = {
  addReview,
  getReview,
};
