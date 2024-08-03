const express = require("express");
const router = express.Router();
const attributeController = require("../controller/attribute.controller");


router.get('/', attributeController.getAttributes);

router.get('/child/:id', attributeController.getChildAttributes);

router.get('/parent', attributeController.getParentAttributes);

router.get('/:id', attributeController.getOneAttribute);

router.get('/category/:id', attributeController.getAttributesByCartegoryId);

router.post('/', attributeController.createAttribute);

router.put('/:id', attributeController.updateAttribute);

router.delete('/:id', attributeController.deleteAttribute);


module.exports = router
