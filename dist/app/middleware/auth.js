"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_helpers_1 = require("../../helpers/jwt-helpers");
const auth = (...roles) => {
    return (req, res, next) => {
        try {
            const { authorization } = req.headers;
            if (!authorization) {
                next("Invalid token!");
            }
            let token = authorization;
            const user = jwt_helpers_1.JwtHelpers.verifyToken(token);
            req.user = user;
            if (roles === null || roles === void 0 ? void 0 : roles.length) {
                if (!user.role || !roles.includes(user.role)) {
                    next('Forbidden!');
                }
            }
            next();
        }
        catch (err) {
            next(err);
        }
    };
};
exports.default = auth;
