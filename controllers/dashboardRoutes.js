//Import dependencies
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth')

//Show all posts that were created by the user that is currently logged in
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include:
                [{
                    model: User,
                    attributes: ['username']
                }],
            where: {
                user_id: req.session.user_id
            }
        });
        const posts = postData.map(post => post.get({ plain: true }));

        res.render('dashboard', {
            posts, logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;