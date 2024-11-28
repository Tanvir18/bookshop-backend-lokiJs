# Bookshop Backend

A simple Node.js backend for a bookshop application using LokiJS as an in-memory database.

## Features
- Register a book with title, author, and stock.
- Retrieve all books.
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
   git clone https://github.com/your-repo/bookshop-backend.git
   cd bookshop-backend
   ```
Install Dependencies:

Install the required Node.js packages:

 ```bash
npm install
 ```
Set Up Environment Variables:

Create a .env file in the root of the project and add the following variables:

```bash
PORT=3000
```

Start the Application:

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
3. Update a Book
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
4. Buy a Book
URL: POST /api/books/:id/buy
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
  "stock": 8
}
```
5. Buy a Book
Endpoint: POST /api/books/buy/:id

Description: Buy a book and reduce its stock by 1.

Parameters:

id: Book ID (integer)
Response:

```json
{
  "message": "Book purchased successfully!",
  "remainingStock": 49
}
```
Testing the API
You can test the API using Postman or any other API testing tool:
```
GET /api/books to retrieve all books.
GET /api/books/:id to retrieve a specific book by ID.
POST /api/books to add a new book.
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
