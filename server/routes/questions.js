const express = require('express');
      router  = express.Router();
      knex    = require('../db/knex');

// get all questions from questions table and their relative answers
// localhost:3000/questions
router.get('/', (req, res, next) => {
  // KNEX WAY
  // knex.from('questions').innerJoin('answers', 'questions.id', 'answers.question_id')
  //     .then(questions => {
  //       res.send(questions);
  //     });

  // Raw SQL
  knex.raw('select * from questions t1, answers t2 where t1.id = t2.question_id').then(questions => {
    res.send({ questions: questions.rows })
  });
});

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

// delete a question and its related answers endpoint
// localhost:3000/questions/:id
router.delete('/:id', (req, res, next) => {
  let { id } = req.params;
  knex('answers').where('question_id', id).del()
    .then(() => {
      knex('questions').where('id', id).del()
        .then(() => {
          knex.select().from('questions').then(question => {
            res.send(question)
          })
        })
    })
});

// create a question endpoint
// localhost:3000/questions
router.post('/', (req, res, next) => {
  // console.log('request object body: ', req.body);
  knex.raw('insert into questions(question) values(?)', ['What is the most dangerous jungle?'])
  .then(() => {
    knex.raw('select * from questions order by id desc limit 1')
    .then(question => {
      res.send({ question: question.rows, message: 'Question created successfully!' });
    })
  })
});

module.exports = router;
