const express = require("express");
const router = express.Router();
const subAttributeController = require("../controller/sub-attribute.controller");


router.get('/', subAttributeController.getAttributes);

router.get('/:id', subAttributeController.getOneSubAttribute);

router.get('/attributeId/:id', subAttributeController.getAttributesByAttributeId);

router.post('/', subAttributeController.createSubAttribute);

router.put('/:id', subAttributeController.updateAttribute);

router.delete('/:id', subAttributeController.deleteAttribute);


module.exports = router
