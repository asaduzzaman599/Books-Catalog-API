import { Schema, model } from "mongoose";
import { IBooks } from "./books.interface";

const bookSchema = new Schema<IBooks>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: Date,
    required: true,
  },
  createdBy:{
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

export const Book = model<IBooks>('Book', bookSchema);