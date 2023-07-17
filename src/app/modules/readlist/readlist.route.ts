import express from 'express'
import auth from '../../middleware/auth'
import { ReadListController } from './readlist.controller'

const router = express.Router()


router.route('/').get(auth(),ReadListController.getReadList)
router.route('/:id').put(auth(),ReadListController.addToReadList)

export const ReadListRouter = router