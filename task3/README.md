# Bookstore API - Task 3

A RESTful Bookstore API built with Express.js, featuring professional architecture, Joi validation, and modular design.

## Features

- ✅ Professional project structure (Controller-Route pattern)
- ✅ Joi validation for all POST requests
- ✅ RESTful API design with proper HTTP status codes
- ✅ Modular routing with Express Router
- ✅ Global error handling
- ✅ Morgan request logging
- ✅ Routing precedence demonstration

## Project Structure

task3/

├── src/

│ ├── controllers/ # Business logic handlers

│ │ └── bookController.js

│ ├── routes/ # Route definitions

│ │ └── bookRoutes.js

│ ├── middleware/ # Custom middleware

│ ├── utils/ # Helper functions & validation

│ │ └── validationSchema.js

│ ├── app.js # Express app setup

│ └── server.js # Server entry point

├── package.json

└── README.md

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/books` | Get all books |
| GET | `/api/v1/books/search` | Search books (routing test) |
| GET | `/api/v1/books/:id` | Get single book by ID |
| POST | `/api/v1/books` | Create new book |
| DELETE | `/api/v1/books/:id` | Delete a book |

## Validation Rules

- **title**: String, min 5 characters, required
- **author**: String, min 3 characters, required
- **price**: Number, min 0, required

## Setup & Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install

3. Start the server:

    bash
    npm start
4. For development with auto-restart:

    bash
    npm run dev
    Server runs on: http://localhost:3000

  ##  Testing with Postman
  
1. Get All Books

   GET http://localhost:3000/api/v1/books

2. Test Routing Precedence

   GET http://localhost:3000/api/v1/books/search

   Should return: "You are on the search page"

4. Create Book (Success)

   POST http://localhost:3000/api/v1/books

   Content-Type: application/json

   {
     "title": "The Hobbit",
     "author": "J.R.R. Tolkien",
     "price": 15.99
   }

5. Create Book (Validation Failure)

   POST http://localhost:3000/api/v1/books

   Content-Type: application/json
   
   {
     "title": "ABC",  // Too short - will fail
     "author": "JD",
     "price": -10     // Negative - will fail
   }

5. Get Single Book

   GET http://localhost:3000/api/v1/books/1

6. Delete Book

   DELETE http://localhost:3000/api/v1/books/1



