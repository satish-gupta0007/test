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
exports.EmployeeListController = void 0;
var config_json_1 = require("../../../config/config.json");
var employee_list_repository_1 = require("../../repository/mariaDB/employee-list/employee-list.repository");
var employee_list_constants_1 = require("../employee-list/employee-list.constants");
var EmployeeListController = /** @class */ (function () {
    function EmployeeListController() {
    }
    EmployeeListController.prototype.getUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var statusCode, employeeListsRepository, employeeList, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statusCode = void 0;
                        employeeListsRepository = new employee_list_repository_1.EmployeeListRepository();
                        return [4 /*yield*/, employeeListsRepository.getAllEmployee()];
                    case 1:
                        employeeList = _a.sent();
                        if (employeeList.length > 0) {
                            res.status(200).json({ data: employeeList });
                        }
                        else {
                            res.status(200).json({ data: [] });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        res.status(config_json_1.config.statusCode.internalServer).json({ error: err_1.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeListController.prototype.createStudent = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var employeeListsRepository, isRecordAdded, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log('req', req);
                        employeeListsRepository = new employee_list_repository_1.EmployeeListRepository();
                        return [4 /*yield*/, employeeListsRepository.createEmployee(req.body)];
                    case 1:
                        isRecordAdded = _a.sent();
                        if (isRecordAdded == true) {
                            res.status(200).json({ message: 'Record Added Successful' });
                        }
                        else {
                            res.status(400).json({ message: 'Something Went Wrong!' });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        res.status(config_json_1.config.statusCode.internalServer).json({ error: err_2.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeListController.prototype.updateEmployee = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var employeeListsRepository, isUserUpdated, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        employeeListsRepository = new employee_list_repository_1.EmployeeListRepository();
                        return [4 /*yield*/, employeeListsRepository.updateEmployee(req.body)];
                    case 1:
                        isUserUpdated = _a.sent();
                        if (isUserUpdated.affectedRows > 0) {
                            res
                                .status(config_json_1.config.statusCode.successful)
                                .json({ message: employee_list_constants_1.MSGS.USER_UPDATE });
                        }
                        else {
                            res
                                .status(config_json_1.config.statusCode.badRequest)
                                .json({ message: employee_list_constants_1.MSGS.USER_ALREADY_EXIST });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        res.status(config_json_1.config.statusCode.internalServer).json({ error: err_3.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EmployeeListController.prototype.deleteUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var employeeListsRepository, userDelete, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        employeeListsRepository = new employee_list_repository_1.EmployeeListRepository();
                        return [4 /*yield*/, employeeListsRepository.deleteEmployeeById(req.params.id)];
                    case 1:
                        userDelete = _a.sent();
                        if (userDelete.affectedRows > 0) {
                            res
                                .status(config_json_1.config.statusCode.successful)
                                .json({ message: employee_list_constants_1.MSGS.USER_DELETE });
                        }
                        else {
                            res
                                .status(config_json_1.config.statusCode.successful)
                                .json({ message: employee_list_constants_1.MSGS.USER_FAIL });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(config_json_1.config.statusCode.badRequest).json({ message: error_1.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return EmployeeListController;
}());
exports.EmployeeListController = EmployeeListController;
