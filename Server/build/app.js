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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Vendors
var bodyParser = __importStar(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
require("./config/db");
//Routes
var auth_routes_1 = require("./features/auth/auth.routes");
var projectRoute_1 = require("./features/projects/projectRoute");
//Helpers
var App = /** @class */ (function () {
    function App() {
        this.express = express_1.default();
        this.setMiddleware();
        this.setRoutes();
        this.catchErrors();
        this.setRoutesProj();
    }
    App.prototype.setMiddleware = function () {
        this.express.use(cors_1.default());
        this.express.use(morgan_1.default("dev"));
        this.express.use(bodyParser.json({ limit: '10mb' }));
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(helmet_1.default());
    };
    App.prototype.setRoutes = function () {
        this.express.use('/api/auth', auth_routes_1.authRouter);
    };
    App.prototype.setRoutesProj = function () {
        this.express.use('/api/registration', projectRoute_1.ProjectRouter);
    };
    App.prototype.catchErrors = function () {
    };
    return App;
}());
exports.default = new App().express;
