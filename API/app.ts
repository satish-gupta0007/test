import express = require("express");
import * as bodyParser from "body-parser";
import * as useragent from "express-useragent";
import EmployeeLists from './src/api/employee-list/employee-list.router'
import Fibonnaci from './src/api/fibonacci/fibonacci.router'


class App { 
  public app: express.Application
  
  constructor() {
    this.app = express();
    this.config();
    this.router();
  }

  private config(): void {
    this.app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}));
    this.app.use(bodyParser.json({limit:'50mb'}));   
    this.app.use('/assets', express.static('assets'));
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Expose-Headers", "x-total-count");
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
      res.header("Access-Control-Allow-Headers", "Content-Type,authorization");
      next();
    });    
  }

  private router(): void {
    this.app.use(useragent.express());
    this.app.use('/permutation', EmployeeLists);
    this.app.use('/fibonacci', Fibonnaci);

  }

}

export default new App().app;