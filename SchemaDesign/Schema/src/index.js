const express = require('express');
const userControllers = require('./controllers/user.controllers');
const productControllers = require('./controllers/product.controllers');
const brandControllers = require('./controllers/brand.controllers');

const app = express();

app.use(express.json());

app.use("/users", userControllers);
app.use("products", productControllers);
app.use("/brands", brandControllers);

module.exports = app;