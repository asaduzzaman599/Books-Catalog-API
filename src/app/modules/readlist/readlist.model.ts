import { Schema, model } from "mongoose";
import { IReadList } from "./readlist.interface"

const readListSchema = new Schema<IReadList>({
  
  book: {
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

export const ReadList = model<IReadList>('ReadList', readListSchema);