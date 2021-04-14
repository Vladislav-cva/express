"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.authHandler = void 0;
//Services
var authService = __importStar(require("./auth.service"));
var auth_service_1 = require("./auth.service");
var appError_1 = require("../shared/helpers/appError");
function authHandler(req, res) {
    authService
        .authCreate(req.body)
        .then(function (result) {
        res.send(result);
    })
        .catch(function (err) { return appError_1.errorHandler(err, res); });
}
exports.authHandler = authHandler;
function loginUser(req, res) {
    auth_service_1.iUserLogin(req.body)
        .then(function (result) {
        res.send(result);
    })
        .catch(function (err) { return appError_1.errorHandler(err, res); });
}
exports.loginUser = loginUser;
