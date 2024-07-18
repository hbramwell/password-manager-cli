# Password Manager CLI

A secure command-line interface (CLI) tool for managing passwords, built with TypeScript and Bun.

## Features

- Add, update, delete, and retrieve passwords
- List all stored passwords
- Secure encryption of stored passwords
- User-friendly command-line interface
- Robust error handling and graceful shutdown

## Prerequisites

- Bun (version 1.0 or higher)

## Installation

1. Install Bun if you haven't already:

   ```
   curl -fsSL https://bun.sh/install | bash
   ```

2. Clone the repository:

   ```
   git clone https://github.com/yourusername/password-manager-cli.git
   cd password-manager-cli
   ```

3. Install dependencies:

   ```
   bun install
   ```

4. Build the project:
   ```
   bun run build
   ```

## Configuration

The encryption key is read from the `ENCRYPTION_KEY` environment variable. If not set, a default key is used (not recommended for production use).

To set the encryption key:

```
export ENCRYPTION_KEY="your-secret-key-here"
```

## Usage

Run the CLI tool using:

```
bun run start [command] [options]
```

Available commands:

- `add`: Add a new password
- `update <id>`: Update an existing password
- `delete <id>`: Delete a password
- `list`: List all passwords
- `retrieve <id>`: Retrieve a specific password

### Examples

1. Add a new password:

   ```
   bun run start add
   ```

2. List all passwords:

   ```
   bun run start list
   ```

3. Retrieve a specific password:

   ```
   bun run start retrieve abc123
   ```

4. Update a password:

   ```
   bun run start update abc123
   ```

5. Delete a password:
   ```
   bun run start delete abc123
   ```

## Security

- Passwords are encrypted using AES-256-CBC before being stored.
- The encryption key is derived using scrypt, which adds an extra layer of security.
- Passwords are stored in an encrypted file (`passwords.enc`) in the current working directory.

## Development

To run the project in development mode with automatic restarting on file changes:

```
bun run dev
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This tool is for educational purposes only. While efforts have been made to ensure security, it's recommended to review and enhance security measures before using in a production environment.
