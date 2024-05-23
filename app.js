const express = require('express');
const morgan = require('morgan');
const engine = require('express-edge');
const fileUploader = require('express-fileupload');


const db = require('./db');
const homeRoutes = require('./controllers/homeRoute')
const postRoutes = require('./controllers/postRoutes')

// server configs
const app = express();
app.use(morgan('dev'));
app.listen(3000);
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(express.json());
app.use(fileUploader());
app.use(engine);
app.set('views', `${__dirname}/views`);



// routes
app.get('/', homeRoutes.home);
app.get('/posts/new', postRoutes.create);
app.post('/posts/store', postRoutes.save);