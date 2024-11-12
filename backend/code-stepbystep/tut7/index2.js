// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/e-com");
// const ProductSchema = new mongoose.Schema({
//   name: String,
//   brand: String,
//   price: Number,
//   category: String,
// });

// const saveInDB = async () => {
//   const ProductsModel = mongoose.model("products", ProductSchema);
//   let data = new ProductsModel({
//     name: "m8",
//     price: 1000,
//     brand: "mi",
//     category: "mobile",
//   });
//   let result = await data.save();
// };

// const updateInDB = async ()=> {
// 	const ProductsModel = mongoose.model('products', ProductSchema);
// 	let data = await ProductsModel.updateOne(
// 	{name: "nokia 10"},
// 	{
// 		$set:{
// 	name:"nokia 20",
// 	price:900}
// 	})
// 	// console.log(data);
// }

// const deleteInDB = async ()=>{
// 	const ProductsModel = mongoose.model('products', ProductSchema);
// 	let data = await ProductsModel.deleteOne({name:'m8'})
// // console.log(data);
// }

// const findInDB = async ()=>{
// 	const ProductsModel = mongoose.model('products', ProductSchema);
// 	let data = await ProductsModel.find({name:'m8'})
// // console.log(data);
// }
// // main();
// // updateInDB();
// // deleteInDB();
// findInDB();

