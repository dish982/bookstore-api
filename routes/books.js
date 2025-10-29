const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const createBook = require('../models/book');
const { addBook, getAllBooks, getBookById, updateBook, deleteBook } = require('../data/booksData');

//retrieve all books
router.get('/', (req, res) => {
    res.json(getAllBooks());
});

//retrive one book by id
router.get('/:id', (req, res) => {
  const book = getBookById(req.params.id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(book);
});


//add a new book
router.post('/', (req, res) => {
    const { title, author, ISBN, publicationDate, genre } = req.body;

    if(!title || !author || !ISBN) {
        return res.status(400).json({ error: "Title, author and ISBN are required." })
    }

    const newBook = createBook({id: uuidv4(), title, author, ISBN, publicationDate, genre});
    addBook(newBook);

    res.status(201).json(newBook);
});

//update book
router.put('/:id', (req, res) => {
    const updatedBook = updateBook(req.params.id, req.body);
    if (updatedBook) {
        res.json(updatedBook);
    }
    else {
        res.status(404).json({ message: "Book not found" });
    }
});

router.delete('/:id', (req, res) => {
    const deleted = deleteBook(req.params.id);
    if (deleted) {
        res.json({ message:"Book deleted" });
    }
    else { 
        res.status(404).json({ message:"Book not found" })
    }
});

module.exports = router;