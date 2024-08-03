const express = require("express");
const router = express.Router();
const attributeProduct = require("../controller/attribute-product.controller");


router.get('/', attributeProduct.getAllAttributeProducts);

router.get('/:id', attributeProduct.getOneAttributeProduct);

router.post('/', attributeProduct.createAttributeProduct);

router.put('/:id', attributeProduct.updateAttributeProduct);

router.delete('/:id', attributeProduct.deleteAttributeProduct);


module.exports = router
