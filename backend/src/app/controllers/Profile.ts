import { Request, Response } from "express";

import { users } from "../../../data";

import parseImage from "../../utils/parseImage";

class Profile {
  public async index(req: Request, res: Response) {
    const username = req.headers.username;

    const user = users.find(user => user.username === username);

    res.json(user);
  }

  public async update(req: Request, res: Response) {
    const { photo } = req.body;
    const username = req.headers.username;

    parseImage(photo, username as string);

    const user = users.find(user => user.username === username);

    res.json(user);
  }
}

export default new Profile();
