let books = [];

//create 
function addBook(book) {
    books.push(book);
    return book;
}

//read all
function getAllBooks() {
    return books;
}

//read one
function getBookById(id) {
    return books.find(book => book.id === id);
}

//update
function updateBook(id, updatedFields) {
    const index = books.findIndex(book => book.id === id);
    if(index === -1) return null;
    books[index] = { ...books[index], ...updatedFields };
    return books[index];
}

//delete
function deleteBook(id) {
    const index = books.findIndex(book => book.id === id);
    if(index === -1) return false;
    books.splice(index, 1);
    return true;
}

module.exports = {
    addBook, getAllBooks, getBookById, updateBook, deleteBook
};