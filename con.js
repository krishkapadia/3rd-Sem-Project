const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/AndroidDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected... ");
});

// tblUser Start
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    phone: String
})
const tblUser = mongoose.model('tblUSer', userSchema);
// tblUser End

module.exports = {
    db: db,
    mongoose: mongoose,
    express: express,
    app : app,
    tblUser : tblUser
}