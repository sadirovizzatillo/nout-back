const express = require("express");
const router = express.Router();
const purchasedProductController = require("../controller/purchased-product.controller");

router.get('/', purchasedProductController.getPurchasedProducts);

router.get('/user/:id', purchasedProductController.getPurchasedProductsByUser);


router.delete('/all', purchasedProductController.deleteAllPurchasedProducts);


// router.get('/admin', purchasedProductController.getPurchasedProductAdmin);

// router.get('/category/:id', purchasedProductController.getPurchasedProductsByCategory);

// router.get('/:id', purchasedProductController.getPurchasedOneProduct);

router.post('/', purchasedProductController.createPurchasedProduct);

// router.put('/:id', purchasedProductController.updatePurchasedProduct);

// router.delete('/:id', purchasedProductController.deletePurchasedProduct);


module.exports = router
