var express = require('express');
var router = express.Router();
const productController = require('../controllers/food.controller');


/* GET Products. */
router.get('/', productController.getProducts);

/* GET Product by Id. */
router.get('/:id', productController.getProduct);

/* Post Products. */
router.post('/create-food', productController.createProduct);

/* patch Products. */
router.patch('/update/:id', productController.updateProduct);

/* patch Products. */
router.delete('/delete/:id', productController.deleteProduct);

module.exports = router;
