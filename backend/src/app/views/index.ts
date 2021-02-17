import { Router } from "express";

import UserController from "../controllers/User";
import ProductController from "../controllers/Product";
import CartController from "../controllers/Cart";

import Authorization from "../middlewares/Authorization";

const routes = Router();

routes.post("/signin", UserController.index);
routes.post("/signup", UserController.store);
routes.get("/products", ProductController.index);
routes.get("/product/:id", ProductController.show);
routes.use("/cart", Authorization.index);
routes.get("/cart", CartController.index);
routes.post("/cart/add", CartController.create);
routes.delete("/cart/remove", CartController.destroy);

export default routes;
