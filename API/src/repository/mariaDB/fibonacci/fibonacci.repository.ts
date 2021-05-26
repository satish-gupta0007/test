import { pool } from '../../../../config/mysql-config';
import * as fs from 'fs-extra';

let tableName = '`fibonacci`';
let destination = 'assets/images';

export class FibonacciRepository {
  public async createEmployee(userDetails: any) {
    console.log('userDetails', userDetails);

    try {
      let addEmployeeQuery = `INSERT INTO ${tableName} (field)
                              VALUES ('${userDetails.field}')`;
      let InsertData = await pool.query(addEmployeeQuery);
      console.log('InsertData', InsertData);
      if (InsertData.affectedRows > 0) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      throw err;
    }
  }
  public async getAllEmployee(): Promise<any> {
    try {
      let getRecordQuery = `SELECT * FROM ${tableName}`;
      let getRecordData = await pool.query(getRecordQuery);
      // if(getRecordData.length > 0){
        return getRecordData;
      // }
   
    } catch (error) {
      throw error;
    }
  }
  public async getEmployeeById(id: any) {
    try {
      let getEmployeeeQuery = `SELECT * FROM ${tableName} WHERE id=${id}`;
      return await new Promise((resolve, reject) => {
        pool.query(getEmployeeeQuery, (error: any, results: any) => {
          if (error) {
            reject(error);
          }
          resolve(results);
        });
      });
    } catch (error) {
      throw error;
    }
  }

  public async updateEmployee(userDetails: any): Promise<any> {
    try {
      let udateStudentQuery = `UPDATE ${tableName} SET
                               first_name=${"'" + userDetails.firstName + "'"}, 
                               last_name=${"'" + userDetails.lastName + "'"},
                               email=${"'" + userDetails.email + "'"},
                               profile_picture=${"'" + userDetails.image + "'"},
                               hobbies=${"'" + userDetails.hobbies + "'"},
                               dob=${"'" + userDetails.dob + "'"},
                               employee_type=${
                                 "'" + userDetails.employeeType + "'"
                               }
                               WHERE id = ${userDetails.id}`;
      return await new Promise((resolve, reject) => {
        pool.query(udateStudentQuery, (error: any, results: any) => {
          if (error) {
            reject(error);
          }
          resolve(results);
        });
      });
    } catch (err) {
      throw err;
    }
  }
  public async deleteEmployeeById(id: any): Promise<any> {
    try {
      let deleteStudentQuery = `DELETE FROM ${tableName} WHERE id=${id}`;
      return await new Promise((resolve, reject) => {
        pool.query(deleteStudentQuery, (error: any, results: any) => {
          if (error) {
            reject(error);
          }
          fs.unlink(destination);
          resolve(results);
        });
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
