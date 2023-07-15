import express from "express"
import { UserRouter } from "../app/modules/users/users.route"
import { AuthRouter } from "../app/modules/auth/auth.route"

const router = express.Router()
const routes = [
  { path: '/user', route: UserRouter },
  { path: '/auth', route: AuthRouter }
]

routes.forEach(route => router.use(route.path, route.route))

export const AppRoutes = router