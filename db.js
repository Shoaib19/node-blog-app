const mongoose = require('mongoose')
require('dotenv').config();

const db = mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@nodelearning.bm1q2vb.mongodb.net/blog-db`)
    .then(result => {console.log("DB Connected")})
    .catch(err => {console.log(err)})

module.exports = db;