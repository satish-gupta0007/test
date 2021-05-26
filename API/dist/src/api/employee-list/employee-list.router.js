"use strict";
exports.__esModule = true;
var express_1 = require("express");
var employee_list_controller_1 = require("./employee-list.controller");
var EmployeeListsRoutes = /** @class */ (function () {
    function EmployeeListsRoutes() {
        this.employeeListController = new employee_list_controller_1.EmployeeListController();
        this.router = express_1.Router();
        this.init();
    }
    EmployeeListsRoutes.prototype.init = function () {
        this.router.get('/', this.employeeListController.getUser);
        this.router.post('/', this.employeeListController.createStudent);
        // this.router.put('/', this.employeeListController.updateEmployee);
        // this.router.delete('/:id', this.employeeListController.deleteUser);
    };
    return EmployeeListsRoutes;
}());
var employeeListsRoutes = new EmployeeListsRoutes();
employeeListsRoutes.init();
exports["default"] = employeeListsRoutes.router;
