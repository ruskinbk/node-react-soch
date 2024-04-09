const express = require('express');
const booksController = require('../controllers/books/book.controller');

const router = express.Router();

router.route('/books')
  .get(booksController.getBooks)
  .post(booksController.createBook);

module.exports = router;