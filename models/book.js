// book structure 
function createBook({ id, title, author, ISBN, publicationDate, genre }) {
    return {
        id,
        title, 
        author,
        ISBN,
        publicationDate,
        genre
    };
}

module.exports = createBook;