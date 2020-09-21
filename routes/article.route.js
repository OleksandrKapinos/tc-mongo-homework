const express = require('express');
const router = express.Router();
const ValidateMiddleware = require('../service/validateMiddleware');
const Validate = require('../validators');

const articleController = require('../controllers/article');

//Create new article
router.post('/', ValidateMiddleware('body', Validate.Article), articleController.createArticle);

//Edit article by id
router.put('/:articleId', ValidateMiddleware('body', Validate.Article), articleController.editArticle);

//Get articles by value
router.get('/', articleController.getArticles);

//Remove article by id
router.delete('/:articleId', articleController.deleteArticle);

module.exports = router;
