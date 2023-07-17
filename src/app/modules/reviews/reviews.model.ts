import { Schema, model } from "mongoose";
import { IReview } from "./reviews.interface"

const reviewSchema = new Schema<IReview>({
  
  book:{
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
  }
},{
  timestamps: true,
  toJSON:{
    virtuals: true
  }
});

export const Review = model<IReview>('Review', reviewSchema);