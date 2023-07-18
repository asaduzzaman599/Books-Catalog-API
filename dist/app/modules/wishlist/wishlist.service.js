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
exports.WishListService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const wishlist_model_1 = require("./wishlist.model");
const addToWishList = (bookId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const wishListExists = yield wishlist_model_1.WishList.findOne({
        user: new mongoose_1.default.Types.ObjectId(userId),
        book: new mongoose_1.default.Types.ObjectId(bookId),
    });
    if (!wishListExists)
        return (yield wishlist_model_1.WishList.create({
            user: new mongoose_1.default.Types.ObjectId(userId),
            book: new mongoose_1.default.Types.ObjectId(bookId),
        })).toObject();
    return yield wishlist_model_1.WishList.findByIdAndDelete(wishListExists._id);
});
const getWishList = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield wishlist_model_1.WishList.find({
        user: new mongoose_1.default.Types.ObjectId(userId),
    }).populate('user').populate('book');
});
exports.WishListService = {
    addToWishList,
    getWishList,
};
