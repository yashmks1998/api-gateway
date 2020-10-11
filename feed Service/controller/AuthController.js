var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var feed = require('../model/feed');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/feeds', (req, res) => {
 
    res.status(201).send("feeds########################################")

  
  })
 
  router.post('/feeds', (req, res) => {
   
    feed.create({
      name: req.body.name,
      
    }, (err, user) => {
      if (err) return res.status(500).send("feed failed")
  
     
  
      res.status(200).send("feeds added");
    })
  })

module.exports = router