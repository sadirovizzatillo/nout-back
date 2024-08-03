const Sequelize = require('sequelize');
const logger = require('../logger/api.logger');
const db = require("../model");
const PurchasedProduct = db.purchasedProduct;
const Product = db.product;
const User = db.user;
const Op = db.Sequelize.Op;

// const hasTwoSameNumbers = (array) => {
//     const set = new Set();

//     for (const product of array) {
//         if (set.has(product?.productId)) {
//             return true;
//         } else {
//             set.add(product?.productId);
//         }
//     }

//     return false;
// };

class PurchasedProductController {
    
    async createPurchasedProduct(req, res) {
        try {
            // Check if the productItems array is empty.
            if (!req.body.productItems || !req.body.productItems.length) {
                return res.status(400).send({ success: false, data: "Mahsulotlarni qo'shaishda xatolik!" });
            }
            
            // Check if the productIds and amounts arrays have the same length.
            const productIds = req.body.productItems.map((item) => item?.productId);
            const amounts = req.body.productItems.map((item) => item?.amount);
            if (productIds.length !== amounts.length) {
                return res.status(400).send({ success: false, data: "Mahsulotlarni qo'shaishda xatolik!" });
            }
            
            // Check if the products exist.
            const productExists = await Product.findAll({
                where: {
                    id: productIds,
                },
            }).then((products) => products.length === productIds.length);
            
            if (!productExists) {
                return res.status(400).send({ success: false, data: "Mahsulotlarni qo'shaishda xatolik!" });
            }
            
            // Create the purchased product.
            const purchasedProduct = await PurchasedProduct.create(req.body);
            
            // Update the product counts.
            for (const productItem of purchasedProduct.productItems) {
                const product = await Product.findOne({
                    where: {
                        id: productItem.productId,
                    },
                });
                
                if(product.count){
                    if(productItem.amount >= product.count){
                        product.count = 0
                    }else{
                        product.count = product.count - productItem.amount;
                    }
                }else{
                    product.count = product.initialCount - productItem.amount;
                }
                await product.save();
            }
            
            // Send a success response.
            await res.status(200).send({ success: true, data: purchasedProduct });
        } catch (err) {
            // Return an error response.
            return res.status(404).send({ success: false, data: err });
        }
    }
    
    
    async getPurchasedProducts(req, res) {
        try {
            const purchasedProduct = await PurchasedProduct.findAll();
            await res.status(200).send({ success: true, data: purchasedProduct });
        } catch (err) {
            return res.status(404).send({ success: false, data: null });
        }
    }
    
    async getPurchasedProductsByUser(req, res) {
        try {
            const purchasedProducts = await PurchasedProduct.findAll({
                where: {
                    userId: req.params.id
                }
            });
            
            for (const purchasedProduct of purchasedProducts) {
                for (const purchaseItem of purchasedProduct.productItems) {
                    // Find the product associated with the purchase item
                    const product = await Product.findOne({
                        where: {
                            id: purchaseItem.productId,
                        },
                    });
                    
                    // Add the product to the purchase item
                    purchaseItem.product = product;
                }
            }
            
            // const products = await Product.findAll({
            //     where: {
            //         id: purchasedProducts.map((purchasedProduct) => purchasedProduct.productId),
            //     },
            // });
            
            // const purchasedProductsWithProducts = purchasedProducts.map((purchasedProduct) => {
            //     const product = products.find((product) => product.id === purchasedProduct.productId);
            //     return {
            //         ...purchasedProduct,
            //         product,
            //     };
            // });
            
            await res.status(200).send({ success: true, data: purchasedProducts });
        } catch (err) {
            return res.status(404).send({ success: false, data: null });
        }
    }
    
    async getAdminCategories(req, res) {
        try {
            const categories = await PurchasedProduct.findAll();
            await res.status(200).send({ success: true, data: categories });
        } catch (err) {
            return res.status(404).send({ success: false, data: null });
        }
    }
    
    async getChildCategories(req, res) {
        try {
            const categories = await PurchasedProduct.findAll({ where: { parentId: req.params.id }, include: ['children'] });
            await res.status(200).send({ success: true, data: categories });
        } catch (err) {
            return res.status(404).send({ success: false, data: null });
        }
    }
    
    async getOneCategory(req, res) {
        try {
            const category = await PurchasedProduct.findOne({ where: { id: req.params.id } });
            await res.status(200).send({ success: true, data: category });
        } catch (err) {
            return res.status(404).send({ success: false, data: null });
        }
    }
    
    async updateCategory(req, res) {
        try {
            const category = await PurchasedProduct.update({...req.body}, {
                where: {
                    id: req.params.id
                }
            });
            await res.status(200).send({ success: true, data: category })
        } catch(err) {
            return res.status(404).send({ success: false, data: null });
        }
    }
    
    async deleteAllPurchasedProducts(req, res) {
        try {
            const purchasedProduct = await PurchasedProduct.destroy({
                where: {}
            });
            await res.status(200).send({ success: true, data: purchasedProduct })
        } catch(err) {
            return res.status(404).send({ success: false, data: null });
        }
    }
    
    async deletePurchasedProducts(req, res) {
        try {
            const purchasedProduct = await PurchasedProduct.destroy({
                where: {
                    id: req.params.id
                }
            });
            await res.status(200).send({ success: true, data: purchasedProduct })
        } catch(err) {
            return res.status(404).send({ success: false, data: null });
        }
    }
}

module.exports = new PurchasedProductController();