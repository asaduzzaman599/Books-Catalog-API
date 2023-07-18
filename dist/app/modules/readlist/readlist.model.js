"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadList = void 0;
const mongoose_1 = require("mongoose");
const readListSchema = new mongoose_1.Schema({
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
exports.ReadList = (0, mongoose_1.model)('ReadList', readListSchema);
