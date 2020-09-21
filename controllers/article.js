module.exports = {createArticle, getArticles, deleteArticle, editArticle};
const Model = require('../models');


async function createArticle(req, res, next) {
    try {
        const user = await Model.User.findById(req.body.owner);

        if (!user) new Error('Couldn\'t find this owner');

        user.numberOfArticles++;
        await user.save();

        const newArticle = await Model.Article.create(req.body);
        await newArticle.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.send(error);
        next(error)
    }
}

async function editArticle(req, res, next) {
  try {
    const articleId = req.params.articleId;
    const article = await Model.Article.findById(articleId);

    if (!article) new Error('The article doesn\'t exist');

    const user = await User.findById(req.body.owner);

    if (!user) new Error('Couldn\'t find this owner');

    const title = req.body.title || article.title;
    const subtitle = req.body.subtitle || article.subtitle;
    const description = req.body.description || article.description;
    const owner = req.body.owner || article.owner;
    const updatedAt = new Date();
    const newUser = {title, subtitle, description, updatedAt, owner};

    const articleResult = await Model.Article.findByIdAndUpdate(articleId, newUser, {new: true});
    res.status(200).json(articleResult);
  } catch (error) {
    res.send(error);
    next(error)
  }
}

async function getArticles(req, res, next) {
    try {
        const article = await Model.Article.find(req.body).populate("owner");
        res.status(200).json({article});
    } catch (error) {
        res.send(error);
        next(error)
    }
}

async function deleteArticle(req, res, next) {
    try {
        const articleId = req.params.articleId;
        const article = await Model.Article.findByIdAndDelete(articleId);
        const user = await Model.User.findById(article.owner);
        user.numberOfArticles--;
        res.status(200).json(article);
    } catch (error) {
        res.send(error);
        next(error)
    }
}


