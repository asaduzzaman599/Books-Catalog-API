import express from "express"
import { UserRouter } from "../app/modules/users/users.route"
import { AuthRouter } from "../app/modules/auth/auth.route"
import { BookRouter } from "../app/modules/books/books.route"
import { ReadListRouter } from "../app/modules/readlist/readlist.route"
import { ReviewRouter } from "../app/modules/reviews/reviews.route"
import { WishListRouter } from "../app/modules/wishlist/wishlist.route"

const router = express.Router()
const routes = [
  { path: '/users', route: UserRouter },
  { path: '/auth', route: AuthRouter },
  { path: '/books', route: BookRouter },
  { path: '/read-list', route: ReadListRouter },
  { path: '/wish-list', route: WishListRouter },
  { path: '/reviews', route: ReviewRouter },
]

routes.forEach(route => router.use(route.path, route.route))

export const AppRoutes = router