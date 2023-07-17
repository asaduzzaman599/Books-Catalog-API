import express from 'express'
import auth from '../../middleware/auth'
import { WishListController } from './wishlist.controller'

const router = express.Router()

router.route('/').get(auth(),WishListController.getWishList)
router.route('/:id').put(auth(),WishListController.addToWishList)

export const WishListRouter = router