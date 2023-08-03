var express = require('express');
var router = express.Router();
var autherController = require('../controllers/author/author');

//Auther Add
router.post('/author', autherController.author);
//Gett All Authers
router.get('/authors', autherController.authors);
//Gett All Authers
router.get('/author/:id', autherController.singleAuthor);

module.exports = router;
