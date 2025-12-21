const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  searchBooks,
  getBookById,
  createBook,
  deleteBook
} = require('../controllers/bookController');
const { validateBook } = require('../utils/validationSchema');

/**
 * Book Routes - Following RESTful API Best Practices:
 * 1. Use nouns (books) not verbs
 * 2. Use plural nouns for collections
 * 3. Use HTTP methods for actions
 * 4. Proper status codes
 * 
 * IMPORTANT: Order matters in Express routing!
 * Specific routes must come before dynamic routes
 */

// GET /api/v1/books/search - MUST come before /:id
// Demonstrates routing precedence
router.get('/search', searchBooks);

// GET /api/v1/books - Get all books
router.get('/', getAllBooks);

// GET /api/v1/books/:id - Get single book by ID
router.get('/:id', getBookById);

// POST /api/v1/books - Create new book (with validation)
router.post('/', validateBook, createBook);

// DELETE /api/v1/books/:id - Delete a book
router.delete('/:id', deleteBook);

module.exports = router;