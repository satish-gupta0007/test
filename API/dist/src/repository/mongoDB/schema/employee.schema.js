"use strict";
exports.__esModule = true;
exports.EmployeeSchema = void 0;
var mongoose_1 = require("mongoose");
exports.EmployeeSchema = new mongoose_1.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    ProfilePicture: String,
    Hobbies: Array,
    Dob: String,
    EmployeeType: String
});
