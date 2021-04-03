const { Comment } = require('../models');

const commentData = [
     { 
        user_id: 1,
        post_id: 2,
        content: 'Bootsrap is very handy.',
     },
     { 
        user_id: 2,
        post_id: 3,
        content: 'jQuery makes this a lot easier.',
     },
     { 
        user_id: 3,
        post_id: 4,
        content: `Web API's help traverse the DOM`,
     },
     { 
        user_id: 4,
        post_id: 5,
        content: 'My favorite API is the NASA Picture of the Day',
     },
     { 
      user_id: 5,
      post_id: 1,
      content: 'This was interesting to learn about.',
   },
]

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;