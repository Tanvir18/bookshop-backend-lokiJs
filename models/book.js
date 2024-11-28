const { v4: uuidv4 } = require('uuid');

class Book {
    constructor({ title, author, stock }) {
        if (!title || !author || stock === undefined) {
            throw new Error('Title, author, and stock are required fields');
        }

        this.id = uuidv4();
        this.title = title;
        this.author = author;
        this.stock = stock;
    }
}

module.exports = Book;
