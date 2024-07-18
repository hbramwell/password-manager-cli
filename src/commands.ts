import { Command } from "commander"
import chalk from "chalk"
import inquirer from "inquirer"
import { v4 as uuidv4 } from "uuid"
import { type Password } from "./types"
import { readPasswords, writePasswords } from "./storage"

export function setupCommands(program: Command): void {
  program
    .command("add")
    .description("Add a new password")
    .action(async () => {
      try {
        // @ts-ignore
        const answers = await inquirer.prompt([
          {
            type: "input",
            name: "service",
            message: "Enter the service name:",
          },
          { type: "input", name: "username", message: "Enter the username:" },
          {
            type: "password",
            name: "password",
            message: "Enter the password:",
          },
        ])

        const newPassword: Password = {
          id: uuidv4(),
          ...answers,
        }

        const passwords = await readPasswords()
        passwords.push(newPassword)
        await writePasswords(passwords)

        console.log(chalk.green("Password added successfully!"))
      } catch (error) {
        console.error(chalk.red("Error adding password:"), error)
      }
    })

  program
    .command("update <id>")
    .description("Update an existing password")
    .action(async (id: string) => {
      try {
        const passwords = await readPasswords()
        const passwordIndex = passwords.findIndex((p) => p.id === id)

        if (passwordIndex === -1) {
          console.log(chalk.red("Password not found."))
          return
        }

        // @ts-ignore
        const answers = await inquirer.prompt([
          {
            type: "input",
            name: "service",
            message: "Enter the new service name:",
            default: passwords[passwordIndex].service,
          },
          {
            type: "input",
            name: "username",
            message: "Enter the new username:",
            default: passwords[passwordIndex].username,
          },
          {
            type: "password",
            name: "password",
            message: "Enter the new password:",
          },
        ])

        passwords[passwordIndex] = { ...passwords[passwordIndex], ...answers }
        await writePasswords(passwords)

        console.log(chalk.green("Password updated successfully!"))
      } catch (error) {
        console.error(chalk.red("Error updating password:"), error)
      }
    })

  program
    .command("delete <id>")
    .description("Delete a password")
    .action(async (id: string) => {
      try {
        const passwords = await readPasswords()
        const updatedPasswords = passwords.filter((p) => p.id !== id)

        if (passwords.length === updatedPasswords.length) {
          console.log(chalk.red("Password not found."))
          return
        }

        await writePasswords(updatedPasswords)
        console.log(chalk.green("Password deleted successfully!"))
      } catch (error) {
        console.error(chalk.red("Error deleting password:"), error)
      }
    })

  program
    .command("list")
    .description("List all passwords")
    .action(async () => {
      try {
        const passwords = await readPasswords()

        if (passwords.length === 0) {
          console.log(chalk.yellow("No passwords found."))
          return
        }

        passwords.forEach((p) => {
          console.log(chalk.blue(`ID: ${p.id}`))
          console.log(chalk.green(`Service: ${p.service}`))
          console.log(chalk.cyan(`Username: ${p.username}`))
          console.log("---")
        })
      } catch (error) {
        console.error(chalk.red("Error listing passwords:"), error)
      }
    })

  program
    .command("retrieve <id>")
    .description("Retrieve a password")
    .action(async (id: string) => {
      try {
        const passwords = await readPasswords()
        const password = passwords.find((p) => p.id === id)

        if (!password) {
          console.log(chalk.red("Password not found."))
          return
        }

        console.log(chalk.blue(`ID: ${password.id}`))
        console.log(chalk.green(`Service: ${password.service}`))
        console.log(chalk.cyan(`Username: ${password.username}`))
        console.log(chalk.magenta(`Password: ${password.password}`))
      } catch (error) {
        console.error(chalk.red("Error retrieving password:"), error)
      }
    })
}
