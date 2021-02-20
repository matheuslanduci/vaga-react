import { Request, Response } from "express";

import { Products, products } from "../../../data";

type ResponseProduct = {  
  id: string;
  name: string;
  rating: number;
  price: number;
  photo: string;
};

export type ResponseProducts = ResponseProduct[];

class ProductController {
  public async index(req: Request, res: Response) {
    const prods: ResponseProducts = [];
    const label = req.query.label;
    const query = req.query.query;

    let filteredProducts: Products = [];

    if (label) {
      filteredProducts = products.filter(product => product.label === label);
    } else {
      filteredProducts = products;
    }

    if (query) {
      filteredProducts = filteredProducts.filter(
        prod => prod.name.toLowerCase().indexOf(query as string) > -1
      );
    }

    filteredProducts.forEach(product => {
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

  public async show(req: Request, res: Response) {
    const prods: ResponseProducts = [];
    const { id } = req.params;

    const product = products.find(prod => prod.id === id);

    if (!product) {
      return res
        .status(404)
        .json({ error: "Não foi encontrado nenhum produto com esse ID." });
    }

    const otherProducts = products.filter(
      prod => prod.label === product.label && prod.id !== product.id
    );

    otherProducts.forEach(product => {
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

    return res.json({ product, otherProducts: prods });
  }
}

export default new ProductController();
