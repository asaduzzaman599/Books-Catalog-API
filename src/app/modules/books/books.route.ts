import express from 'express'
import { BookController } from './books.controller'
import validateRequest from '../../middleware/validate-request'
import { BookValidation } from './books.validation'
import auth from '../../middleware/auth'

const router = express.Router()

router.route('/')
.get(BookController.getAllBook)
router.route('/create-book').post(auth(),validateRequest(BookValidation.bookCreateZodValidation),BookController.createBook)

router.route('/:id')
.get(BookController.getBook)
.patch(auth(), validateRequest(BookValidation.bookUpdateZodValidation),BookController.updateBook)
.delete(auth(), BookController.deleteBook)

export const BookRouter = router