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
exports.ReviewController = void 0;
const catch_async_1 = __importDefault(require("../../../shared/catch-async"));
const response_1 = __importDefault(require("../../../shared/response"));
const reviews_service_1 = require("./reviews.service");
const getReview = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield reviews_service_1.ReviewService.getReview(id);
    (0, response_1.default)({
        result,
    }, res);
}));
const addReview = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const user = req.user;
    const result = yield reviews_service_1.ReviewService.addReview(Object.assign(Object.assign({}, body), { user: user.userId }));
    (0, response_1.default)({
        result,
    }, res);
}));
exports.ReviewController = {
    getReview,
    addReview,
};
