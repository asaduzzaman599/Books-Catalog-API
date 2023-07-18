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
exports.BookService = void 0;
const users_model_1 = require("../users/users.model");
const books_constants_1 = require("./books.constants");
const books_model_1 = require("./books.model");
const createBook = (payload, validateUser) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_model_1.User.exists({
        email: validateUser.email
    });
    if (!user)
        throw new Error('Failed to create book!');
    return (yield books_model_1.Book.create(Object.assign(Object.assign({}, payload), { createdBy: user === null || user === void 0 ? void 0 : user._id }))).toObject();
});
const getAllBooks = (filters, paginationQuery) => __awaiter(void 0, void 0, void 0, function* () {
    const { search } = filters, filterOptions = __rest(filters, ["search"]);
    const and = [];
    if (search) {
        and.push({
            $or: books_constants_1.booksSearchableFields.map(field => ({
                [field]: {
                    $regex: search,
                    $options: 'i',
                },
            })),
        });
    }
    if (Object.keys(filterOptions).length) {
        and.push({
            $and: Object.entries(filterOptions).map(([field, value]) => {
                if (field === 'publicationYear') {
                    return {
                        publicationDate: {
                            $lt: new Date(Number(value) + 1, 0, 1),
                            $gte: new Date(Number(value), 0, 1)
                        }
                    };
                }
                return {
                    [field]: value,
                };
            }),
        });
    }
    const where = and.length > 0 ? { $and: and } : {};
    if (paginationQuery === null || paginationQuery === void 0 ? void 0 : paginationQuery.limit) {
        return yield books_model_1.Book.find(where).sort({ createdAt: 'desc' }).limit(+(paginationQuery === null || paginationQuery === void 0 ? void 0 : paginationQuery.limit)).populate('createdBy');
    }
    return yield books_model_1.Book.find(where).populate('createdBy');
});
const getBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield books_model_1.Book.findById(id).populate('createdBy');
});
const updateBook = (id, payload, validateUser) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user = yield users_model_1.User.exists({
        email: validateUser.email
    });
    if (!user)
        throw new Error('Failed to create book!');
    const book = yield books_model_1.Book.findById(id);
    if (((_a = book === null || book === void 0 ? void 0 : book.createdBy) === null || _a === void 0 ? void 0 : _a.toString()) !== user._id.toString())
        throw new Error('Forbidden!');
    return yield books_model_1.Book.findByIdAndUpdate(id, payload, { new: true }).populate('createdBy');
});
const deleteBook = (id, validateUser) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const user = yield users_model_1.User.exists({
        email: validateUser.email
    });
    if (!user)
        throw new Error('Failed to delete book!');
    const book = yield books_model_1.Book.findById(id);
    if (((_b = book === null || book === void 0 ? void 0 : book.createdBy) === null || _b === void 0 ? void 0 : _b.toString()) !== user._id.toString())
        throw new Error('Forbidden!');
    return yield books_model_1.Book.findByIdAndDelete(id);
});
const getBooksGroupBy = () => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d, _e, _f;
    const pipeline = [
        {
            $facet: {
                'years': [{
                        $project: {
                            year: { $year: '$publicationDate' },
                        },
                    },
                    {
                        $group: {
                            _id: null,
                            years: { $addToSet: '$year' },
                        },
                    },
                    {
                        $project: {
                            _id: 0,
                            years: 1,
                        },
                    },],
                'genre': [{
                        $group: {
                            _id: '$genre'
                        }
                    },
                    {
                        $group: {
                            _id: null,
                            genre: { $addToSet: '$_id' },
                        },
                    },
                    {
                        $project: {
                            genre: 1,
                            _id: 0
                        }
                    }]
            }
        }
    ];
    const result = yield books_model_1.Book.aggregate(pipeline);
    const years = (_d = (_c = result[0]) === null || _c === void 0 ? void 0 : _c.years[0]) === null || _d === void 0 ? void 0 : _d.years;
    const genres = (_f = (_e = result[0]) === null || _e === void 0 ? void 0 : _e.genre[0]) === null || _f === void 0 ? void 0 : _f.genre;
    return {
        years,
        genres
    };
});
exports.BookService = {
    createBook,
    getAllBooks,
    getBook,
    updateBook,
    deleteBook,
    getBooksGroupBy
};
