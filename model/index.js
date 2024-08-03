const Sequelize = require("sequelize");
const sequelize = new Sequelize("nout", "postgres", "a-z123456789", {
    host: "::1",
    dialect: "postgres"
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const { Product, Category, Comment, User, Attribute, AttributeProduct, PurchasedProduct } = require("./model")(sequelize, Sequelize);
db.product = Product;
db.category = Category;
db.comment = Comment;
db.user = User;
db.attribute = Attribute;
db.attributeProduct = AttributeProduct;
db.purchasedProduct = PurchasedProduct;
// db.subAttribute = SubAttribute;

module.exports = db;