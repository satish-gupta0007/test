"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.EmployeeListRepository = void 0;
var employee_model_1 = require("../../../models/employee.model");
var tableName = '`employee_Info`';
var EmployeeListRepository = /** @class */ (function () {
    function EmployeeListRepository() {
    }
    EmployeeListRepository.prototype.createEmployee = function (userDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var addEmployeeQuery;
            return __generator(this, function (_a) {
                try {
                    addEmployeeQuery = "INSERT INTO userinfo (first_name, last_name, email, profile_picture,hobbies,dob,employee_type)\n      VALUES ('" + userDetails.firstName + "','" + userDetails.lastName + "','" + userDetails.email + "','" + userDetails.profilePicture + "','" + userDetails.hobbies + "','" + userDetails.dob + "','" + userDetails.employeeType + "')";
                    // let insertData= await pool.conn
                    // let addEmployeeQuery = `INSERT INTO ${tableName} (firstName, lastName, password, phone,username,picture)
                    // VALUES ('${userDetails.firstName}','${userDetails.lastName}','${userDetails.firstName}','${userDetails.firstName}','${userDetails.firstName}','${userDetails.firstName}')`;
                }
                catch (err) {
                    throw err;
                }
                return [2 /*return*/];
            });
        });
    };
    EmployeeListRepository.prototype.getAllEmployee = function () {
        return __awaiter(this, void 0, void 0, function () {
            var employeeList, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, employee_model_1.EmployeeInfo.find()];
                    case 1:
                        employeeList = _a.sent();
                        //   console.log('ifno', employeeList);
                        return [2 /*return*/, employeeList];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeListRepository.prototype.getEmployeeById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var employeeList, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log('id', id);
                        return [4 /*yield*/, employee_model_1.EmployeeInfo.find({ _id: id })];
                    case 1:
                        employeeList = _a.sent();
                        return [2 /*return*/, employeeList];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeListRepository.prototype.updateEmployee = function (userDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var employeeDetails, employeeStatus, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log("hello update");
                        employeeDetails = new employee_model_1.EmployeeInfo({
                            FirstName: userDetails.firstName,
                            LastName: userDetails.lastName,
                            Email: userDetails.email,
                            ProfilePicture: userDetails.profilePicture,
                            Hobbies: userDetails.hobbies,
                            Dob: userDetails.dob,
                            EmployeeType: userDetails.employeeType
                        });
                        return [4 /*yield*/, employee_model_1.EmployeeInfo.findByIdAndUpdate(userDetails.id, employeeDetails, { "new": true })];
                    case 1:
                        employeeStatus = _a.sent();
                        console.log("employeeStatus", employeeStatus);
                        result = employeeStatus ? true : false;
                        if (result === true) {
                            return [2 /*return*/, employeeStatus];
                        }
                        else if (result === false) {
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        throw err_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeListRepository.prototype.deleteEmployeeById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteStatus, employeeList, deleteStatu, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        deleteStatus = void 0;
                        return [4 /*yield*/, employee_model_1.EmployeeInfo.findById({ _id: id })];
                    case 1:
                        employeeList = _a.sent();
                        if (!employeeList) return [3 /*break*/, 3];
                        return [4 /*yield*/, employee_model_1.EmployeeInfo.deleteOne({ _id: id })];
                    case 2:
                        deleteStatu = _a.sent();
                        console.log('deleteStatus', deleteStatu);
                        result = deleteStatu.deletedCount == 1 ? true : false;
                        if (result === true) {
                            return [2 /*return*/, 2];
                        }
                        else if (result === false) {
                            return [2 /*return*/, 3];
                        }
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_3 = _a.sent();
                        throw error_3;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return EmployeeListRepository;
}());
exports.EmployeeListRepository = EmployeeListRepository;
