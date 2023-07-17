import express from 'express'
import { UserController } from './users.controller'
import auth from '../../middleware/auth'

const router = express.Router()

router.route('/').get(auth(),UserController.getUser)

export const UserRouter = router