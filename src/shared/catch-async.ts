import { NextFunction, Request, RequestHandler, Response} from "express"
import httpStatus from 'http-status'

const catchAsync = (fn: RequestHandler) => async (req: Request,res: Response, next: NextFunction) =>{
 try{
    return fn(req, res, next)
 } catch(err) {
    next(err)
 }
}

export default catchAsync