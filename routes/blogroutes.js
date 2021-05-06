const express = require('express')
const router = express.Router()
const blogController = require('../controller/blogController');

//render index route       
router.get('/', blogController.blog_index);

//render create blog page route
router.get('/create', blogController.blog_create_get);

//route to save the blog
router.post('/', blogController.blog_create_post);

//blog details route
router.get('/:id', blogController.blog_details);

//route to delete the blog
router.delete('/:id', blogController.blog_delete);

module.exports = router;
