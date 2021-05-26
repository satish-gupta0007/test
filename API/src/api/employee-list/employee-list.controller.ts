import { Request, Response, NextFunction } from 'express';
import { config, ENV } from '../../../config/config.json';
import { isEmpty } from '../../../config/config.json';
import { EmployeeListRepository } from '../../repository/mariaDB/employee-list/employee-list.repository';
import { MSGS } from '../employee-list/employee-list.constants';
import * as fs from 'fs';
export class EmployeeListController {
  public async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      let statusCode: number;
      let employeeListsRepository = new EmployeeListRepository();

      let employeeList = await employeeListsRepository.getAllEmployee();
      if (employeeList.length > 0) {
        res.status(200).json({ data: employeeList });
        
      } else {
        res.status(200).json({ data: [] });
      }
    } catch (err) {
      res.status(config.statusCode.internalServer).json({ error: err.message });
    }
  }

  public async createStudent(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('req', req);

      let employeeListsRepository = new EmployeeListRepository();
      let isRecordAdded = await employeeListsRepository.createEmployee(
        req.body
      );
      if (isRecordAdded == true) {
        res.status(200).json({ message: 'Record Added Successful' });
      } else {
        res.status(400).json({ message: 'Something Went Wrong!' });

      }
    } catch (err) {
      res.status(config.statusCode.internalServer).json({ error: err.message });
    }
  }

  public async updateEmployee(req: Request, res: Response, next: NextFunction) {
    try {
      let employeeListsRepository = new EmployeeListRepository();
      let isUserUpdated = await employeeListsRepository.updateEmployee(
        req.body
      );
      if (isUserUpdated.affectedRows > 0) {
        res
          .status(config.statusCode.successful)
          .json({ message: MSGS.USER_UPDATE });
      } else {
        res
          .status(config.statusCode.badRequest)
          .json({ message: MSGS.USER_ALREADY_EXIST });
      }
    } catch (err) {
      res.status(config.statusCode.internalServer).json({ error: err.message });
    }
  }

  public async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      let employeeListsRepository = new EmployeeListRepository();
      let userDelete = await employeeListsRepository.deleteEmployeeById(
        req.params.id
      );
      if (userDelete.affectedRows > 0) {
        res
          .status(config.statusCode.successful)
          .json({ message: MSGS.USER_DELETE });
      } else {
        res
          .status(config.statusCode.successful)
          .json({ message: MSGS.USER_FAIL });
      }
    } catch (error) {
      res.status(config.statusCode.badRequest).json({ message: error.message });
    }
  }

  //get user by id

  // public async getEmployeeById(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ) {
  //   try {
  //     let statusCode: number;
  //     let employeeListsRepository = new EmployeeListRepository();
  //     let employee = await employeeListsRepository.getEmployeeById(
  //       req.params.id
  //     );
  //     statusCode = isEmpty(employee)
  //       ? config.statusCode.empty
  //       : config.statusCode.successful;
  //     res.status(200).json({ data: employee });
  //   } catch (error) {
  //     res.status(config.statusCode.badRequest).json({ message: error.message });
  //   }
  // }
  // public async uplodData(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const file = req.file;
  //     console.log('file::::', req.body);
  //     console.log('file', file);
  //     if (!file) {
  //       console.log('Nhi hua');
  //       const error = new Error('Please upload a file');
  //       // error.httpStatusCode = 400
  //       return next(error);
  //     }
  //     res.status(config.statusCode.successful).json({ data: file });
  //   } catch (error) {
  //     res.status(config.statusCode.badRequest).json({ message: error.message });
  //   }
  // }
}
