const express = require("express");
const router = express.Router();
const commentController = require("../controller/comment.controller");


router.get('/', commentController.getComments);

router.get('/:id', commentController.getOneComment);

router.post('/', commentController.createComment);

router.put('/:id', commentController.updateComment);

router.delete('/:id', commentController.deleteComment);


module.exports = router
