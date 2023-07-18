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
exports.ReviewService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const reviews_model_1 = require("./reviews.model");
const addReview = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield reviews_model_1.Review.create(Object.assign(Object.assign({}, payload), { book: new mongoose_1.default.Types.ObjectId(payload.book), user: new mongoose_1.default.Types.ObjectId(payload.user) }))).toObject();
});
const getReview = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield reviews_model_1.Review.find({
        book: new mongoose_1.default.Types.ObjectId(bookId),
    }).populate('user').populate('book');
});
exports.ReviewService = {
    addReview,
    getReview,
};
