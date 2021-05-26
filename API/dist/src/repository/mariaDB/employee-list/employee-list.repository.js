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
var mysql_config_1 = require("../../../../config/mysql-config");
var fs = require("fs-extra");
var tableName = '`permutation`';
var destination = 'assets/images';
var EmployeeListRepository = /** @class */ (function () {
    function EmployeeListRepository() {
    }
    EmployeeListRepository.prototype.createEmployee = function (userDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var addEmployeeQuery, InsertData, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('userDetails', userDetails);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        addEmployeeQuery = "INSERT INTO " + tableName + " (field_1,field_2,field_3)\n                              VALUES ('" + userDetails.field1 + "','" + userDetails.field2 + "','" + userDetails.field3 + "')";
                        return [4 /*yield*/, mysql_config_1.pool.query(addEmployeeQuery)];
                    case 2:
                        InsertData = _a.sent();
                        console.log('InsertData', InsertData);
                        if (InsertData.affectedRows > 0) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        throw err_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeListRepository.prototype.getAllEmployee = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getRecordQuery, getRecordData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        getRecordQuery = "SELECT * FROM " + tableName;
                        return [4 /*yield*/, mysql_config_1.pool.query(getRecordQuery)];
                    case 1:
                        getRecordData = _a.sent();
                        // if(getRecordData.length > 0){
                        return [2 /*return*/, getRecordData];
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
            var getEmployeeeQuery_1, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        getEmployeeeQuery_1 = "SELECT * FROM " + tableName + " WHERE id=" + id;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                mysql_config_1.pool.query(getEmployeeeQuery_1, function (error, results) {
                                    if (error) {
                                        reject(error);
                                    }
                                    resolve(results);
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
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
            var udateStudentQuery_1, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        udateStudentQuery_1 = "UPDATE " + tableName + " SET\n                               first_name=" + ("'" + userDetails.firstName + "'") + ", \n                               last_name=" + ("'" + userDetails.lastName + "'") + ",\n                               email=" + ("'" + userDetails.email + "'") + ",\n                               profile_picture=" + ("'" + userDetails.image + "'") + ",\n                               hobbies=" + ("'" + userDetails.hobbies + "'") + ",\n                               dob=" + ("'" + userDetails.dob + "'") + ",\n                               employee_type=" + ("'" + userDetails.employeeType + "'") + "\n                               WHERE id = " + userDetails.id;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                mysql_config_1.pool.query(udateStudentQuery_1, function (error, results) {
                                    if (error) {
                                        reject(error);
                                    }
                                    resolve(results);
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        err_2 = _a.sent();
                        throw err_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeListRepository.prototype.deleteEmployeeById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteStudentQuery_1, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        deleteStudentQuery_1 = "DELETE FROM " + tableName + " WHERE id=" + id;
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                mysql_config_1.pool.query(deleteStudentQuery_1, function (error, results) {
                                    if (error) {
                                        reject(error);
                                    }
                                    fs.unlink(destination);
                                    resolve(results);
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return EmployeeListRepository;
}());
exports.EmployeeListRepository = EmployeeListRepository;
