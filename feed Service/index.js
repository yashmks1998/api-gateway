var express = require('express');
var app = express();
var router = require('./routers/router')
var bodyParser = require('body-parser');
var db = require('./db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Simple feed")
})

app.use(router)

console.log("Simple feed run on localhost:8000")

app.listen(8000);
