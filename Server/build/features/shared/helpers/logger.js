"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var winston_1 = require("winston");
exports.logger = winston_1.createLogger({
    format: winston_1.format.json(),
    transports: [new winston_1.transports.Console()],
    exitOnError: false,
});
