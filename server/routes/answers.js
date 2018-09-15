const express = require('express');
      router  = express.Router();
      knex    = require('../db/knex');

// get an answer for updating and deleting
// localhost:3000/answers/:id
router.get('/:id', (req, res) => {
  let { id } = req.params;

  knex.select().from('answers').where('id', id)
      .then(answer => {
        res.send(answer);
      });
});

// create answers for the question
// localhost:3000/answers/
router.post('/', (req, res) => {
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
