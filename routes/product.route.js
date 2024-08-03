const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
const auth = require("../middleware/auth");
const upload = require('../utils/multer')

router.get('/', productController.getProducts);

router.get('/admin', productController.getProductAdmin);

router.get('/category/:id', productController.getProductsByCategory);

router.get('/:id', productController.getOneProduct);

router.post('/', upload.single('productImage'), auth, productController.createProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);


module.exports = router
