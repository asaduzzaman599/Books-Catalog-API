import express, { Request, Response } from 'express'
import cors from'cors'
import { AppRoutes } from './routes'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//router
app.use('/api/v1', AppRoutes)



export default app