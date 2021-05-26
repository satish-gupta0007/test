"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var useragent = require("express-useragent");
var employee_list_router_1 = require("./src/api/employee-list/employee-list.router");
var fibonacci_router_1 = require("./src/api/fibonacci/fibonacci.router");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.config();
        this.router();
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use('/assets', express.static('assets'));
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Expose-Headers", "x-total-count");
            res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
            res.header("Access-Control-Allow-Headers", "Content-Type,authorization");
            next();
        });
    };
    App.prototype.router = function () {
        this.app.use(useragent.express());
        this.app.use('/permutation', employee_list_router_1["default"]);
        this.app.use('/fibonacci', fibonacci_router_1["default"]);
    };
    return App;
}());
exports["default"] = new App().app;
