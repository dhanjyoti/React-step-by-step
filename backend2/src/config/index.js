const dotenv = require('dotenv');

dotenv.config();

const configs = {
    URI: process.env.URI,
} 

module.exports = configs;