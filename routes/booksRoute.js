const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.post('/register', booksController.registerBook); // route for registering book
router.get('/', booksController.getBooks); // route for retrieving all book
router.get('/:id', booksController.getBookById); // route for retrieving a specific book
router.put('/:id', booksController.updateBook); // route for updating book
router.post('/buy/:id', booksController.buyBook); // route for buying a specific book

module.exports = router;
