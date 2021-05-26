import { Router } from 'express';
import { FibonacciController } from './fibonacci.controller';

class FibonacciRoutes {
  private fibonacciController: FibonacciController = new FibonacciController();
  router: Router;
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get('/', this.fibonacciController.getUser);
    this.router.post('/', this.fibonacciController.createStudent);

    // this.router.put('/', this.employeeListController.updateEmployee);
    // this.router.delete('/:id', this.employeeListController.deleteUser);
  }
}
const fibonacciRoutes = new FibonacciRoutes();
fibonacciRoutes.init();
export default fibonacciRoutes.router;
