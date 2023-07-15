import express from "express"
import { UserRouter } from "../app/modules/users/users.route"
import { AuthRouter } from "../app/modules/auth/auth.route"
import { BookRouter } from "../app/modules/books/books.route"

const router = express.Router()
const routes = [
  { path: '/users', route: UserRouter },
  { path: '/auth', route: AuthRouter },
  { path: '/books', route: BookRouter }
]

routes.forEach(route => router.use(route.path, route.route))

export const AppRoutes = router