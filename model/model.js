module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        name: {
            type: Sequelize.STRING,
            allowNull:false
        },
        surname:{
            type: Sequelize.STRING,
            allowNull:false
        },
        password:{
            type: Sequelize.STRING,
            // allowNull:false
        },
        email:{
            type: Sequelize.STRING,
            // allowNull:false,
        },
        phone:{
            type: Sequelize.STRING,
            allowNull:false,
            unique: true
        },
        role:{
            type: Sequelize.STRING,
            default: "USER"
        },
        // verificationCode:{
        //     type: Sequelize.STRING,
        //     unique: true
        // },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    }, {
        sequelize,
        modelName: 'user',
        timestamps: true
    });
    
    const Product = sequelize.define('product', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull:false
        },
        categoryId: {
            type: Sequelize.INTEGER,
            field: 'categoryId',
            allowNull:false
        },
        initialCount:{
            type: Sequelize.INTEGER,
            allowNull:false,
            defaultValue:1
        },
        count:{
            type: Sequelize.INTEGER,
            // allowNull:false,
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull:false
        },
        public_id:{
            type:Sequelize.STRING,
        },
        url:{
            type:Sequelize.STRING,
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    }, {
        sequelize,
        modelName: 'product',
        timestamps: true
    });
    
    const Attribute = sequelize.define('attribute', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id' // Add this line
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        parentId: {
            type: Sequelize.INTEGER
        },
        categoryId: {
            type: Sequelize.INTEGER,
            field: 'categoryId',
            // allowNull:false
        }
    });
    
    const AttributeProduct = sequelize.define('attribute_product', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        attributeId: {
            type: Sequelize.INTEGER,
            field: 'attributeId',
        },
        productid: {
            type: Sequelize.INTEGER,
            field: 'productId',
        }
    });
    
    const Category = sequelize.define('category', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id' // Add this line
        },
        name: {
            type: Sequelize.STRING,
            allowNull:false
        },
        parentId: {
            type: Sequelize.INTEGER
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    }, {
        sequelize,
        modelName: 'category',
        timestamps: true
    });
    
    const Comment = sequelize.define('comment', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id' // Add this line
        },
        productId:{
            type: Sequelize.INTEGER,
            field: 'productId',
            allowNull:false
        },
        senderId:{
            type: Sequelize.INTEGER,
            field: 'userId',
            allowNull:false
        },
        text: {
            type: Sequelize.STRING,
            allowNull:false
        },
        rate:{
            type: Sequelize.INTEGER,
            // allowNull:false
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    }, {
        sequelize,
        modelName: 'comment',
        timestamps: true
    });
    
    const PurchasedProduct = sequelize.define('product_purchased', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'id' // Add this line
        },
        productItems: {
            type: Sequelize.ARRAY(Sequelize.JSON),
            allowNull: false
        },
        userId: {
            type: Sequelize.INTEGER,
            field: 'userId',
            allowNull:false
        },
        createdAt: {
            type: Sequelize.DATE
        },
        updatedAt: {
            type: Sequelize.DATE
        }
    },
    {
        sequelize,
        modelName: 'purchasedProduct',
        timestamps: true
    });
    
    User.hasMany(Comment, { foreignKey: 'senderId', as: 'comments' });
    Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
    Category.hasMany(Product, { foreignKey: 'categoryId', as: 'product' });
    Product.hasMany(Comment, { foreignKey: 'productId', allowNull: false, as: 'comments' });
    Comment.belongsTo(Product, { foreignKey: 'productId', allowNull: false, as: 'product' });
    Comment.belongsTo(User, { foreignKey: 'senderId', allowNull: false, as: 'user' });
    
    // CATEGORY SELF REFERENCING
    Category.hasMany(Category, { foreignKey: 'parentId', as: 'children' });
    Category.belongsTo(Category, { foreignKey: 'parentId', as: 'parent' });
    
    // ATTRIBUTE SELF REFERENCING
    Attribute.hasMany(Attribute, { foreignKey: 'parentId', as: 'children' });
    Attribute.belongsTo(Attribute, { foreignKey: 'parentId', as: 'parent' });
    
    
    Category.hasMany(Attribute, { foreignKey: 'categoryId', as: 'attribute' });
    Attribute.belongsTo(Category, { foreignKey: 'categoryId', as: 'category'});
    
    
    Product.hasMany(AttributeProduct, { foreignKey: 'productId' });
    AttributeProduct.belongsTo(Product, { foreignKey: 'productId' });
    
    PurchasedProduct.belongsTo(User, { foreignKey: 'userId', as: 'user' });
    User.hasMany(PurchasedProduct, { foreignKey: 'userId', as: 'purchasedProducts' });
    PurchasedProduct.hasMany(Product, { foreignKey: 'purchasedProductId', as: 'products' });
    Product.belongsTo(PurchasedProduct, { foreignKey: 'purchasedProductId', as: 'purchasedProducts' });
    // A purchased product can have many purchase items
    // AttributeProduct.belongsTo(Attribute);
    // Attribute.hasMany(SubAttribute, { foreignKey: 'attributeId', as: 'subAttribute'});
    // SubAttribute.belongsTo(Attribute, { foreignKey: 'attributeId', as: 'attribute'});
    
    return {
        User,
        Product,
        Category,
        Comment,
        Attribute,
        AttributeProduct,
        PurchasedProduct
        // SubAttribute
    };
};
