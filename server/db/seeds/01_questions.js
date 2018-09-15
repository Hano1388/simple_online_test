
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        { question: 'When a gas is turned into a liquid, the process is called? ' },
        { question: 'Which of the following parts of the sun is easily visible only during a total solar eclipse?' },
        { question: 'Earth\'s seasons are caused by which of the following?' },
        { question: 'Which of the following is most likely to cause a rise in the average temperature of earth\'s atmosphere in future?' },
        { question: 'The accumulation of stress along the boundaries of lithospheric plates results in which of the following?' },
        { question: 'Which of the following elements is a metal?' },
        { question: 'Which of the following items will be attracted to the north pole of a permanent magnet by a magnet force?' },
        { question: 'Pollination by birds is called' },
        { question: 'The fastest-running terrestrial animal is' },
        { question: 'As you go down into a well, your weight' }
      ]);
    });
};
