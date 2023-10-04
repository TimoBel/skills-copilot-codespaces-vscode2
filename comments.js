// Create web server

// Import express
const express = require('express');
// Create router
const router = express.Router();
// Import commentsController
const commentsController = require('../controllers/commentsController');

// Create route for get comment
router.get('/', commentsController.getComment);
// Create route for post comment
router.post('/', commentsController.postComment);
// Create route for delete comment
router.delete('/', commentsController.deleteComment);

// Export router
module.exports = router;