"use strict";
// import * as mysql from 'mysql';
// import { ENV } from './config.json';
// import * as util from 'util';
exports.__esModule = true;
exports.dbPool = exports.pool = void 0;
// export const pool = mysql.createPool({
//   host: ENV.DB_HOST,
//   user: ENV.DB_USER,
//   password: ENV.DB_PASSWORD,
//   database: ENV.DB_NAME,
// });
// exports.pool = pool;
var config_json_1 = require("./config.json");
var util = require("util");
var mysql = require('mysql');
exports.pool = mysql.createPool({
    host: config_json_1.ENV.DB_HOST,
    user: config_json_1.ENV.DB_USER,
    password: config_json_1.ENV.DB_PASSWORD,
    database: config_json_1.ENV.DB_NAME
});
// .promise();
exports.dbPool = {
    query: function (text) { return util.promisify(exports.pool.query); },
    pool: exports.pool
};
exports.pool.query = util.promisify(exports.pool.query);
exports.pool.getConnection = util.promisify(exports.pool.getConnection);
