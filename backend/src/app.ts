import express, { Application } from "express";
import cors from "cors";

import routes from "./app/views";

class App {
  private application: Application;

  constructor() {
    this.application = express();

    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.application.use(cors());
    this.application.use(express.json());
  }

  private routes() {
    this.application.use(routes);    
  }

  public init() {
    this.application.listen(3333, () => {
      console.log("Aplicação iniciada na porta 3333!");
    });
  }
}

export default new App();
