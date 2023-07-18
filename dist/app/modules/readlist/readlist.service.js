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
exports.ReadListService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const readlist_model_1 = require("./readlist.model");
const addToReadList = (bookId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const readListExists = yield readlist_model_1.ReadList.findOne({
        user: new mongoose_1.default.Types.ObjectId(userId),
        book: new mongoose_1.default.Types.ObjectId(bookId),
    });
    if (!readListExists)
        return (yield readlist_model_1.ReadList.create({
            user: new mongoose_1.default.Types.ObjectId(userId),
            book: new mongoose_1.default.Types.ObjectId(bookId),
        })).toObject();
    return readlist_model_1.ReadList.findByIdAndDelete(readListExists._id);
});
const getReadList = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield readlist_model_1.ReadList.find({
        user: new mongoose_1.default.Types.ObjectId(userId),
    }).populate('user').populate('book');
});
exports.ReadListService = {
    addToReadList,
    getReadList,
};
