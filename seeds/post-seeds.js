const { Post } = require('../models');

const postData = [
    {
        title: "HTML & CSS Basics",
        content: "HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.",
        user_id: 1
    },
    {
        title: "Bootstrap with CSS",
        content: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
        user_id: 2
    },
    {
        title: "JavScript",
        content: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
        user_id: 3
    },
    {
        title: "Web API's",
        content: "API stands for Application Programming Interface. A Web API is an application programming interface for the Web. A Browser API can extend the functionality of a web browser. A Server API can extend the functionality of a web server.",
        user_id: 4
    },
    {
        title: "Third-Party-API's",
        content: "Third party APIs are APIs provided by third parties — generally companies such as Facebook, Twitter, or Google — to allow you to access their functionality via JavaScript and use it on your site. One of the most obvious examples is using mapping APIs to display custom maps on your pages.",
        user_id: 3
    },
]

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;