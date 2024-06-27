# TicketSwap API

The TicketSwap API provides a seamless platform for buying and selling event tickets online. With user-friendly endpoints, developers can easily integrate ticket purchasing and listing functionalities into their React frontend applications. Whether it's concerts, sports events, or conferences, TicketSwap API offers a secure and efficient solution for handling online ticket transactions. Powered by Express and MongoDB, it ensures smooth communication between the backend and frontend, enabling users to browse, purchase, and list tickets with ease.

## Installation

1. Clone this repository: git clone https://github.com/martinbouhier/ticketswap-api.git
2. Navigate to the directory: cd ticketswap-api
3. Install dependencies: npm install

## Configuration

1. Copy the .env.example file and name it .env: cp .env.example .env
2. Edit the .env file and provide appropriate values for the environment variables.

## Usage

1. Start the server: npm start
2. The API will be available at http://localhost:3000 by default unless you specify a different port in your .env file.
3. You can test the endpoints using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/).

## Endpoints
- `POST /api/users/register: Crea un nuevo usuario.`
- `POST /api/users/login: Inicia sesión con las credenciales proporcionadas y devuelve un token de autenticación JWT.`
- `POST /api/tickets: Crea un nuevo ticket.`
- `GET /api/tickets: Obtiene una lista de todos los tickets.`
- `GET /api/tickets/: Obtiene un ticket por su ID.`
- `PUT /api/tickets/: Actualiza un ticket existente.`
- `DELETE /api/tickets/: Elimina un ticket por su ID.`
- `GET /api/tickets/search/: Busca tickets que coincidan con el título proporcionado.`

## Project Structure

/src: Contains all the source files of the application.
/routes: Contains route definition files.
/controllers: Contains route controllers.
/models: Contains data models of the application.
/middlewares: Contains middlewares used in the application.
/config: Contains configuration files, such as .env.
/tests: Contains test files.

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/new-feature).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature/new-feature).
5. Create a new Pull Request.

## Author

- Name: chiaravallone04 | chiara.vallone04@gmail.com
- Name: alexlangman | alulang@hotmail.com
- Name: kevinmvuylsteke | kevinmvuylsteke@gmail.com
- Name: martinbouhier | mbouhier128@gmail.com

## License

This project is licensed under the MIT License.

Feel free to customize this template according to the specific needs of your API and project. Make sure to include all relevant information about how to install, configure, and use your API, as well as how to contribute to the project if it's an open-source project.