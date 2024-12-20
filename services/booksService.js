const booksCollection = require('../database');
const Book = require('../models/bookModel');

//register book
exports.registerBook = async (bookData) => {
    try {
        const book = new Book(bookData); // Use the Book model to create a new book
        booksCollection.insert(book);   // Add the book to the database
        return book;
    } catch (error) {
        throw new Error(error.message);
    }
};

//get all books
exports.getBooks = async () => {
    return booksCollection.find();
};

//get a specific book
exports.getBookById = async (id) => {
    const book = booksCollection.findOne({ id });
    return book; // Returns `null` if no book is found
};

//update book
exports.updateBook = async (id, updateData) => {
    const book = booksCollection.findOne({ id });
    if (!book) {
        throw new Error('Book not found');
    }
    Object.assign(book, updateData);
    booksCollection.update(book);
    return book;
};

//buy book
exports.buyBook = async (id, quantity) => {
    const book = booksCollection.findOne({ id });
    if (!book) {
        throw new Error('Book not found');
    }
    if (book.stock < quantity) {
        throw new Error('Not enough stock available');
    }
    book.stock -= quantity;
    booksCollection.update(book);
    return book;
};
