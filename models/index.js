// Pull in other models
// individual posts will be their own models
// do comments need their own models? Probably
// Associations
// User has many posts
// User has many comments
// Post has many comments

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

// Comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "cascade"
});

module.exports = { User, Post, Comment };