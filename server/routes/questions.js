const express = require('express');
      router  = express.Router();
      knex    = require('../db/knex');

// get a question and its related answers endpoint
// localhost:3000/questions/:id
router.get('/:id', (req, res, next) => {
    let { id } = req.params;
    knex.select('question').from('questions').where('id', id)
        .then((question) => {
          knex.select('answer').from('questions')
              .innerJoin('answers', 'questions.id', 'answers.question_id')
              .where('questions.id', id)
              .then(answers => {
                  res.send({ question, answers });
              });
        })
});

module.exports = router;
