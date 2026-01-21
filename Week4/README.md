# WEEK 4

# User Management API

This project is a simple Node.js  + Express application that demonstrates basic CRUD operations for managing user data. It was created as part of the GDG Node.js  track homework.

📂 Project Structure
src/
├── controllers/
│   └── userController.js   # Controller functions for CRUD
├── routes/
│   └── userRoutes.js       # Routes connected to controller functions
├── middleware/
│   └── errorHandler.js     # Error handling middleware
├── utils/
│   └── validation.js       # Input validation helpers
├── app.js                  # Express app setup
├── server.js               # Server entry point

# 🚀 Features
Get all users – Retrieve the full list of users.

Get user by ID – Find a single user using their ID.

Create user – Add a new user to the array.

Update user by ID – Modify an existing user’s details.

Delete user by ID – Remove a user from the array.

@ ⚙️ Installation
Clone the repository:

bash
git clone https://github.com/kid-yP/GDG-Node-track-Kidus.git
cd GDG-Node-track-Kidus/Week4/src
Install dependencies:

bash
npm install
# ▶️ Usage
Start the server:

bash
node server.js
The API will run on http://localhost:3000

# 📌 API Endpoints
Method	Endpoint	Description
GET	/users	Get all users
GET	/users/:id	Get user by ID
POST	/users	Create a new user
PUT	/users/:id	Update user by ID
DELETE	/users/:id	Delete user by ID

# 🧪 Testing
Use tools like Postman or cURL to test the endpoints.
Example:
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com"}'
