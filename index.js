const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
var cors = require("cors");
const db = require("./model");

const app = express();
app.use(cors())
const port = process.env.PORT || 3001;
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

db.sequelize.sync({ alter: true })
.then(() => {
    console.log("Synced db.");
})
.catch((err) => {
    console.log("Failed to sync db: " + err.message);
});



const { product, category, comment, user, attribute, subAttribute, attributeProduct, purchasedProduct } = require('./routes');


// app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());


app.use("/api/user", user);
app.use("/api/product", product);
app.use("/api/products/category", category);
app.use("/api/comment", comment);
app.use("/api/attribute", attribute);
app.use("/api/sub-attribute", subAttribute);
app.use("/api/attribute-product", attributeProduct);
app.use("/api/purchased-product", purchasedProduct);



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})