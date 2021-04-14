"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var yup_1 = require("yup");
var featuresSchema = new mongoose_1.Schema({
    name: {
        type: yup_1.string,
        required: true,
    },
    level: {
        type: yup_1.string,
        required: true,
    },
    description: {
        type: yup_1.string,
        requared: true,
    },
    maxEstimate: {
        type: yup_1.number,
        required: true,
    },
    minEstimate: {
        type: yup_1.number,
        required: true,
    },
});
exports.default = mongoose_1.model("Project", featuresSchema);
