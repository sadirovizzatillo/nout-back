const logger = require('../logger/api.logger');
const db = require("../model");
const jwt = require("jsonwebtoken");
const User = db.user;
const Op = db.Sequelize.Op;

class UserController {
    
    async login(req, res) {
        try {
            const user = await User.findOne({ where: { email: req.body.email } });
            if(!user){
                res.status(404).send({ success: false, data: null, message:"Mavjud bo'lmagan foydalanuvchi"});
                return
            }
            
            // if(req.body.password !== user.password){
            //     res.status(404).send("Parol no'tog'ri");
            //     return
            // }
            
            const token = jwt.sign({ id: user.id }, 'tillo', { expiresIn: '1d' });
            
            return res.header('x-auth-token', token).status(200).send({ success: true, data: user, token: token })
        } catch(err) {
            logger.error('Error::' + err);
            return res.status(400).send({ success: false, data: null, error: err.errors[0].message});
        }
    }
    
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            return res.status(201).send({ success: true, data: user });
        } catch (err) {
            return res.status(500).send({ success: false, data: null, error: err.message });
        }
    }
    
    
    async getUsers(req, res) {
        try {
            const page = parseInt(req.query.page, 10) || 1;
            const limit = parseInt(req.query.limit, 10) || 10;    
            const offset = (page - 1) * limit;
            
            
            const { count, rows } = await User.findAndCountAll({
                offset,
                limit
            });
            
            const totalPages = Math.ceil(count / limit);
            await res.status(200).send({ success: true, limit, offset, data: rows, totalPages, totalItems: count });
        } catch (err) {
            return res.status(400).send({ success: false, data: null, error: err.errors[0].message });
        }
    }
    
    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ where: { id: req.params.id }});
            res.status(200).send({ success: true, data: user });
        } catch (err) {
            return res.send({ success: false, data: null, error: err.errors[0].message });
        }
    }
    
    async updateUser(req, res) {
        try {
            const user = await User.update({...req.body}, {
                where: {
                    id: req.params.id
                }
            });
            await res.status(200).send({ success: true, data: user });
        } catch(err) {
            return res.status(400).send({ success: false, data: null, error:err.errors[0].message });
        }
    }
    
    async deleteUser(req, res) {
        try {
            const user = await User.destroy({
                where: {
                    id: req.params.id
                }
            });
            await res.status(200).send({ success: true, data: user })
        } catch(err) {
            return res.status(400).send({ success: false, data: null, error:err.errors[0].message });
        }
    }
}

module.exports = new UserController();