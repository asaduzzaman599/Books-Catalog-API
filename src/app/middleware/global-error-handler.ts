import { ErrorRequestHandler, NextFunction, Response, Request } from "express"
import httpStatus from "http-status"

const globalErrorHandler: ErrorRequestHandler = (
    error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    
  return res.status(httpStatus.BAD_REQUEST).json({
    success: false,
    message: error.message ?? 'Something went wrong!'
  })

}

export default globalErrorHandler