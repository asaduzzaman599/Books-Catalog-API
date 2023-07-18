"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler = (error, req, res, next) => {
    var _a;
    return res.status(http_status_1.default.BAD_REQUEST).json({
        success: false,
        message: (_a = error.message) !== null && _a !== void 0 ? _a : 'Something went wrong!'
    });
};
exports.default = globalErrorHandler;
