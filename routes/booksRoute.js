const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.post('/register', booksController.registerBook);
router.get('/', booksController.getBooks);
router.put('/:id', booksController.updateBook);
router.post('/:id/buy', booksController.buyBook);

module.exports = router;
