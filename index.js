'use strict';
const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    require('./src/server.js').start(process.env.PORT);
})
.catch((error)=>{
    console.log('error with connected',error.message)
})