const express = require('express');
      router  = express.Router();
      knex    = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API Dashboard' });
});

module.exports = router;
