# Elevator App Boilerplate

This is a boilerplate for building an elevator app using the following technologies:

- [Remix](https://remix.run/): A server framework for building web applications.
- [Drizzle](https://drizzle.dev/): An ORM (Object-Relational Mapping) library for database operations.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for styling.
- [Fly.io](https://fly.io/): A platform for deploying and scaling applications.
- [Turso](https://turso.dev/): A database provider for managing data storage.

## Getting Started

To get started with this boilerplate, follow these steps:

1. Clone the repository: `git clone https://github.com/Miloshinjo/remix-tailwind-turso-drizzle-boilerplate`
2. Install the dependencies: `npm install`
3. Configure the database connection in the `config.js` file.
4. Start the server: `npm start`
5. Open your browser and visit `http://localhost:5173` to see the app in action.

## Deployment

This boilerplate is configured to deploy to Fly.io using GitHub Actions. To deploy your app, follow these steps:

1. Sign up for a Fly.io account and create a new app.
2. Set up the necessary environment variables in your Fly.io app settings.
3. Push your changes to the `main` branch of your GitHub repository.
4. Make sure to follow the Fly.io guide on how to add GitHub Actions that will automatically trigger a deployment to Fly.io.

For more information on deploying with Fly.io and GitHub Actions, refer to their respective documentation.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This boilerplate is open source and available under the [MIT License](LICENSE).