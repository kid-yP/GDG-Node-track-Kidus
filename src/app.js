const express = require('express');
const morgan = require('morgan');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Global Middleware Stack
// 1. Request logging middleware (morgan)
app.use(morgan('dev'));

// 2. Body parsing middleware (MANDATORY for POST requests)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. API Routes
app.use('/api/v1/books', bookRoutes);

// 4. Basic route for testing
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Bookstore API',
    endpoints: {
      books: '/api/v1/books',
      search: '/api/v1/books/search',
      singleBook: '/api/v1/books/:id'
    }
  });
});

// 5. 404 Handler for undefined routes
// Fixed: Using a function without wildcard that catches all remaining routes
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.originalUrl} not found`,
    message: 'Please check the API documentation'
  });
});

// 6. Global Error Handler (MUST be last middleware)
app.use((err, req, res, next) => {
  console.error('Global Error Handler:', err);
  
  // Default to 500 if status not set
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(statusCode).json({
    success: false,
    error: message,
    ...(err.errors && { details: err.errors })
  });
});

module.exports = app;