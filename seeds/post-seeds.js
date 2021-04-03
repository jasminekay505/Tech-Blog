const { Post } = require('../models');

const postData = [
    {
        title: "HTML & CSS Basics",
        content: "HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages.",
        user_id: 1
    },
    {
        title: "Bootstrap with CSS",
        content: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
        user_id: 2
    },
    {
        title: "JavaScript",
        content: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
        user_id: 3
    },
    {
        title: "Web API's",
        content: "API stands for Application Programming Interface. A Web API is an application programming interface for the Web.",
        user_id: 4
    },
    {
        title: "Third-Party-API's",
        content: "Third party APIs are APIs provided by third parties — generally companies such as Facebook, Twitter, or Google.",
        user_id: 3
    },
]

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;