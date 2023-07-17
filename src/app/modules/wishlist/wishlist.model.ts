import { Schema, model } from "mongoose";
import { IWishList } from "./wishlist.interface"

const wishListSchema = new Schema<IWishList>({
  book:{
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},{
  timestamps: true,
  toJSON:{
    virtuals: true
  }
});

export const WishList = model<IWishList>('WishList', wishListSchema);