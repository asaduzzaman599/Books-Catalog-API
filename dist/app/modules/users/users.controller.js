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
exports.UserController = void 0;
const catch_async_1 = __importDefault(require("../../../shared/catch-async"));
const users_service_1 = require("./users.service");
const http_status_1 = __importDefault(require("http-status"));
const response_1 = __importDefault(require("../../../shared/response"));
const createUser = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_service_1.UserService.createUSer();
    res.status(http_status_1.default.OK).json({
        statusCode: http_status_1.default.OK,
        status: 'Success',
        result,
        message: 'Successful!'
    });
}));
const getUser = (0, catch_async_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validateUser = req.user;
    const result = yield users_service_1.UserService.getUser(validateUser);
    return (0, response_1.default)({
        result
    }, res);
}));
exports.UserController = {
    createUser,
    getUser
};
