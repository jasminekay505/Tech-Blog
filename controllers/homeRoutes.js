const seqeulize = require('../config/connection');
const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'content',
            'date_created',
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'content',
                    'date_created',
                    'user_id',
                    'post_id'
                ],
                include: {
                    model: User,
                    attributes: [
                        'username'
                    ]
                },
            },
            {
                model: User,
                attributes: [
                    'username'
                ],
            },
        ],
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;