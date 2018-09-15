const express = require('express');
      router  = express.Router();
      knex    = require('../db/knex');

// get an answer for updating and deleting
// GET: localhost:3000/answers/:id
router.get('/:id', (req, res) => {
  let { id } = req.params;

  knex.select().from('answers').where('id', id)
      .then(answer => {
        res.send(answer);
      });
});

// create answers for the question
// POST: localhost:3000/answers/
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

// delete an answer
// DELETE: localhost:3000/answers/:id
router.delete('/:id', (req, res) => {
  knex.raw('delete from answers where id = ?', [req.params.id])
      .then(answer => {
        res.send({
          // answer: answer.rows,
          message: 'Answer deleted successfully!'
        })
      });
});

// updating an answer
// PUT: localhost:3000/answers/:id
router.put('/:id', (req, res) => {
  let { answer, is_correct_answer, question_id } = req.body;
  knex('answers').where('id', req.params.id)
    .update({
      answer,
      is_correct_answer,
      question_id
    })
      .then(() => {
        knex.select().from('answers').where('id', req.params.id)
            .then(answer => {
              res.send({
                answer,
                message: 'Answer updated successfully!'
              });
            });
      });
});

module.exports = router;
