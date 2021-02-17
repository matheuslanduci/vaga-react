import bcrypt from "bcryptjs";

export function generatePassword(password: string) {
  return bcrypt.hash(password, 8);
}

export function comparePassword(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}
