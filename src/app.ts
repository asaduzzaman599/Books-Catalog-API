import express, { NextFunction, Request, Response } from 'express'
import cors from'cors'
import { AppRoutes } from './routes'
import globalErrorHandler from './app/middleware/global-error-handler'
import httpStatus from 'http-status'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//router
app.use('/api/v1', AppRoutes)

app.get('/', async (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    status: httpStatus.OK,
    message: `Server is Running!`
  }) 
})

app.use(globalErrorHandler)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Api route not found',
  });
  next();
});



export default app