const logger = require('../logger/api.logger');
const db = require("../model");
const Attribute = db.attribute;
const Category = db.category;
const SubAttribute = db.subAttribute;
const Op = db.Sequelize.Op;

class AttributeController {
    
    async createAttribute(req, res) {
        try {
            console.log(req.body);
            const attribute = await Attribute.create(req.body);
            return res.status(200).send({ success: true, data: attribute })
        } catch(err) {
            logger.error('Error::' + err);
            return res.status(400).send({ success: false, data: err });
        }
    }
    
    async getParentAttributes(req, res) {
        try {
            const attributes = await Attribute.findAll({ where: { parentId: null }});
            return res.status(200).send({ success: true, data: attributes });
        } catch (err) {
            console.log(err);
            return res.status(404).send({ success: false, data: null});
        }
    }
    
    async getChildAttributes(req, res) {
        try {
            const attributes = await Attribute.findAll({ where: { parentId: req.params.id }});
            return res.status(200).send({ success: true, data: attributes });
        } catch (err) {
            console.log(err);
            return res.status(404).send({ success: false, data: null});
        }
    }
    
    async getAttributesByCartegoryId(req, res) {
        try {
            const attributes = await Attribute.findAll({ where: { categoryId: req.params.id }, include: ['children']});
            return res.status(200).send({ success: true, data: attributes });
        } catch (err) {
            console.log(err);
            return res.status(404).send({ success: false, data: null});
        }
    }
    
    async getAttributes(req, res) {
        try {
            const attributes = await Attribute.findAll();
            return res.status(200).send({ success: true, data: attributes });
        } catch (err) {
            console.log(err);
            return res.status(404).send({ success: false, data: null });
        }
    }
    
    async getOneAttribute(req, res) {
        try {
            const attribute = await Attribute.findOne({ where: { id: req.params.id }});
            return res.status(200).send({ success: true, data:  attribute });
        } catch (err) {
            console.log(err);
            return res.send({ success: false, data: null});
        }
    }
    
    async updateAttribute(req, res) {
        try {
            const attribute = await Attribute.update({...req.body}, {
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).send({ success: true, data: attribute });
        } catch(err) {
            logger.error('Error::' + err);
            return res.status(404).send({ success: false, data: null });
        }
    }
    
    async deleteAttribute(req, res) {
        try {
            const attribute = await Attribute.destroy({
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).send({ success: true, data: attribute });
        } catch(err) {            
            logger.error('Error::' + err);
            return res.status(404).send({ success: false, data: err });
        }
    }
}

module.exports = new AttributeController();