const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasmany(Post);

Post.hasMany(Comment);

Comment.belongsTo(Post);

module.exports = { User, Post, Comment };