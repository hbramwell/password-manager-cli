import * as fs from "fs/promises"
import { DATA_FILE } from "./config"
import { encrypt, decrypt } from "./crypto"
import { type Password } from "./types"

export async function readPasswords(): Promise<Password[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8")
    return JSON.parse(decrypt(data))
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return []
    }
    throw error
  }
}

export async function writePasswords(passwords: Password[]): Promise<void> {
  const encryptedData = encrypt(JSON.stringify(passwords))
  await fs.writeFile(DATA_FILE, encryptedData, "utf-8")
}
