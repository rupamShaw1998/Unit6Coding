const express = require('express');
const productController = require('./controllers/entity.controllers');

const app = express();

app.use(express.json());

app.use('/product', productController);

module.exports = app;