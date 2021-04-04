const { Comment } = require('../models');

const commentData = [
     { 
        user_id: 1,
        post_id: 2,
        comment_content: 'Bootsrap is very handy.',
     },
     { 
        user_id: 2,
        post_id: 3,
        comment_content: 'jQuery makes this a lot easier.',
     },
     { 
        user_id: 3,
        post_id: 4,
        comment_content: `Web API's help traverse the DOM`,
     },
     { 
        user_id: 4,
        post_id: 5,
        comment_content: 'My favorite API is the NASA Picture of the Day',
     },
     { 
      user_id: 5,
      post_id: 1,
      comment_content: 'This was interesting to learn about.',
   },
]

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;