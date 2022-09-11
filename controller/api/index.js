const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');


//route for users
router.use('/users', userRoutes);

//route for posts
router.use('/posts', postRoutes);
module.exports = router;