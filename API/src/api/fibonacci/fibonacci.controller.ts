import { Request, Response, NextFunction } from 'express';
import { config } from '../../../config/config.json';
import { FibonacciRepository } from '../../repository/mariaDB/fibonacci/fibonacci.repository';
export class FibonacciController {
  public async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      let statusCode: number;
      let fibonacciRepository = new FibonacciRepository();

      let employeeList = await fibonacciRepository.getAllEmployee();
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

      let fibonacciRepository = new FibonacciRepository();
      let isRecordAdded = await fibonacciRepository.createEmployee(
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
}
