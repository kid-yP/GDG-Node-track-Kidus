/**
 * Book Controller
 * Responsibilities:
 * 1. Handle request/response logic
 * 2. Call services (if any)
 * 3. Send appropriate HTTP responses
 * 
 * Why separate controllers from routes?
 * - Clean separation of concerns
 * - Routes only handle routing
 * - Controllers handle business logic
 */

// In-memory database (for demonstration only)
// In real apps, use a proper database
let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10.99 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.50 },
  { id: 3, title: '1984', author: 'George Orwell', price: 9.99 }
];

let nextId = 4;

// Get all books
const getAllBooks = (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      count: books.length,
      data: books
    });
  } catch (error) {
    next(error);
  }
};

// Search books (for routing precedence demonstration)
const searchBooks = (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: 'You are on the search page',
      query: req.query // Include query parameters in response
    });
  } catch (error) {
    next(error);
  }
};

// Get single book by ID
const getBookById = (req, res, next) => {
  try {
    const bookId = parseInt(req.params.id);
    
    if (isNaN(bookId)) {
      const error = new Error('Invalid book ID');
      error.statusCode = 400;
      throw error;
    }
    
    const book = books.find(b => b.id === bookId);
    
    if (!book) {
      const error = new Error(`Book with ID ${bookId} not found`);
      error.statusCode = 404;
      throw error;
    }
    
    res.status(200).json({
      success: true,
      data: book
    });
  } catch (error) {
    next(error);
  }
};

// Create a new book
const createBook = (req, res, next) => {
  try {
    // Get validated data from middleware
    const { title, author, price } = req.validatedData;
    
    // Create new book object
    const newBook = {
      id: nextId++,
      title,
      author,
      price
    };
    
    // Add to in-memory array
    books.push(newBook);
    
    // Return 201 Created (REST best practice for successful creation)
    res.status(201).json({
      success: true,
      message: 'Book created successfully',
      data: newBook
    });
  } catch (error) {
    next(error);
  }
};

// Delete a book
const deleteBook = (req, res, next) => {
  try {
    const bookId = parseInt(req.params.id);
    
    if (isNaN(bookId)) {
      const error = new Error('Invalid book ID');
      error.statusCode = 400;
      throw error;
    }
    
    const bookIndex = books.findIndex(b => b.id === bookId);
    
    if (bookIndex === -1) {
      const error = new Error(`Book with ID ${bookId} not found`);
      error.statusCode = 404;
      throw error;
    }
    
    // Remove book from array
    books.splice(bookIndex, 1);
    
    res.status(200).json({
      success: true,
      message: `Book with ID ${bookId} deleted successfully`
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBooks,
  searchBooks,
  getBookById,
  createBook,
  deleteBook
};