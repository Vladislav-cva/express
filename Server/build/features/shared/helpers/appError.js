"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.AppError = void 0;
var AppError = /** @class */ (function () {
    function AppError(status, message) {
        this.status = status;
        this.message = message;
    }
    AppError.badRequest = function (message) {
        return new AppError(400, message);
    };
    AppError.internalServerError = function (message) {
        return new AppError(500, message);
    };
    return AppError;
}());
exports.AppError = AppError;
function errorHandler(err, res) {
    if (err instanceof AppError) {
        res.status(err.status).json(err.message);
        return;
    }
    res.status(406).json(err.message);
}
exports.errorHandler = errorHandler;
