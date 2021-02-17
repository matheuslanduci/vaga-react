import { Request, Response } from "express";
import multer from "multer";

const parser = multer({ dest: "public/uploads" });

export default function parseImage(req: Request, res: Response) {
  parser.single("avatar")(req, res, (err: any) => {
    if (err) {
      return res
        .status(500)
        .json({
          error:
            "Ocorreu um erro ao renderizar sua imagem. Tente novamente com outra!"
        });
    } else {
      const image = {
        id: "",
        url: ""
      };

      image.id = req.file.filename;
      image.url = `/uploads/${req.body.username}`;
      res
        .status(200)
        .json({ error: 0, payload: { id: image.id, url: image.url } });
    }
  });
}
