const express = require('express');
const app = express();

app.use(express.json());

//import routes
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

//Start the server 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/books`);
});