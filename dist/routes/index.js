"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_route_1 = require("../app/modules/users/users.route");
const auth_route_1 = require("../app/modules/auth/auth.route");
const books_route_1 = require("../app/modules/books/books.route");
const readlist_route_1 = require("../app/modules/readlist/readlist.route");
const reviews_route_1 = require("../app/modules/reviews/reviews.route");
const wishlist_route_1 = require("../app/modules/wishlist/wishlist.route");
const router = express_1.default.Router();
const routes = [
    { path: '/users', route: users_route_1.UserRouter },
    { path: '/auth', route: auth_route_1.AuthRouter },
    { path: '/books', route: books_route_1.BookRouter },
    { path: '/read-list', route: readlist_route_1.ReadListRouter },
    { path: '/wish-list', route: wishlist_route_1.WishListRouter },
    { path: '/reviews', route: reviews_route_1.ReviewRouter },
];
routes.forEach(route => router.use(route.path, route.route));
exports.AppRoutes = router;
