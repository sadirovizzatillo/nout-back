const logger = require('../logger/api.logger');
const db = require("../model");
const Category = db.category;
const Op = db.Sequelize.Op;

class CategoryController {
    
    async createCategory(req, res) {
        try {
            const category = await Category.create(req.body);
            return res.status(200).send({ success: true, data: category})
        } catch(err) {
            return res.status(404).send({ success: false, data: err.errors[0].message});
        }
    }
    
    
    async getCategories(req, res) {
        try {
            const categories = await Category.findAll({ where: { parentId: null }});
            return res.status(200).send({ success: true, data: categories });
        } catch (err) {
            return res.status(404).send({ success: false, data: null });
        }
    }

    async getAdminCategories(req, res) {
        try {
            const categories = await Category.findAll();
            return res.status(200).send({ success: true, data: categories });
        } catch (err) {
            return res.status(404).send({ success: false, data: null });
        }
    }

    async getChildCategories(req, res) {
        try {
            const categories = await Category.findAll({ where: { parentId: req.params.id }, include: ['children'] });
            return res.status(200).send({ success: true, data: categories });
        } catch (err) {
            return res.status(404).send({ success: false, data: null });
        }
    }
    
    async getOneCategory(req, res) {
        try {
            const category = await Category.findOne({ where: { id: req.params.id } });
            return res.status(200).send({ success: true, data: category });
        } catch (err) {
            return res.status(404).send({ success: false, data: null });
        }
    }
    
    async updateCategory(req, res) {
        try {
            const category = await Category.update({...req.body}, {
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).send({ success: true, data: category })
        } catch(err) {
            return res.status(404).send({ success: false, data: null });
        }
    }
    
    async deleteCategory(req, res) {
        try {
            const category = await Category.destroy({
                where: {
                    id: req.params.id
                }
            });
            return res.status(200).send({ success: true, data: category })
        } catch(err) {
            return res.status(404).send({ success: false, data: null });
        }
    }
}

module.exports = new CategoryController();