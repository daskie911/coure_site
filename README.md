# Course Site

This is a web application for a course site built with Express.js and MongoDB.

## Installation

1. Clone the repository: `git clone https://github.com/yawn911/course_site.git`
2. Install dependencies: `npm install`
3. Set up environment variables:
    - Create a `.env` file in the root directory
    - Add the following variables to the `.env` file:
      ```
      DB_URL=<your-mongodb-url>
      PORT=<port-number>
      ```
4. Start the server: `npm start`

## Usage

- Access the home page at `http://localhost:<port>/`
- Register a new user at `http://localhost:<port>/register`
- Log in at `http://localhost:<port>/login`
- View a list of users at `http://localhost:<port>/users`

## Dependencies

- Express.js
- Mongoose
- EJS
- Body-parser
- dotenv

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
