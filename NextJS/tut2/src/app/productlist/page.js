"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products");
        let data = await response.json();
        console.log(data);
        setProduct(data.products);
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {product.length === 0 ? (
        <p>Loading...</p>
      ) : (
        product.map((item) => (
          <div key={item.id}>
            <h3>Name: {item.title}</h3>
            <p>Description: {item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
            <p>Rating: {item.rating}</p>
            <img src={item.images[0]} alt={item.title} style={{ width: "100px" }} />
          </div>
        ))
      )}
    </div>
  );
}
