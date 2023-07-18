import { Request, Response } from "express"
import catchAsync from "../../../shared/catch-async";
import responseData from "../../../shared/response";
import { BookService } from "./books.service"
import { BookConstant } from "./books.constants"
import { IValidateUser } from "../auth/auth.interface"
import pick from "../../../shared/pick"

const createBook = catchAsync(async (req: Request, res: Response) => {
  const body = req.body
  const user = req.user as IValidateUser
  const result = await BookService.createBook(body, user);



  responseData(
    {
      result,
      message: "Book created successful!",
    },
    res
  );
});

const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, BookConstant.booksFilteredOptions);
  const paginationQuery = pick(req.query, ['limit']);
  const result = await BookService.getAllBooks(filters, paginationQuery);

  responseData(
    {
      result,
    },
    res
  );
});

const getBook = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params
  const result = await BookService.getBook(id);

  responseData(
    {
      result,
    },
    res
  );
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const body = req.body
  
  const user = req.user as IValidateUser
  const result = await BookService.updateBook(id, body, user);

  responseData(
    {
      result,
      message: "Book created successful!",
    },
    res
  );
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const user = req.user as IValidateUser
  const result = await BookService.deleteBook(id, user);

  responseData(
    {
      result,
      message: "Book created successful!",
    },
    res
  );
});

const getBooksGroupBy = catchAsync(async (req: Request, res: Response) => {

  const result = await BookService.getBooksGroupBy();

  responseData(
    {
      result,
    },
    res
  );
});

export const BookController = {
  createBook,
  getAllBook,
  getBook,
  updateBook,
  deleteBook,
  getBooksGroupBy
};
