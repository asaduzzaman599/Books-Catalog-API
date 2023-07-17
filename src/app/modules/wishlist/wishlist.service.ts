import mongoose from "mongoose";
import { WishList } from "./wishlist.model";

const addToWishList = async (bookId: string, userId: string) => {
  const wishListExists = await WishList.findOne({
    user: new mongoose.Types.ObjectId(userId),
    book: new mongoose.Types.ObjectId(bookId),
  });

  if (!wishListExists)
    return (
      await WishList.create({ 
        user: new mongoose.Types.ObjectId(userId),
        book: new mongoose.Types.ObjectId(bookId),
       })
    ).toObject();

    return await WishList.findByIdAndDelete(wishListExists._id)
};

const getWishList = async (userId: string) => {
  return await WishList.find({
    user: new mongoose.Types.ObjectId(userId),
  }).populate('user').populate('book');
};

export const WishListService = {
  addToWishList,
  getWishList,
};
