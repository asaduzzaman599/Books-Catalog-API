"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const reviews_controller_1 = require("./reviews.controller");
const router = express_1.default.Router();
router.route('/').post((0, auth_1.default)(), reviews_controller_1.ReviewController.addReview);
router.route('/:id').get(reviews_controller_1.ReviewController.getReview);
exports.ReviewRouter = router;
