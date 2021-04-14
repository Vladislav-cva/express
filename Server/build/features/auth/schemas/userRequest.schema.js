"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
var yup_1 = require("yup");
exports.UserSchema = yup_1.object().shape({
    name: yup_1.string().required(),
    surname: yup_1.string().required(),
    email: yup_1.string().email().required(),
    password: yup_1.string().required(),
});
