import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Marketplace from './pages/Marketplace';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <SearchBar />
          <Link to="/" className="text-white text-2xl font-bold hover:underline">
            Marketplace
          </Link>
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
