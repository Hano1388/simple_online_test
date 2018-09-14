
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        { id: 1, answer: 'condensation', is_correct_answer: true, question_id: 1 },
        { id: 2, answer: 'evaporation', question_id: 1 },
        { id: 3, answer: 'deposition', question_id: 1 },
        { id: 4, answer: 'sublimation', question_id: 1 },

        { id: 5, answer: 'core', question_id: 2 },
        { id: 6, answer: 'photosphere', question_id: 2 },
        { id: 7, answer: 'sunspots', question_id: 2 },
        { id: 8, answer: 'corona', is_correct_answer: true, question_id: 2 },

        { id: 9, answer: 'The tilt of the earth\'s rotation relative to the ecliptic as earth revolves around the sun', is_correct_answer: true, question_id: 3 },
        { id: 10, answer: 'The varying amount of sunspot activity', question_id: 3 },
        { id: 11, answer: 'The earth\'s orbit around the sun as an exlipse rather than a circle', question_id: 3 },
        { id: 12, answer: 'The rotation of during a 24-hour day', question_id: 3 },

        { id: 13, answer: 'Atomic warfare', question_id: 4 },
        { id: 14, answer: 'CO2 from fossil fuels', is_correct_answer: true, question_id: 4 },
        { id: 15, answer: 'Dust clouds from valcanoes', question_id: 4 },
        { id: 16, answer: 'Depletion of earth\'s ozone layer', question_id: 4 },

        { id: 17, answer: 'Earthquakes', is_correct_answer: true, question_id: 5 },
        { id: 18, answer: 'Magnetic reversals', question_id: 5 },
        { id: 19, answer: 'Hurricanses', question_id: 5 },
        { id: 20, answer: 'Increased deposition of deep-sea sediments', question_id: 5 },

        { id: 21, answer: 'S', question_id: 6 },
        { id: 22, answer: 'Se', question_id: 6 },
        { id: 23, answer: 'I', question_id: 6 },
        { id: 24, answer: 'Ga', is_correct_answer: true, question_id: 6 },

        { id: 25, answer: 'The north pole of another permanent magnet', question_id: 7 },
        { id: 26, answer: 'A piece of iron that is not a permanent magnet', is_correct_answer: true, question_id: 7 },
        { id: 27, answer: 'A positively charged glass rod', question_id: 7 },
        { id: 28, answer: 'A negatively charged rubber rod', question_id: 7 },

        { id: 29, answer: 'autogamy', question_id: 8 },
        { id: 30, answer: 'ornithophily', is_correct_answer: true, question_id: 8 },
        { id: 31, answer: 'entomophily', question_id: 8 },
        { id: 32, answer: 'anemophily', question_id: 8 },

        { id: 33, answer: 'cheetah', is_correct_answer: true, question_id: 9 },
        { id: 34, answer: 'lion', question_id: 9 },
        { id: 35, answer: 'man', question_id: 9 },
        { id: 36, answer: 'jaguar', question_id: 9 },

        { id: 37, answer: 'increases slightly', question_id: 10 },
        { id: 38, answer: 'decreases slightly', is_correct_answer: true, question_id: 10 },
        { id: 39, answer: 'remains exactly the same', question_id: 10 },
        { id: 40, answer: 'None of the above', question_id: 10 }
      ]);
    });
};
