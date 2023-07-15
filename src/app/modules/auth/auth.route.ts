import express from 'express'
import { AuthController } from './auth.controller'
import { AuthValidation } from './auth.validation'
import validateRequest from '../../../shared/validate-request'

const router = express.Router()

router.route('/login').post(validateRequest(AuthValidation.authLoginZodValidation),AuthController.loginUser)
router.route('/signup').post(validateRequest(AuthValidation.authSignUpZodValidation),AuthController.createUser)

export const AuthRouter = router