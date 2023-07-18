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
exports.BookController = void 0;
const catch_async_1 = __importDefault(require("../../../shared/catch-async"));
const response_1 = __importDefault(require("../../../shared/response"));
const books_service_1 = require("./books.service");
const books_constants_1 = require("./books.constants");
const pick_1 = __importDefault(require("../../../shared/pick"));
const createBook = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const user = req.user;
    const result = yield books_service_1.BookService.createBook(body, user);
    (0, response_1.default)({
        result,
        message: "Book created successful!",
    }, res);
}));
const getAllBook = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, books_constants_1.BookConstant.booksFilteredOptions);
    const paginationQuery = (0, pick_1.default)(req.query, ['limit']);
    const result = yield books_service_1.BookService.getAllBooks(filters, paginationQuery);
    (0, response_1.default)({
        result,
    }, res);
}));
const getBook = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield books_service_1.BookService.getBook(id);
    (0, response_1.default)({
        result,
    }, res);
}));
const updateBook = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const body = req.body;
    const user = req.user;
    const result = yield books_service_1.BookService.updateBook(id, body, user);
    (0, response_1.default)({
        result,
        message: "Book created successful!",
    }, res);
}));
const deleteBook = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = req.user;
    const result = yield books_service_1.BookService.deleteBook(id, user);
    (0, response_1.default)({
        result,
        message: "Book created successful!",
    }, res);
}));
const getBooksGroupBy = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_service_1.BookService.getBooksGroupBy();
    (0, response_1.default)({
        result,
    }, res);
}));
exports.BookController = {
    createBook,
    getAllBook,
    getBook,
    updateBook,
    deleteBook,
    getBooksGroupBy
};
