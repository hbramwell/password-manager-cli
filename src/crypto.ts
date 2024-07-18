import * as crypto from "crypto"
import { ENCRYPTION_KEY } from "./config"

function getDerivedKey(key: string): Buffer {
  return crypto.scryptSync(key, "salt", 32)
}

export function encrypt(text: string): string {
  const iv = crypto.randomBytes(16)
  const key = getDerivedKey(ENCRYPTION_KEY)
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv)
  let encrypted = cipher.update(text, "utf8", "hex")
  encrypted += cipher.final("hex")
  return iv.toString("hex") + ":" + encrypted
}

export function decrypt(text: string): string {
  const [ivHex, encryptedHex] = text.split(":")
  const iv = Buffer.from(ivHex, "hex")
  const key = getDerivedKey(ENCRYPTION_KEY)
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv)
  let decrypted = decipher.update(encryptedHex, "hex", "utf8")
  decrypted += decipher.final("utf8")
  return decrypted
}
