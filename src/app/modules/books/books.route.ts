import express from 'express'
import { BookController } from './books.controller'
import validateRequest from '../../middleware/validate-request'
import { BookValidation } from './books.validation'

const router = express.Router()

router.route('/')
.get(BookController.getAllBook)
.post(validateRequest(BookValidation.bookCreateZodValidation),BookController.createBook)

router.route('/:id')
.get(BookController.getBook)
.patch(validateRequest(BookValidation.bookUpdateZodValidation),BookController.updateBook)
.delete(BookController.deleteBook)

export const BookRouter = router