
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        { id: 1, question: 'When a gas is turned into a liquid, the process is called? ' },
        { id: 2, question: 'Which of the following parts of the sun is easily visible only during a total solar eclipse?' },
        { id: 3, question: 'Earth\'s seasons are caused by which of the following?' },
        { id: 4, question: 'Which of the following is most likely to cause a rise in the average temperature of earth\'s atmosphere in future?' },
        { id: 5, question: 'The accumulation of stress along the boundaries of lithospheric plates results in which of the following?' },
        { id: 6, question: 'Which of the following elements is a metal?' },
        { id: 7, question: 'Which of the following items will be attracted to the north pole of a permanent magnet by a magnet force?' },
        { id: 8, question: 'Pollination by birds is called' },
        { id: 9, question: 'The fastest-running terrestrial animal is' },
        { id: 10, question: 'As you go down into a well, your weight' }
      ]);
    });
};
