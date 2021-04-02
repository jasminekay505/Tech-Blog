const { User } = require('../models');

const userData = [
    {
       username: 'Ashley',
       email: 'ashley@gmail',
       password: '1Ashley'

    },
    {
        username: 'Nathan',
        email: 'nathan@gmail',
        password: '1Nathan'
 
     },

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;