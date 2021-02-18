import { Request, Response } from "express";
import { v4 } from "uuid";

import { users } from "../../../data";

import parseImage from "../../utils/parseImage";
import { comparePassword, generatePassword } from "../../utils/password";
import { generateToken } from "../../utils/token";

class UserController {
  public async index(req: Request, res: Response) {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado. " });
    }

    if (comparePassword(password, user.password)) {
      const token = generateToken({ username });

      return res.json({
        username,
        token
      });
    } else {
      return res.status(400).json({ error: "Senha inválida. " });
    }
  }

  public async store(req: Request, res: Response) {
    const { username, password, photo } = req.body;    

    const user = users.find(user => user.username === username);    

    if (user) {
      return res
        .status(400)
        .json({ error: "Já existe um usuário com este nome. " });
    }

    parseImage(photo, username);

    const newPassword = generatePassword(password);

    users.push({
      id: v4(),
      username,
      password: newPassword,
      cart: []
    });

    const token = generateToken({ username });

    return res.json({
      username,
      token
    });
  }
}

export default new UserController();
