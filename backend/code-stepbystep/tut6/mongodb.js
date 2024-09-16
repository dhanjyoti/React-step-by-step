const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
// const url =
//   "mongodb+srv://test_mongo:WoYLi5X9shi49YtT@cluster0.o6wf8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const database = "e-com";
// const database = "productDB";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("products");
}

module.exports = dbConnect;
