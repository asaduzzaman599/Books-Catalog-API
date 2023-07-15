import { Schema, model } from "mongoose"
import { IUser } from "./users.interface"

const userSchema = new Schema<IUser>({
  name: {
    firstName: { 
      type: String, 
      required: true 
    },
    middleName: { 
      type: String,  
    },
    lastName: { 
      type: String, 
      required: true 
    }
  },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, select: 0 },
  avatar: { type: String}
});

export const User = model<IUser>('User', userSchema);