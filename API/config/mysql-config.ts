// import * as mysql from 'mysql';
// import { ENV } from './config.json';
// import * as util from 'util';


// export const pool = mysql.createPool({
//   host: ENV.DB_HOST,
//   user: ENV.DB_USER,
//   password: ENV.DB_PASSWORD,
//   database: ENV.DB_NAME,
// });


// exports.pool = pool;

import { ENV } from './config.json';
import * as util from 'util';
var mysql=require('mysql')
export var pool = mysql.createPool({
  host: ENV.DB_HOST,
  user: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_NAME
})
// .promise();
 export const dbPool = {
    query: (text:any) => util.promisify(pool.query),
    pool: pool
 };
 
  pool.query = util.promisify(pool.query);
  pool.getConnection = util.promisify(pool.getConnection);
