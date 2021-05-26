"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fibonacci_controller_1 = require("./fibonacci.controller");
var FibonacciRoutes = /** @class */ (function () {
    function FibonacciRoutes() {
        this.fibonacciController = new fibonacci_controller_1.FibonacciController();
        this.router = express_1.Router();
        this.init();
    }
    FibonacciRoutes.prototype.init = function () {
        this.router.get('/', this.fibonacciController.getUser);
        this.router.post('/', this.fibonacciController.createStudent);
        // this.router.put('/', this.employeeListController.updateEmployee);
        // this.router.delete('/:id', this.employeeListController.deleteUser);
    };
    return FibonacciRoutes;
}());
var fibonacciRoutes = new FibonacciRoutes();
fibonacciRoutes.init();
exports["default"] = fibonacciRoutes.router;
