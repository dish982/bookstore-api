### Bookstore API
A simple RESTful API built with Node.js and Express.js that allows you to manage a collection of books including creating, reading, updating, and deleting book records.

### Features
API endpoints:<br>
➕ Add a new book (POST /books)<br>
📖 Get all books (GET /books)<br>
🔍 Get a specific book by ID (GET /books/:id)<br>
✏️ Update book details (PUT /books/:id)<br>
❌ Delete a book (DELETE /books/:id)<br>

### Technologies Used
Node.js<br>
Express.js<br>
UUID for unique book IDs<br>
Thunder Client or Postman for testing APIs<br>

### Installation & Setup

Clone the repository:
```
git clone https://github.com/dish982/bookstore-api.git
cd bookstore-api
```

Install dependencies:
```
npm install
```

Run the server:
```
node app.js
```

or, if you use nodemon:
```
npm run dev
```

Server runs at:
```
http://localhost:3000
```

### Example Book Object
{<br>
"title": "The Great Gatsby",<br>
"author": "F. Scott Fitzgerald",<br>
"ISBN": "9780743273565",<br>
"publicationDate": "1925-04-10",<br>
"genre": "Classic Fiction"<br>
}

### Testing with Thunder Client / Postman

POST a new book:<br>
POST http://localhost:3000/books<br>
Body (JSON):<br>
{<br>
"title": "The Hobbit",<br>
"author": "J.R.R. Tolkien",<br>
"ISBN": "9780547928227",<br>
"publicationDate": "1937-09-21",<br>
"genre": "Fantasy"<br>
}<br>

GET all books:<br>
GET http://localhost:3000/books<br>

GET one book by ID:<br>
GET http://localhost:3000/books/<book-id><br>

UPDATE book:<br>
PUT http://localhost:3000/books/<book-id><br>

Body:<br>
{<br>
  "genre": "Adventure Fantasy"<br>
}<br>

DELETE book:<br>
DELETE http://localhost:3000/books/<book-id><br>

### Author<br>
[Disha](github.com/dish982)<br>
📧 Feel free to connect.
(This project is for learning and educational purposes only)
