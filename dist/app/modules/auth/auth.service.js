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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jwt_helpers_1 = require("../../../helpers/jwt-helpers");
const users_model_1 = require("../users/users.model");
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const createdUser = yield users_model_1.User.create(payload);
    if (!createdUser)
        throw new Error('Failed to create user!');
    const { password } = createdUser, user = __rest(createdUser, ["password"]);
    return user;
});
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existsUser = yield users_model_1.User.getExistsUser({ email: payload.email });
    if (!existsUser)
        throw new Error('User does not exists!');
    const passwordMatched = yield existsUser.isPasswordMatched(payload.password);
    if (!passwordMatched)
        throw new Error('Email or password not matched!');
    const user = existsUser.toObject();
    const { password } = user, userWithOutPass = __rest(user, ["password"]);
    const accessToken = jwt_helpers_1.JwtHelpers.generateToken({ email: user.email, phone: user.phone, userId: user._id });
    return {
        user: userWithOutPass,
        accessToken
    };
});
exports.AuthService = {
    createUser,
    loginUser
};
