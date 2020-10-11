var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var hashtag = require('../model/Hashtag');



router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/hashtags', (req, res) => {
  
    res.status(201).send("hashtag########################################")

  
  })

router.post('/hashtag', (req, res) => {
 
  hashtag.create({
    name: req.body.name,
    
  }, (err, user) => {
    if (err) return res.status(500).send("Hastag failed")

  

    res.status(200).send("hashtag added");
  })
})

module.exports = router