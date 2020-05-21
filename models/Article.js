const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    atype:{
        type:String,
        required: true,
    },
    atitle:{
        type: String,
        required: true,
    },
    acontent:{
        type:String,
        required: true,
    }
});


const Article = mongoose.model('Article', articleSchema);

module.exports = Article;