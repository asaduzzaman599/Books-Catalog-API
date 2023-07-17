import mongoose, { Types } from "mongoose";
import { Review } from "./reviews.model"
import { IReview } from "./reviews.interface"

const addReview = async (payload: IReview) => {
    return (
      await Review.create({...payload, book: new mongoose.Types.ObjectId(payload.book as Types.ObjectId),  user: new mongoose.Types.ObjectId(payload.user as Types.ObjectId)})
    ).toObject();

};

const getReview = async (bookId: string) => {
  return await Review.find({
    book: new mongoose.Types.ObjectId(bookId),
  }).populate('user').populate('book');
};

export const ReviewService = {
  addReview,
  getReview,
};
