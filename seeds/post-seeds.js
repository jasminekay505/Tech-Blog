const { Post } = require('../models');

const postData = [
    {
        title: "First Post",
        content: "Lorem Ipsum",
        user_id: 1
    },
    {
        title: "Second Post",
        content: "Lorem Ipsum",
        user_id: 2
    },
]

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;