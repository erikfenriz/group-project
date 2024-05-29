const express = require('express');
const router = express.Router();

const itemsController = require('../controllers/items');
// const { isAuthenticated } = require('../middleware/authenticate');
// const {validations, validate} = require("../middleware/validator");


router.get('/', itemsController.getAll);
router.get('/:id', itemsController.getSingle);
router.get('/', itemsController.getAll);
router.get('/:id', itemsController.getSingle);
router.get('/:id/rating', itemsController.getItemRating);
router.post('/:id/rating', itemsController.postItemRating);
router.post('/', itemsController.createItem);

module.exports = router;