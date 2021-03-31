'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// require('dotenv').config();

const clothRouter = require('./routes/clothes.js');
const foodRouter = require('./routes/food.js');

const notFoundHndler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1/cloth/', clothRouter);
app.use('/api/v1/food/', foodRouter);

function homeHandler(req, res) {
    res.send('Hello World');
}

app.get('/', homeHandler);


app.use('*', notFoundHndler);
app.use(errorHandler);

module.exports =
{
    server: app,
    start: (port) => {
        const PORT = port || 8080;
        app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    },
};