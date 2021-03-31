const app = require('./src/server')
require('dotenv').config();

app.start(process.env.PORT)