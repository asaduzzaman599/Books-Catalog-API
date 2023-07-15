import { z } from "zod";

const authSignUpZodValidation = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string({required_error: 'First name is required!'}),
      middleName: z.string().optional(),
      lastName: z.string({required_error: 'Last name is required!'}),
    }),
    phone: z.string({required_error: 'Phone is required!'}),
    email: z.string({required_error: 'Email is required!'}),
    password: z.string({required_error: 'Password is required!'}),
  })
})

const authLoginZodValidation = z.object({
  body: z.object({
    email: z.string({required_error: 'email is required!'}),
    password: z.string({required_error: 'Password is required!'}),
  })
})


export const AuthValidation = {
  authSignUpZodValidation,
  authLoginZodValidation
}