import express from 'express'
import { UserController } from './users.controller'

const router = express.Router()

router.route('/create-user').get(UserController.createUser)

export const UserRouter = router