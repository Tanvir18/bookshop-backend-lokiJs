const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.post('/register', booksController.registerBook);
router.get('/', booksController.getBooks);
router.get('/:id', booksController.getBookById); // New route for retrieving a specific book
router.put('/:id', booksController.updateBook);
router.post('/buy/:id', booksController.buyBook);

module.exports = router;
