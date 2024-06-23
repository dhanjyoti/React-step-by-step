import Product from "./product";

async function sproductlist(){
	let data = await fetch("https://dummyjson.com/products");
	data = await data.json();
	return data.products
}
export default async function Page(){
	let products = await sproductlist();
	console.log(products);
	return (
	<div>
		<h1>Server Products List</h1>
		{
		products.map((item)=>(
			<div key="">
				<h3>Name: {item.title}</h3>
				<Product price={item.price} />
			</div>
		))}
	
	</div>
	)
}
