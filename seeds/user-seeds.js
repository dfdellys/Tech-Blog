const { hash } = require('bcrypt');
const { User } = require('../models');

const userData = [
  {
    name: 'Goose',
    email: 'goose@email.com',
    password: 'password1',
  },
  {
    name: 'Peach',
    email: 'peach@email.com',
    password: 'password1',
  },
  {
    name: 'Lady',
    email: 'lady@email.com',
    password: 'password1',
  },
  {
    name: 'Garrus',
    email: 'gary@email.com',
    password: 'password1',
  },
  {
    name: 'Nabe',
    email: 'nabe@email.com',
    password: 'password1',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
