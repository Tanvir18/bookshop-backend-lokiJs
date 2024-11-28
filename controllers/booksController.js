const booksService = require('../services/booksService');

exports.registerBook = async (req, res) => {
    try {
        const book = await booksService.registerBook(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getBooks = async (req, res) => {
    try {
        const books = await booksService.getBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch books' });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await booksService.getBookById(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the book' });
    }
};


exports.updateBook = async (req, res) => {
    try {
        const book = await booksService.updateBook(req.params.id, req.body);
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.buyBook = async (req, res) => {
    try {
        const book = await booksService.buyBook(req.params.id, req.body.quantity || 1);
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
