const express = require('express');
const booksController = require('../controllers/books/book.controller');
const { createBook } = require('../validations/book.validation');
const validate = require('../middlewares/validate');

const router = express.Router();

router.route('/books')
  .get(
    (req, res, next) => {
      console.log("This is from middleware");
      next("Hello");
    }, 
    booksController.getBooks
  )
  .post(validate(createBook), booksController.createBook);

module.exports = router;