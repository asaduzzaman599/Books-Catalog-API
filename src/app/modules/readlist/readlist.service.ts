import mongoose from "mongoose";
import { ReadList } from "./readlist.model";

const addToReadList = async (bookId: string, userId: string) => {
  const readListExists = await ReadList.findOne({
    user: new mongoose.Types.ObjectId(userId),
    book: new mongoose.Types.ObjectId(bookId),
  });

  if (!readListExists)
    return (
      await ReadList.create({ 
        user: new mongoose.Types.ObjectId(userId),
        book: new mongoose.Types.ObjectId(bookId),
       })
    ).toObject();
    return ReadList.findByIdAndDelete(readListExists._id)
};

const getReadList = async (userId: string) => {
  return await ReadList.find({
    user: new mongoose.Types.ObjectId(userId),
  }).populate('user').populate('book');
};

export const ReadListService = {
  addToReadList,
  getReadList,
};
