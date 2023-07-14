import express from "express"
import { UserRouter } from "../app/modules/users/users.controller"

const router = express.Router()
const routes = [
  { path: '/user', route: UserRouter }
]

routes.forEach(route => router.use(route.path, route.route))

export const AppRoutes = router