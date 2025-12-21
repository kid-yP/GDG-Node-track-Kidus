const Joi = require('joi');

/**
 * Joi Schema for Book Validation
 * Why Joi? It allows creating "blueprints" for data validation
 * Prevents manual validation logic and ensures consistency
 */
const bookSchema = Joi.object({
  title: Joi.string()
    .min(5)
    .required()
    .messages({
      'string.min': 'Title must be at least 5 characters long',
      'string.empty': 'Title is required',
      'any.required': 'Title is required'
    }),
  
  author: Joi.string()
    .min(3)
    .required()
    .messages({
      'string.min': 'Author name must be at least 3 characters long',
      'string.empty': 'Author is required',
      'any.required': 'Author is required'
    }),
  
  price: Joi.number()
    .min(0)
    .required()
    .messages({
      'number.min': 'Price must be 0 or greater',
      'number.base': 'Price must be a number',
      'any.required': 'Price is required'
    })
});

/**
 * Validation Middleware using Joi Schema
 * This middleware validates request body against our schema
 * If validation fails, it returns 400 with error details
 */
const validateBook = (req, res, next) => {
  const { error, value } = bookSchema.validate(req.body, { abortEarly: false });
  
  if (error) {
    // Extract validation error messages
    const errors = error.details.map(detail => detail.message);
    
    // Create validation error object
    const validationError = new Error('Validation Failed');
    validationError.statusCode = 400;
    validationError.errors = errors;
    
    return next(validationError);
  }
  
  // If validation passes, attach validated data to request
  req.validatedData = value;
  next();
};

module.exports = {
  bookSchema,
  validateBook
};