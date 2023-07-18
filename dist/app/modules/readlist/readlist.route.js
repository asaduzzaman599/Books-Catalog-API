"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadListRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const readlist_controller_1 = require("./readlist.controller");
const router = express_1.default.Router();
router.route('/').get((0, auth_1.default)(), readlist_controller_1.ReadListController.getReadList);
router.route('/:id').put((0, auth_1.default)(), readlist_controller_1.ReadListController.addToReadList);
exports.ReadListRouter = router;
