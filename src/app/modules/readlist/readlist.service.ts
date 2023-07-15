import mongoose from "mongoose";
import { ReadList } from "./readlist.model";

const addToReadList = async (bookId: string, userId: string) => {
  const readListExists = await ReadList.findOne({
    userId: new mongoose.Types.ObjectId(userId),
  });

  if (!readListExists)
    return (
      await ReadList.create({ books: [bookId], user: userId })
    ).toObject();

  return await ReadList.findByIdAndUpdate(
    readListExists._id,
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

const getReadList = async (userId: string) => {
  return await ReadList.findOne({
    userId: new mongoose.Types.ObjectId(userId),
  });
};

export const ReadListService = {
  addToReadList,
  getReadList,
};
