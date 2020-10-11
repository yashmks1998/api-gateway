var express = require('express');
var app = express();
var router = require('./routers/router')
var bodyParser = require('body-parser');
var db = require('./db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Simple Hashtag")
})

app.use(router)

console.log("Hashtag run on localhost:8080")

app.listen(8080);
