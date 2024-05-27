const express = require('express');
const router = express.Router();

const itemsController = require('../controllers/items');
// const { isAuthenticated } = require('../middleware/authenticate');
// const {validations, validate} = require("../middleware/validator");


router.get('/', itemsController.getAll);
router.get('/:id', itemsController.getSingle);
router.get('/:id/rating', itemsController.getItemRating);
router.post('/:id/rating', itemsController.postItemRating);
// router.post('/', isAuthenticated, validations().articles, validate, itemsController.createArticle);
// router.put('/:id', isAuthenticated, validations().articles, validate, itemsController.updateArticle)
// router.delete('/:id', isAuthenticated, itemsController.deleteArticle)

module.exports = router;
