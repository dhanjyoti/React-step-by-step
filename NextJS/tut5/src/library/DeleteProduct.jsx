"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

export default function DeleteProduct({ id }) {
    const router = useRouter();

    const deleteRecord = async () => {
        try {
            let response = await fetch(`http://localhost:3000/api/products/${id}`, {
                method: "DELETE"
            });
            response = await response.json();
            if (response.success) {
                alert("Product deleted");
                await router.push("/products");
            } else {
                alert("Failed to delete product");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            alert("An error occurred while deleting the product.");
        }
    };

    return (
        <button onClick={deleteRecord}>Delete</button>
    );
}
