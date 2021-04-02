const { Comment } = require('../models');

const commentData = [
     { 
        user_id: 1,
        post_id: 1,
        content: 'Comment 1',
     },
     { 
        user_id: 1,
        post_id: 2,
        content: 'Comment 2',
     },
     { 
        user_id: 2,
        post_id: 1,
        content: 'Comment 3',
     },
     { 
        user_id: 2,
        post_id: 2,
        content: 'Comment 4',
     },
]

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;