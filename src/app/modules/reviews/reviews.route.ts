import express from 'express'
import auth from '../../middleware/auth'
import { ReviewController } from './reviews.controller'

const router = express.Router()


router.route('/').post(auth(),ReviewController.addReview)
router.route('/:id').get(auth(),ReviewController.getReview)

export const ReviewRouter = router