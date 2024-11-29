# Bookshop Backend

A simple Node.js backend for a bookshop application using LokiJS as an in-memory database.

## Features
- Register a book with title, author, and stock.
- Retrieve all books.
- Retrieve a specific books.
- Update book details.
- Deduct stock when books are purchased.

## Technologies Used
- Node.js
- LokiJS (In-memory database)
- Express.js
- dotenv (Environment variable management)
- UUID (Generate unique book IDs)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Tanvir18/bookshop-backend-lokiJs.git
   cd bookshop-backend-lokiJs
   ```
2.Install Dependencies:
Install the following packages:

express
body-parser
lokijs
uuid
dotenv

Install them using:
```bash
npm install express body-parser lokijs uuid dotenv
 ```
or

Install the required Node.js packages:

 ```bash
npm install
 ```
3.Set Up Environment Variables:

Create a .env file in the root of the project and add the following variables:

```bash
PORT=3000
```

4.Start the Application:

To start the application, run the following command:

```bash
npm start
```
The backend service should now be running on http://localhost:3000.

API Endpoints
1. Register a Book
URL: POST /api/books/register

Payload:

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "stock": 10
}
```

Response:

```json
{
  "id": "unique-id",
  "title": "Book Title",
  "author": "Author Name",
  "stock": 10
}
```

2. Get All Books
URL: GET /api/books

Response:

```json
[
  {
    "id": "unique-id",
    "title": "Book Title",
    "author": "Author Name",
    "stock": 10
  }
]
```
3. Get a specific book.
URL: GET /api/books/:id

Response:

```json
{
    "id": "unique-id",
    "title": "Book Title",
    "author": "Author Name",
    "stock": 10
}

```

4. Update a Book
URL: PUT /api/books/:id

Payload:

```json
{
  "stock": 15
}
```

Response:

```json
{
  "id": "unique-id",
  "title": "Book Title",
  "author": "Author Name",
  "stock": 15
}
```
5. Buy a Book
URL: POST /api/books/buy/:id

Payload:

```json
{
  "quantity": 2
}
```

Response:

```json
{
  "id": "unique-id",
  "title": "Book Title",
  "author": "Author Name",
  "stock": 13
}
```

Testing the API
You can test the API using Postman or any other API testing tool:
```
POST /api/books/register to add a new book.
GET /api/books to retrieve all books.
GET /api/books/:id to retrieve a specific book by ID.
PUT /api/books/:id to update book details.
POST /api/books/buy/:id to simulate buying a book.
```
Error Handling
If an error occurs during an API request, you will receive a JSON response with an error field:

```json
{
  "error": "Error message"
}
```
Development
For development, use nodemon for hot-reloading:
```bash
npm install --save-dev nodemon
```
Run with:

```bash
npm run dev
```

License
This project is licensed under the MIT License.
