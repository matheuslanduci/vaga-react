import { Request, Response } from "express";

import { users, products, Products } from "../../../data";
import { ResponseProducts } from "./Product";

class CartController {
  public async index(req: Request, res: Response) {
    const username = req.headers.username;

    const user = users.find(user => user.username === username);
    const cartProducts: Products = [];
    const prods: ResponseProducts = [];

    user?.cart.forEach(item => {
      cartProducts.push(products.find(prod => prod.id === item)!);
    });

    cartProducts.forEach(product => {
      let rating = 0;

      product.comments.forEach(comment => (rating += comment.rating));

      rating /= product.comments.length;

      prods.push({
        id: product.id,
        name: product.name,
        rating: rating || 0,
        price: product.price,
        photo: product.photos[0]
      });
    });

    return res.json(prods);
  }

  public async create(req: Request, res: Response) {
    const username = req.headers.username;
    const { productId } = req.body;

    const user = users.find(user => user.username === username);

    user?.cart.push(productId);

    return res.json({ message: "Produto adicionado com sucesso ao carrinho!" });
  }

  public async destroy(req: Request, res: Response) {
    const username = req.headers.username;
    const { productId } = req.body;

    const user = users.find(user => user.username === username);

    user?.cart.filter(item => item !== productId);

    return res.json({ message: "Produto removido com sucesso ao carrinho!" });
  }
}

export default new CartController();
