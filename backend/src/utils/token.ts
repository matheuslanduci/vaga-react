import jwt, { verify } from "jsonwebtoken";

const secret = "SECRET_KEY_CONTROLLER";

export function generateToken(payload: object) {
  return jwt.sign(payload, secret);
}

export function verifyToken(token: string) {
  return verify(token, secret);
}