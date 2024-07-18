import { Command } from "commander"
import chalk from "chalk"

export function setupErrorHandling(program: Command): void {
  // Error handling for unknown commands
  program.on("command:*", () => {
    console.error(
      chalk.red(
        "Invalid command: %s\nSee --help for a list of available commands.",
      ),
      program.args.join(" "),
    )
    process.exit(1)
  })

  // Graceful shutdown
  process.on("SIGINT", () => {
    console.log(chalk.yellow("\nGracefully shutting down..."))
    process.exit(0)
  })

  process.on("uncaughtException", (error) => {
    console.error(chalk.red("Uncaught Exception:"), error)
    process.exit(1)
  })

  process.on("unhandledRejection", (reason, promise) => {
    console.error(
      chalk.red("Unhandled Rejection at:"),
      promise,
      "reason:",
      reason,
    )
    process.exit(1)
  })
}
