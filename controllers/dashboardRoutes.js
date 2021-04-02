const seqeulize = require('../config/connection');
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
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
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', {
                posts,
                loggedIn: true
            });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/edit/:id', withAuth, (req,res) => { 
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
        if(!dbPostData) { 
            res.status(404).json({ message: 'No post found with this id!'});
            return;
        }
        const post = dbPostData.get({ plain: true });
        res.render('edit-post', {
            post,
            loggedIn: true
        });
    })
    .catch(err => { 
        res.status(500).json(err);
    });
});

router.get('/create/', withAuth, (req,res) => { 
    Post.findAll({
        where: { 
            user_id: req.session.user_id
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
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('create-post', {
            posts,
            loggedIn: true
        });
    })
    .catch(err => { 
        res.status(500).json(err);
    });
});


module.exports = router;