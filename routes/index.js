const express = require('express').Router();

const htmlRouter = require('./htmlRoutes');
const apiRouter = require('./apiRoutes');



express.use('/api', apiRouter);
express.use('/htmlRoutes', htmlRouter);

module.exports = express;