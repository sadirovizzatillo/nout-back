const logger = require('../logger/api.logger');
const db = require("../model");
const Comment = db.comment;
const Product = db.product;
const User = db.user;
const Op = db.Sequelize.Op;

class CommentController {
    
    async createComment(req, res) {
        try {
            const product = await Product.findOne({ where: { id: req.body.productId }});
            const user = await User.findOne({ where: { id: req.body.senderId }});
            if(!product || !user){
                return res.status(404).send({ success: false, data: null, message: "Xato malumot kiritildi!"})
            }else{
                const comment = await Comment.create(req.body);
                return res.status(200).send({ success: true, data: comment })
            }
        } catch(err) {
            logger.error('Error::' + err);
            return res.status(400).send({ success: false, data: err.errors[0].message});
        }
    }
    
    
    async getComments(req, res) {
        try {
            const comments = await Comment.findAll({ include: ['user'] });
            await res.status(200).send({ success: true, data: comments });
        } catch (err) {
            console.log(err);
            return res.status(400).send({ success: false, data: null});
        }
    }
    
    async getOneComment(req, res) {
        try {
            const comment = await Comment.findOne({ where: { id: req.params.id }});
            return res.status(200).send({ success: true, data: comment});
        } catch (err) {
            console.log(err);
            return res.send({ success: false, data: null});
        }
    }
    
    async updateComment(req, res) {
        let data = {};
        try {
            data = await Comment.update({...req.body}, {
                where: {
                    id: req.body.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }
    
    async deleteComment(req, res) {
        let data = {};
        try {
            data = await Comment.destroy({
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

module.exports = new CommentController();