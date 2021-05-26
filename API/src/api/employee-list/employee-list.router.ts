import { Router } from 'express';
import { EmployeeListController } from './employee-list.controller';

class EmployeeListsRoutes {
  private employeeListController: EmployeeListController = new EmployeeListController();
  router: Router;
  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get('/', this.employeeListController.getUser);
    this.router.post('/', this.employeeListController.createStudent);

    // this.router.put('/', this.employeeListController.updateEmployee);
    // this.router.delete('/:id', this.employeeListController.deleteUser);
  }
}
const employeeListsRoutes = new EmployeeListsRoutes();
employeeListsRoutes.init();
export default employeeListsRoutes.router;
