const express = require('express');
      router  = express.Router();
      knex    = require('../db/knex');


// create answers for the question
// localhost:3000/answer/
router.post('/', (req, res, next) => {
  // console.log('request object body: ', req.body);
  knex.raw('insert into answers(answer, is_correct_answer, question_id) values(?, ?, ?)', ['spiders', true, 11])
  .then(() => {
    knex.raw('select * from answers order by id desc limit 1')
    .then(answer => {
      res.send({ answer: answer.rows, message: 'Answer created successfully!' });
    })
  })
});


module.exports = router;
