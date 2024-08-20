"use client";
import React, { useEffect, useState } from "react";
import styles from "./product.module.css";
import Link from "next/link";

const getProducts = async () => {
  let data = await fetch("/api/products");
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await getProducts();
      setProducts(productData);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <table className={styles.tableBox}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Color</td>
            <td>Company</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.color}</td>
              <td>{item.company}</td>
              <td>{item.category}</td>
              <td><Link href={"products/"+item._id}>Edit</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}