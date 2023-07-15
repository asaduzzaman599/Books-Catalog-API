import { Response } from "express"
import httpstatus from "http-status"

type IData<T> = {
  result:T;
  message?: string;
  status?: string
  statusCode?: number

}

 const responseData = <T>(data: IData<T>,res:Response) =>{
  const status = data.status ?? 'Success'
  const statusCode = data.statusCode ?? httpstatus.OK

  const response = {
    status,
    statusCode,
    result: data.result,
    ...(data.message ? { message : data.message} : {} )
  }

  return res.status(statusCode).json(response)

}

export default  responseData