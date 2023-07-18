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
exports.UserService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const users_model_1 = require("./users.model");
const createUSer = () => __awaiter(void 0, void 0, void 0, function* () {
    return 'user Creating';
});
const getUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const query = Object.assign(Object.assign(Object.assign({}, ((payload === null || payload === void 0 ? void 0 : payload.userId) ? { _id: new mongoose_1.default.Types.ObjectId(payload.userId) } : {})), ((payload === null || payload === void 0 ? void 0 : payload.email) ? { email: payload.email } : {})), ((payload === null || payload === void 0 ? void 0 : payload.phone) ? { phone: payload.phone } : {}));
    return yield users_model_1.User.findOne(query);
});
exports.UserService = {
    createUSer,
    getUser
};
