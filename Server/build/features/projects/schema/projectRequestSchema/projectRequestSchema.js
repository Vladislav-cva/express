"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRequestSchema = void 0;
var yup_1 = require("yup");
exports.ProjectRequestSchema = yup_1.object().shape({
    name: yup_1.string().required(),
    description: yup_1.string().required(),
});
