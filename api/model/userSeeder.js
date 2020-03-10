const seeder = require('mongoose-seed');

seeder.connect(
  'mongodb+srv://tin:JsWnQKSASPXdCwop@cluster0-snppl.mongodb.net/todolist',
  function() {
    seeder.loadModels(['model/userModel.js']);

    seeder.clearModels(['User'], function() {
      seeder.populateModels(data, function() {
        seeder.disconnect();
      });
    });
  },
);
var data = [
  {
    model: 'User',
    documents: [
      {
        email: 'tin1@gmail.com',
        password: '123456',
      },
      {
        email: 'tin2@gmail.com',
        password: '234567',
      },
      {
        email: 'tin3@gmail.com',
        password: '345678',
      },
      {
        email: 'tin4@gmail.com',
        password: '456789',
      },
      {
        email: 'tin5@gmail.com',
        password: '567890',
      },
      {
        email: 'tin6@gmail.com',
        password: '678901',
      },
    ],
  },
];
