const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        min: 5,
        maxlength: 400,
        required: true,
        index: true
    },
    subtitle: {
        type: String,
        minlength: 5,
    },
    description: {
        type: String,
        minlength: 5,
        maxlength: 5000,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    category: {
        type: String,
        enum: ['sport', 'games', 'history'],
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
        required: true
    },
    updatedAt: {
        type: Date,
        default: new Date(),
        required: true
    }
});

module.exports = mongoose.model('Article', ArticleSchema);


