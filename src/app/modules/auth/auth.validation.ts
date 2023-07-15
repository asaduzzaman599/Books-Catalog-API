import { z } from "zod";

const authSignUpZodValidation = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string({required_error: 'First name is required!'}),
      middleName: z.string().optional(),
      lastName: z.string({required_error: 'Last name is required!'}),
    }),
    phone: z.string({required_error: 'Phone name is required!'}),
    email: z.string({required_error: 'Email name is required!'}),
    password: z.string({required_error: 'Password name is required!'}),
  })
})

const authLoginZodValidation = z.object({
  body: z.object({
    email: z.string({required_error: 'email name is required!'}),
    password: z.string({required_error: 'Password name is required!'}),
  })
})


export const AuthValidation = {
  authSignUpZodValidation,
  authLoginZodValidation
}