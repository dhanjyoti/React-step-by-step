const mongoose = require('mongoose');

const connect = async ({uri})=>{
    console.log("connecting to db")
    await mongoose.connect(uri);
    console.log("connected to db successfully")
};

const db = {
    connect,
};

module.exports = db;