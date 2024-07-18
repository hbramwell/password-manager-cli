import { program } from "commander"
import { setupCommands } from "./commands"
import { setupErrorHandling } from "./error-handling"

program.version("1.0.0").description("A secure password manager CLI")

setupCommands(program)
setupErrorHandling(program)

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
