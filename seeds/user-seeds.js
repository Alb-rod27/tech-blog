const sequelize = require('../config/connections');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'splez0',
        email: 'test@test.com',
        password: 'password123'
    },
    {
        username: 'Lernantino1',
        email: 'jargen@jargen.com',
        password: 'password123'
      },
      {
        username: 'iboddam2',
        email: 'cstoneman2@last.fm',
        password: 'password123'
      },
      {
        username: 'dstanmer3',
        email: 'ihellier3@goo.ne.jp',
        password: 'password123'
      },
      {
        username: 'djiri4',
        email: 'gmidgley4@weather.com',
        password: 'password123'
      },
      {
        username: 'msprague5',
        email: 'larnout5@imdb.com',
        password: 'password123'
      },
      {
        username: 'mpergens6',
        email: 'hnapleton6@feedburner.com',
        password: 'password123'
      },
      {
        username: 'tpenniell7',
        email: 'kperigo7@china.com.cn',
        password: 'password123'
      },
      {
        username: 'msabbins8',
        email: 'lmongain8@google.ru',
        password: 'password123'
      }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;