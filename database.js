const Loki = require('lokijs');
const db = new Loki('books.db', { autosave: true });

const booksCollection = db.addCollection('books', { unique: ['id'] });

module.exports = booksCollection;
