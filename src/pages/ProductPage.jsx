import React from 'react';
import { useParams } from 'react-router-dom';

// Daftar produk yang sama
const products = [
  { id: 1, name: 'GeForce RTX 4090', price: 1599, description: 'High-performance graphics card.' },
  { id: 2, name: 'Msi Mpg X670E', price: 850, description: 'Motherboard with advanced features.' },
  { id: 3, name: 'Adata Ddr5 38400', price: 30, description: 'High-speed RAM for better performance.' },
  { id: 4, name: 'Intel Core i9-14900KS', price: 740, description: 'Top-tier processor for gaming and productivity.' },
];

function ProductPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl text-gray-600">${product.price}</p>
      <p className="mt-2">{product.description}</p>
    </div>
  );
}

export default ProductPage;
