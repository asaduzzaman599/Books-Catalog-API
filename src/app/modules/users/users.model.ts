import { Schema, model } from "mongoose"
import { IUser, UserModel } from "./users.interface"
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
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
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

userSchema.static('getExistsUser', async function getExistsUser(input: {email?: string, phone?: string}) {
  const query = {
    ...( input.email ? { email : input.email } : {}),
    ...( input.phone ? { phone : input.email } : {}),
  }

  return await User.findOne(query)
});

userSchema.method('isPasswordMatched', async function isPasswordMatched(password: string): Promise<boolean> {
  const matched = await bcrypt.compare(password, this.password)
  return matched
});

export const User = model<IUser, UserModel>('User', userSchema);

// export const User = model<IUser>('User', userSchema);