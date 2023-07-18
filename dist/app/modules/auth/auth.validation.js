"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const authSignUpZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.object({
            firstName: zod_1.z.string({ required_error: 'First name is required!' }),
            middleName: zod_1.z.string().optional(),
            lastName: zod_1.z.string({ required_error: 'Last name is required!' }),
        }),
        phone: zod_1.z.string({ required_error: 'Phone is required!' }),
        email: zod_1.z.string({ required_error: 'Email is required!' }),
        password: zod_1.z.string({ required_error: 'Password is required!' }),
    })
});
const authLoginZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({ required_error: 'email is required!' }),
        password: zod_1.z.string({ required_error: 'Password is required!' }),
    })
});
exports.AuthValidation = {
    authSignUpZodValidation,
    authLoginZodValidation
};
