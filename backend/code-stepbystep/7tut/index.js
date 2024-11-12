const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-com");
const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});
// const ProductsModel = mongoose.model('products', ProductSchema);
// let data = new ProductsModel({
// 	name:"m867",
// 	brand:"micromax",
// 	price: 2000,
// 	category: "mobile"
// });
// let result = await data.save();
// console.log(result);

const saveInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = new Product({
    name: "m867",
    brand: "micromax",
    price: 3000,
    category: "mobile",
  });
  const result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    { name: "m867" },
    { $set: { name: "new Phone", price: 7000 } }
  );
  console.log(data);
};

const deleteInDB = async()=> {
	const Product = mongoose.model('products', ProductSchema);
	let data = await Product.deleteOne({name: "m8"});
	console.log(data);
}

const findInDB = async ()=> {
	const Product = mongoose.model('products', ProductSchema);
	let data = await Product.find({name: "new Phone"});
	console.log(data);
}

// saveInDB();
// updateInDB();
// deleteInDB();
findInDB();
