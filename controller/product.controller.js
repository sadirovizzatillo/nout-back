const logger = require('../logger/api.logger');
const db = require("../model");
const Product = db.product;
const AttributeProduct = db.attributeProduct;
const Op = db.Sequelize.Op;
const cloudinary = require("../utils/cloudinary")


class ProductController {
    
    async createProduct(req, res) {
        try {
            let { attributes } = req.body;
            
            attributes = JSON.parse(attributes);
            
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder:"products"
            })
            
            const product = await Product.create({...req.body, 
                public_id:result.public_id,
                url:result.secure_url
            });
            
            if(product && attributes.length > 0){
                attributes.forEach(async (attribute) => {
                    await AttributeProduct.create({
                        productId: product?.id,
                        attributeId: attribute
                    })
                })
            }
            
            await res.status(200).send({ success: true, data: product });
        } catch(err) {
            logger.error('Error::' + err);
            return res.status(400).send({ success: false, data: err });
        }
    }
    
    
    async getProducts(req, res) {
        try {
            const { search } = req.query;
            let products;
            if (search) {
                products = await Product.findAll({ where: {
                    [Op.or]: [
                        { 'name': { [Op.like]: '%' + search + '%' } },
                        { 'description': { [Op.like]: '%' + search + '%' } }
                    ]
                },
            });
        } else {
            products = await Product.findAll();
        }
        await res.status(200).send({ success: true, data: products});
    } catch (err) {
        console.log(err);
        return res.status(400).send({ success: false, data: null});
    }
}

async getProductAdmin(req, res) {
    try {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 10;    
        const offset = (page - 1) * limit;
        
        const { count, rows } = await Product.findAndCountAll({ offset, limit, include: ['category'] });
        
        const totalPages = Math.ceil(count / limit);
        return res.status(200).send({ success: true, data: rows, limit, page, totalItems: count, totalPages });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ success: false, data: null});
    }
}

async getProductsByCategory(req, res) {
    try {
        const { sort, type } = req.query;
        
        const sortTypes = {
            bestSeller: 'purchase',
            expensive: 'price',
            cheap: 'price',
            new: 'createdAt',
        }
        
        let products;
        if(sort){
            products = await Product.findAll({ where: { categoryId: req.params.id }, order: [[sortTypes[sort], type]] });
        }else{
            products = await Product.findAll({ where: { categoryId: req.params.id } });
        }
        return res.status(200).send({ success: true, data: products });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ success: false, data: null });
    }
}

async getOneProduct(req, res) {
    try {
        const product = await Product.findOne({ where: { id: req.params.id }, include: [{
            model: db.comment,
            as: 'comments',
            include: ['user']
        }] });
        await res.status(200).send({ success: true, data: product });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ success: false, data: null });
    }
}

async updateProduct(req, res) {
    try {
        // const attributesId = [];
        const { attributes } = req.body;
        // attributes.forEach(async (attribute) => {
        //     await Attribute.create(attribute);
        // })
        
        
        const product = await Product.update({ ...req.body }, {
            where: {
                id: req.params.id
            }
        });
        
        // if(product && attributesId.length > 0){
        //     attributesId.forEach(async (attribute) => {
        //         await AttributeProduct.create({
        //             productId: product?.id,
        //             attributeId: attribute
        //         })
        //     })
        // }
        
        return res.status(200).send({ success: true, data: product });
    } catch(err) {
        return res.status(400).send({ success: false, data: null });
    }
}

async deleteProduct(req, res) {
    try {
        const product = await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).send({ success: true, data: product })
    } catch(err) {
        return res.status(400).send({ success: false, data: null });
    }
}
}

module.exports = new ProductController();