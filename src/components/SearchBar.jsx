import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Daftar produk dengan ID yang sesuai
const products = [
  { id: 1, name: 'GeForce RTX 4090', price: 1599 },
  { id: 2, name: 'Msi Mpg X670E', price: 850 },
  { id: 3, name: 'Adata Ddr5 38400', price: 30 },
  { id: 4, name: 'Intel Core i9-14900KS', price: 740 },
];

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results); // Set hasil pencarian
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigasi ke halaman produk
    setSearchResults([]); // Hapus hasil setelah navigasi
  };

  return (
    <div className="relative mb-4">
      <input
        type="text"
        className="rounded-lg p-2"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="ml-2 bg-white text-blue-600 rounded-lg px-4 py-2"
        onClick={handleSearch}
      >
        Search
      </button>

      {/* Dropdown hasil pencarian */}
      {searchResults.length > 0 && (
        <ul className="absolute bg-white border mt-2 w-full rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
          {searchResults.map((product) => (
            <li
              key={product.id}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
      {searchResults.length === 0 && searchTerm && (
        <ul className="absolute bg-white border mt-2 w-full rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
          <li className="p-2 text-red-500">No results found</li>
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
