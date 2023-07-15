import mongoose from "mongoose";
import { WishList } from "./wishlist.model";

const addToWishList = async (bookId: string, userId: string) => {
  const wishListExists = await WishList.findOne({
    userId: new mongoose.Types.ObjectId(userId),
  });

  if (!wishListExists)
    return (
      await WishList.create({ books: [bookId], user: userId })
    ).toObject();

  return await WishList.findByIdAndUpdate(
    wishListExists._id,
    {
      $push: {
        books: bookId,
      },
    },
    {
      new: true,
    }
  );
};

const getWishList = async (userId: string) => {
  return await WishList.findOne({
    userId: new mongoose.Types.ObjectId(userId),
  });
};

export const WishListService = {
  addToWishList,
  getWishList,
};
