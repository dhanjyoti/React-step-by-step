// Search Product

import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://gorest.co.in/public/v2/users");
        setProducts(response.data); // Assuming the response contains an array of product objects
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, products]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Search Products</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm && (
        <ul>
          {searchResults.map(product => (
            <li key={product.id}>{product.name}</li> // Adjust the key and display as per your API response
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchProducts;
