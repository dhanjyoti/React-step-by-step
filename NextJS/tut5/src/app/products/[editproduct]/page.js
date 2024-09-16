"use client"
// import { stepContentClasses } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Page(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");

    useEffect(()=>{
        getProductDetail()
    }, [])

    const getProductDetail = async ()=>{
        let productId = props.params.editproduct;
        let productData = await fetch("http://localhost:3000/api/products/"+productId);
        productData = await productData.json();
        if(productData.success){
            let result = productData.result;
            setName(result.name)
            setPrice(result.price)
            setColor(result.color)
            setCompany(result.company)
            setCategory(result.category)
        }
    }

    const updateProduct = async()=>{
        let productId = props.params.editproduct
        let data = await fetch("http://localhost:3000/api/products/"+ productId, {
            method:"PUT",
            body:JSON.stringify({name, price, color, category, company})
        });
        data = await data.json();
        if(data.result){
            alert("Product has been updated");
        }
    }

  return (
    <div>
        <h1>Update Products</h1>
        <div className='flex flex-col gap-3'>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Product Name' />
            <input type='text' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter Product Price' />
            <input type='text' value={color} onChange={(e)=>setColor(e.target.value)} placeholder='Enter Product Color' />
            <input type='text' value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter Product Company' />
            <input type='text' value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter Product Category' />
        </div>
        <button onClick={updateProduct} className='border-2 border-gray-700 p-2 rounded-md'>Update Product</button>
            <Link href={"/products"}>Go to Product List</Link>
    </div>
  )
}
