const path = require('path');
const Blog = require('../models/blog');

module.exports.create = (req, res) => {
    res.render('post/create');
}

module.exports.save = async (req, res) => {
    try {
        let { image } = req.files;
        await image.mv(path.join(__dirname, '..', '/public/images/') + image.name)
        await Blog.create({...req.body, image: `images/${image.name}`})
                .then(() => res.redirect('/'))
                .catch(err => console.log(err));
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
}