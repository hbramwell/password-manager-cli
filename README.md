# Password Manager CLI (Work in Progress)

🚧 This project is currently under active development. Please note that features and functionalities are subject to change. 🚧

A secure command-line interface (CLI) tool for managing passwords, built with TypeScript and Bun.

## Features (Planned)

- ✅ **Add, update, delete, and retrieve passwords**
- ✅ **List all stored passwords**
- ✅ **Secure encryption of stored passwords**
- ✅ **User-friendly command-line interface**
- ⬜ **Robust error handling and graceful shutdown**  
- ⬜ **Password strength checking**
- ⬜ **Password generation**
- ⬜ **Multi-factor authentication (MFA) support**

## Prerequisites

- Bun (version 1.0 or higher)

## Installation (Temporary)

Since the project is in progress, there isn't a formal release yet. Here's a temporary way to try it out:

1. Install Bun if you haven't already:

   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

2. Clone the repository:

   ```bash
   git clone https://github.com/horacebramwell/password-manager-cli.git
   cd password-manager-cli
   ```

3. Install dependencies:

   ```bash
   bun install
   ```

4. Run the development server:

   ```bash
   bun run dev
   ```

## Configuration

The encryption key is read from the `ENCRYPTION_KEY` environment variable. If not set, a default key is used (not recommended for production use).

To set the encryption key:

```bash
export ENCRYPTION_KEY="your-secret-key-here"
```

## Usage

Run the CLI tool using:

```bash
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

   ```bash
   bun run start add
   ```

2. List all passwords:

   ```bash
   bun run start list
   ```

3. Retrieve a specific password:

   ```bash
   bun run start retrieve abc123
   ```

4. Update a password:

   ```bash
   bun run start update abc123
   ```

5. Delete a password:
   ```bash
   bun run start delete abc123
   ```

## Security

- Passwords are encrypted using AES-256-CBC before being stored.
- The encryption key is derived using scrypt, which adds an extra layer of security.
- Passwords are stored in an encrypted file (`passwords.enc`) in the current working directory.

## Development

- To contribute or follow development progress, watch/star this repository on GitHub.
- Feel free to open issues to report bugs or suggest new features.

## Roadmap

- Implement robust error handling and graceful shutdown
- Add password strength checking
- Build password generation functionality
- Explore multi-factor authentication (MFA) support 

## Contributing

🚧 Contributions are very welcome! However, given the ongoing development, please check the open issues or contact the project maintainers before starting any substantial work. 🚧

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This tool is for educational purposes only. Please **do not** use it to store sensitive passwords until it's fully developed and security has been thoroughly tested. 
