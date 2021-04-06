const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//Set up user relationships
User.hasMany(Post, {
    foreignKey: 'user_id',
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
});

//Set up post relationships
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

//Set up comment relationships
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post, Comment };