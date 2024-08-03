const logger = require('../logger/api.logger');
const db = require("../model");
const AttributeProduct = db.attributeProduct;
const Product = db.product;
const Op = db.Sequelize.Op;

class AttributeProductController {
    
    async createAttributeProduct(req, res) {
        try {
            const attributeProduct = await AttributeProduct.create(req.body);
            await res.status(200).send({ success: true, data: attributeProduct })
        } catch(err) {
            logger.error('Error::' + err);
            return res.status(400).send({ success: false, data: err });
        }
    }
    
    async getAllAttributeProducts(req, res) {
        try {
            const queriesId = [];
            const queries = req.query;
            
            for(let query in queries){
                queriesId.push(queries[query]);
            }
            const attributeProduct = await Product.findAll({
                where: {
                    '$attribute_products.attributeId$': queriesId,
                },
                include: {
                    model: db.attributeProduct,
                    as: 'attribute_products',
                }
            });

            await res.status(200).send({ success: true, data: attributeProduct })
        } catch(err) {
            logger.error('Error::' + err);
            return res.status(400).send({ success: false, data: err });
        }
    }
    
    async getOneAttributeProduct(req, res) {
        try {
            const attributeProduct = await Product.findAll({
                where: {
                    '$attribute_products.attributeId$': req.params.id,
                },
                include: {
                    model: db.attributeProduct,
                    as: 'attribute_products',
                }
            });
            await res.status(200).send({ success: true, data:  attributeProduct });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ success: false, data: null});
        }
    }
    
    async updateAttributeProduct(req, res) {
        try {
            const attributeProduct = await AttributeProduct.update({...req.body}, {
                where: {
                    id: req.params.id
                }
            });
            await res.status(200).send({ success: true, data: attributeProduct });
        } catch(err) {
            logger.error('Error::' + err);
            return res.status(404).send({ success: false, data: null });
        }
    }
    
    async deleteAttributeProduct(req, res) {
        try {
            const attributeProduct = await AttributeProduct.destroy({
                where: {
                    id: req.params.id
                }
            });
            await res.status(200).send({ success: true, data: attributeProduct });
        } catch(err) {            
            logger.error('Error::' + err);
            return res.status(404).send({ success: false, data: err });
        }
    }
}

module.exports = new AttributeProductController();