// Import dependencies
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../../utils/auth');

//Homepage - show all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });
        const posts = postData.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) 
    {
        res.redirect('/');
        return;
    }
    res.render('login');
});

//Signup page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) 
    {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

//Single Post
router.get('/post/:id', withAuth, (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).json(err);
    }
    Post.findOne({
        where: {
            id: req.params.id
        },
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
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id!' });
                return;
            }
            const post = dbPostData.get({ plain: true });
            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;