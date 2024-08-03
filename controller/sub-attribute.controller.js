const logger = require('../logger/api.logger');
const db = require("../model");
const SubAttribute = db.subAttribute;
const Op = db.Sequelize.Op;

class SubAttributeController {
    
    async createSubAttribute(req, res) {
        try {
            const subAttribute = await SubAttribute.create(req.body);
            return res.status(200).send({ success: true, data: subAttribute })
        } catch(err) {
            logger.error('Error::' + err);
            return res.status(400).send({ success: false, data: err.errors[0].message});
        }
    }
    
    
    async getAttributes(req, res) {
        try {
            const subAttributes = await SubAttribute.findAll();
            return res.status(201).send({ success: true, data: subAttributes });
        } catch (err) {
            console.log(err);
            return res.status(404).send({ success: false, data: null});
        }
    }
    
  
    async getAttributesByAttributeId(req, res) {
        try {
            const subAttributes = await SubAttribute.findAll({ where: { attributeId: req.params.id } });
            return res.status(201).send({ success: true, data: subAttributes });
        } catch (err) {
            console.log(err);
            return res.status(404).send({ success: false, data: null});
        }
    }

    async getOneAttribute(req, res) {
        try {
            const subAttribute = await SubAttribute.findOne({ where: { id: req.params.id }});
            return res.status(200).send({ success: true, data:  subAttribute });
        } catch (err) {
            console.log(err);
            return res.send({ success: false, data: null});
        }
    }

    async getOneSubAttribute(req, res) {
        try {
            const subAttribute = await SubAttribute.findOne({ where: { id: req.params.id }});
            return res.status(200).send({ success: true, data:  subAttribute });
        } catch (err) {
            console.log(err);
            return res.send({ success: false, data: null});
        }
    }
    
    async updateAttribute(req, res) {
        let data = {};
        try {
            data = await Attribute.update({...req.body}, {
                where: {
                    id: req.body.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }
    
    async deleteAttribute(req, res) {
        let data = {};
        try {
            data = await Attribute.destroy({
                where: {
                    id: req.body.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }
}

module.exports = new SubAttributeController();