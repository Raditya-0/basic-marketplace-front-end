import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productImage_A from '../assets/images_A.jpg'; 
import productImage_B from '../assets/images_B.jpg';
import productImage_C from '../assets/images_C.jpg';
import productImage_D from '../assets/images_D.jpg'; 
import productImage_E from '../assets/images_E.jpg';
import productImage_F from '../assets/images_F.jpg';
import productImage_G from '../assets/images_G.jpg';

const featuredProducts = [
  { id: 1, name: 'PC All-in-One', discount: true, image: productImage_A },
  { id: 2, name: 'Paket Full Set PC', discount: false, image: productImage_B },
  { id: 3, name: 'Laptop HP', discount: true, image: productImage_C },
];

const allProducts = [
  { id: 1, name: 'GeForce RTX 4090', price: 1599, image: productImage_D },
  { id: 2, name: 'Msi Mpg X670E', price: 850, image: productImage_E },
  { id: 3, name: 'Adata Ddr5 38400', price: 30, image: productImage_F },
  { id: 4, name: 'Intel Core i9-14900KS', price: 740, image: productImage_G },
];

function Marketplace() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Featured Product Slider */}
      <div className="relative overflow-hidden w-full h-64 mb-8">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`absolute transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-bold">{product.name}</h3>
              {product.discount && <span className="text-red-400">Discount</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {allProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg">
              <Link to={`/product/${product.id}`}>
                <div
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '160px',
                  }}
                  className="mb-2"
                />
                <h4 className="text-lg font-bold">{product.name}</h4>
                <p className="text-gray-500">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
