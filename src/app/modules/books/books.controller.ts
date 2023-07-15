import { Request, Response } from "express"
import catchAsync from "../../../shared/catch-async";
import responseData from "../../../shared/response";
import { BookService } from "./books.service"

const createBook = catchAsync(async (req: Request, res: Response) => {
  const body = req.body
  const result = await BookService.createBook(body);

  responseData(
    {
      result,
      message: "Book created successful!",
    },
    res
  );
});

const getAllBook = catchAsync(async (req: Request, res: Response) => {

  const result = await BookService.getAllBooks();

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
  const result = await BookService.updateBook(id, body);

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
  const result = await BookService.deleteBook(id);

  responseData(
    {
      result,
      message: "Book created successful!",
    },
    res
  );
});

export const BookController = {
  createBook,
  getAllBook,
  getBook,
  updateBook,
  deleteBook
};
