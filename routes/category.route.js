const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category.controller");


router.get('/', categoryController.getCategories);

router.get('/admin/', categoryController.getAdminCategories);

router.get('/:id', categoryController.getOneCategory);

router.get('/child/:id', categoryController.getChildCategories);

router.post('/', categoryController.createCategory);

router.put('/:id', categoryController.updateCategory);

router.delete('/:id', categoryController.deleteCategory);


module.exports = router
