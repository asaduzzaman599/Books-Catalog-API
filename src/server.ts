import { connect } from "mongoose"
import app from "./app"
import config from "./config"
import { Request, Response } from "express"
import httpStatus from 'http-status'

main()

async function main() {
 try{
  const url = config.DATABASE_URL
  const port = config.PORT
  await connect(url);
  console.log('DB Connected Successfully')

  app.listen(port, ()=>{
    console.log(`Server is running on PORT: ${port}`)
  })

  
} catch (err) {
  console.log('Failed to connect database', err);
}

}