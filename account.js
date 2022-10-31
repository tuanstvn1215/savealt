"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rawAcountModel = void 0;
const mongoose_1 = require("mongoose");
const RawAcountschema = new mongoose_1.Schema({
    userName: { type: String, required: true },
    passWord: { type: String, required: true },
    status: { type: Number, required: false, default: 0 },
});
exports.rawAcountModel = (0, mongoose_1.model)("Rawaccount", RawAcountschema, "rawaccounts");
