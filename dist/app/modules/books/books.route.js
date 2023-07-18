"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRouter = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const validate_request_1 = __importDefault(require("../../middleware/validate-request"));
const books_validation_1 = require("./books.validation");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = express_1.default.Router();
router.route('/')
    .get(books_controller_1.BookController.getAllBook);
router.route('/create-book').post((0, auth_1.default)(), (0, validate_request_1.default)(books_validation_1.BookValidation.bookCreateZodValidation), books_controller_1.BookController.createBook);
router.route('/group-by')
    .get(books_controller_1.BookController.getBooksGroupBy);
router.route('/:id')
    .get(books_controller_1.BookController.getBook)
    .patch((0, auth_1.default)(), (0, validate_request_1.default)(books_validation_1.BookValidation.bookUpdateZodValidation), books_controller_1.BookController.updateBook)
    .delete((0, auth_1.default)(), books_controller_1.BookController.deleteBook);
exports.BookRouter = router;
