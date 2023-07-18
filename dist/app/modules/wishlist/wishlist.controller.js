"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishListController = void 0;
const response_1 = __importDefault(require("../../../shared/response"));
const catch_async_1 = __importDefault(require("../../../shared/catch-async"));
const wishlist_service_1 = require("./wishlist.service");
const getWishList = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const result = yield wishlist_service_1.WishListService.getWishList(user.userId);
    (0, response_1.default)({
        result,
    }, res);
}));
const addToWishList = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = req.user;
    const result = yield wishlist_service_1.WishListService.addToWishList(id, user.userId);
    (0, response_1.default)({
        result,
        message: "booked added to wish list successful!",
    }, res);
}));
exports.WishListController = {
    addToWishList,
    getWishList,
};
