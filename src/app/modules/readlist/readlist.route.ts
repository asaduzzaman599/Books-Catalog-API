import express from 'express'
import auth from '../../middleware/auth'

const router = express.Router()

router.route('/id').patch(auth(),)

export const UserRouter = router