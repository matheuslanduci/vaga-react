import { NextFunction, Request, Response } from "express";
import { JsonWebTokenError } from "jsonwebtoken";

import { verifyToken } from "../../utils/token";

class Authorization {
  public async index(req: Request, res: Response, next: NextFunction) {
    try {
      const authToken = req.headers.authorization;
      const username = req.headers.username;

      if (!username) {
        return res.status(400).send({
          error:
            "O nome não foi enviado no cabeçalho da requisição. Tente novamente."
        });
      }
      if (!authToken) {
        return res.status(400).send({
          error:
            "O token não foi enviado no cabeçalho da requisição. Tente novamente."
        });
      }

      if (!authToken?.startsWith("Bearer ")) {
        return res.status(400).send({
          error: "Token inválido. Tente novamente."
        });
      }

      const token = authToken?.replace("Bearer ", "");

      const verifiedToken: any = verifyToken(token!);

      if (verifiedToken.username !== username) {
        return res.status(400).send({
          error: "Token inválido. Tente novamente."
        });
      }

      next();
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        return res.status(400).send({
          error: "Token inválido. Tente novamente."
        });
      }
    }
  }
}

export default new Authorization();
