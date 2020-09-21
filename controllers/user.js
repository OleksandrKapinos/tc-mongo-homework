module.exports = {createUser, getUser, deleteUser, editUser, getUserArticles};
const Model = require('../models');


async function createUser(req, res, next) {
    try {
        const newUser = await Model.User.create(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.send(error);
        next(error)
    }
}

async function editUser(req, res, next) {
  try {
    const id = req.params.id;
    const user = await Model.User.findById(id);

    const firstName = req.body.firstName || user.firstName;
    const lastName = req.body.lastName || user.lastName;
    const nickname = req.body.nickname || user.nickname || '';
    const newUser = {firstName, lastName, nickname};

    const updatedUser = await Model.User.findByIdAndUpdate(id, newUser, {new: true});
    res.status(200).json(updatedUser);
  } catch (error) {
    res.send(error);
    next(error)
  }
}

async function getUser(req, res, next) {
    try {
        const id = req.params.id;
        const user = await Model.User.findById(id);
        const articles = await Model.Article.find({owner: id});
        await res.status(200).json({user, articles});
    } catch (error) {
        res.send(error);
        next(error)
    }
}

async function deleteUser(req, res, next) {
    try {
        const id = req.params.id;
        const user = await Model.User.findByIdAndDelete(id);
        const articles = await Model.Article.findAndDelete({owner: id});
        await res.status(200).json({user, articles});
    } catch (error) {
        res.send(error);
        next(error)
    }
}

async function getUserArticles(req, res, next) {
  try {
    const id = req.params.id;
    const articles = await Model.Article.find({owner: id});
    res.status(200).json({articles});
  } catch (error) {
    res.send(error);
    next(error)
  }
}


