//Import dependencies
const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

//Create a new post
router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });

        res.status(200).json(postData);

    } catch (error) {
        res.status(400).json(err);
    }
});

//Update a post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update({
            title: req.body.title,
            content: req.body.content,
        },
            {
                where: {
                    id: req.params.id
                }
            });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);

    } catch (error) {
        res.status(500).json(err);
    }
});
//Delete a post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;