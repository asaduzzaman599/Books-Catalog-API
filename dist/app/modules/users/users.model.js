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
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const userSchema = new mongoose_1.Schema({
    name: {
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            required: true
        }
    },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
userSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.password = yield bcrypt_1.default.hash(this.password, config_1.default.BCRYPT_SALT_ROUNDS);
        next();
    });
});
userSchema.static('getExistsUser', function getExistsUser(input) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = Object.assign(Object.assign({}, (input.email ? { email: input.email } : {})), (input.phone ? { phone: input.email } : {}));
        return yield exports.User.findOne(query);
    });
});
userSchema.method('isPasswordMatched', function isPasswordMatched(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const matched = yield bcrypt_1.default.compare(password, this.password);
        return matched;
    });
});
exports.User = (0, mongoose_1.model)('User', userSchema);
// export const User = model<IUser>('User', userSchema);
