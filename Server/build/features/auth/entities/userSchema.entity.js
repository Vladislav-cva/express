"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Vendors
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});
;
exports.default = mongoose_1.model("User", userSchema);
