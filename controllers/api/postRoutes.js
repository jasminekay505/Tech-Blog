const router = require('express').Router();
const { Post } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req,res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch (err => { 
        res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req,res) => { 
    Post.update({
        title: req.body.title,
        content: req.body.content
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(dbPostData => { 
        if(!dbPostData) { 
            res.status(404).json({ message: 'No post found with this id!'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req,res) => { 
    Post.destroy({
        where: { 
            id: req.params.id
        }
    })
    .then(dbPostData => { 
        if(!dbPostData) { 
            res.status(404).json({ message: 'No post found with this id!'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;