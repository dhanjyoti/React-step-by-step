import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch the list of product names from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('api');
        setProducts(response.data); // Assuming the response contains an array of product names
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on the search term
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Search Products</h2>
      <input
        type="text"
        placeholder="Search products by name..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchProducts;
