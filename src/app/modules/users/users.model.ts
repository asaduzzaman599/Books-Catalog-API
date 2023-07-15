import { Schema, model } from "mongoose"
import { IUser } from "./users.interface"
import bcrypt from 'bcrypt'
import config from "../../../config"

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
  password: { type: String, required: true},
  avatar: { type: String}
},
{
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});

userSchema.pre('save', async function(next){
 this.password = await bcrypt.hash(this.password, config.BCRYPT_SALT_ROUNDS)
 next()
})

export const User = model<IUser>('User', userSchema);