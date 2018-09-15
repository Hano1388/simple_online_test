
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('answers').del()
    .then(function () {
      // Inserts seed entries
      return knex('answers').insert([
        { answer: 'condensation', is_correct_answer: true, question_id: 1 },
        { answer: 'evaporation', question_id: 1 },
        { answer: 'deposition', question_id: 1 },
        { answer: 'sublimation', question_id: 1 },

        { answer: 'core', question_id: 2 },
        { answer: 'photosphere', question_id: 2 },
        { answer: 'sunspots', question_id: 2 },
        { answer: 'corona', is_correct_answer: true, question_id: 2 },

        { answer: 'The tilt of the earth\'s rotation relative to the ecliptic as earth revolves around the sun', is_correct_answer: true, question_id: 3 },
        { answer: 'The varying amount of sunspot activity', question_id: 3 },
        { answer: 'The earth\'s orbit around the sun as an exlipse rather than a circle', question_id: 3 },
        { answer: 'The rotation of during a 24-hour day', question_id: 3 },

        { answer: 'Atomic warfare', question_id: 4 },
        { answer: 'CO2 from fossil fuels', is_correct_answer: true, question_id: 4 },
        { answer: 'Dust clouds from valcanoes', question_id: 4 },
        { answer: 'Depletion of earth\'s ozone layer', question_id: 4 },

        { answer: 'Earthquakes', is_correct_answer: true, question_id: 5 },
        { answer: 'Magnetic reversals', question_id: 5 },
        { answer: 'Hurricanses', question_id: 5 },
        { answer: 'Increased deposition of deep-sea sediments', question_id: 5 },

        { answer: 'S', question_id: 6 },
        { answer: 'Se', question_id: 6 },
        { answer: 'I', question_id: 6 },
        { answer: 'Ga', is_correct_answer: true, question_id: 6 },

        { answer: 'The north pole of another permanent magnet', question_id: 7 },
        { answer: 'A piece of iron that is not a permanent magnet', is_correct_answer: true, question_id: 7 },
        { answer: 'A positively charged glass rod', question_id: 7 },
        { answer: 'A negatively charged rubber rod', question_id: 7 },

        { answer: 'autogamy', question_id: 8 },
        { answer: 'ornithophily', is_correct_answer: true, question_id: 8 },
        { answer: 'entomophily', question_id: 8 },
        { answer: 'anemophily', question_id: 8 },

        { answer: 'cheetah', is_correct_answer: true, question_id: 9 },
        { answer: 'lion', question_id: 9 },
        { answer: 'man', question_id: 9 },
        { answer: 'jaguar', question_id: 9 },

        { answer: 'increases slightly', question_id: 10 },
        { answer: 'decreases slightly', is_correct_answer: true, question_id: 10 },
        { answer: 'remains exactly the same', question_id: 10 },
        { answer: 'None of the above', question_id: 10 }
      ]);
    });
};
