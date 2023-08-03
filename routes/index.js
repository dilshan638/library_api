var express = require('express');
var router = express.Router();
var autherController = require('../controllers/author/author');
var bookController = require('../controllers/book/book');

//Author
//Auther Add
router.post('/author', autherController.author);
//Get All Authors
router.get('/authors', autherController.authors);
//Get  Author
router.get('/author/:id', autherController.singleAuthor);
//Update  Authors
router.put('/author/:id', autherController.updateAuthor);
//Delete Author
router.delete('/author/delete/:id', autherController.deleteAuthor);

//Book
//Book Add
router.post('/book', bookController.book);
//Get All Books
router.get('/books', bookController.books);
//Get  Books
router.get('/book/:id', bookController.singleBook);
//Update  Books
router.put('/book/:id', bookController.updateBook);
//Delete Book
router.delete('/book/delete/:id', bookController.deleteBook);

module.exports = router;
