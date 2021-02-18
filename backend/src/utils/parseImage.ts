import path from "path";
import fs from "fs";

function getFilepath(name: string) {
  return path.join("public", "uploads", `${name}.png`);
}

export default function parseImage(photo: string, username: string) {
  const data = photo.replace(/^data:image\/\w+;base64,/, "");
  const buff = Buffer.from(data, "base64");  
  fs.writeFile(getFilepath(username), buff,  err => {
    if (err) throw err;
  });
}
