"use strict";
exports.__esModule = true;
exports.EmployeeInfo = void 0;
var mongoose_1 = require("mongoose");
var employee_schema_1 = require("../repository/mongoDB/schema/employee.schema");
var EmployeeInfo = mongoose_1.model('EmployeeInfo', employee_schema_1.EmployeeSchema);
exports.EmployeeInfo = EmployeeInfo;
