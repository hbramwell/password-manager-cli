import * as path from "path"

export const ENCRYPTION_KEY =
  process.env.ENCRYPTION_KEY || "default-encryption-key"
export const DATA_FILE = path.join(process.cwd(), "passwords.enc")
