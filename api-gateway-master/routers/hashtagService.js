var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const isAuthorized = require('../controller/requestAuthenticator')

const BASE_URL = 'http://localhost:8080'
const api = apiAdapter(BASE_URL)

router.get('/hashtags', isAuthorized, (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
    
  })
})

router.post('/hashtag', isAuthorized, (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})
module.exports = router