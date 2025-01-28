import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { ProductCard } from './components/ProductCard';
import { db } from './db';
import { products } from './db/schema';

function App() {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const demoProducts = [
    {
      id: 1,
      name: "Classic White Sneakers",
      description: "Comfortable everyday sneakers with modern design",
      price: 7999,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772"
    },
    {
      id: 2,
      name: "Leather Backpack",
      description: "Durable leather backpack perfect for daily use",
      price: 12999,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa"
    },
    {
      id: 3,
      name: "Minimalist Watch",
      description: "Elegant timepiece with premium build quality",
      price: 15999,
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d"
    }
  ];

  const addToCart = (productId: number) => {
    setCartItems([...cartItems, productId]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">ShopStyle</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-64 transition-all"
                />
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Products</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">About</a>
              <div className="relative group">
                <button className="p-2 rounded-full hover:bg-purple-50 transition-colors">
                  <ShoppingBag className="h-6 w-6 text-gray-700 group-hover:text-purple-600" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </div>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors">Home</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors">Products</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors">About</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Discover Your Style</h1>
          <p className="text-xl text-purple-100 mb-8">Curated collection of premium products for the modern lifestyle</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
            Shop Now
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fashion</h3>
            <p className="text-gray-600">Trendy clothing and accessories</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Electronics</h3>
            <p className="text-gray-600">Latest gadgets and devices</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Lifestyle</h3>
            <p className="text-gray-600">Home and lifestyle products</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Featured Products</h2>
        <p className="text-gray-600 mb-8">Handpicked items for you</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demoProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Stay Updated</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest products and offers</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <ShoppingBag className="h-8 w-8 text-purple-400" />
                <span className="ml-2 text-2xl font-bold text-white">ShopStyle</span>
              </div>
              <p className="text-gray-400">Your destination for premium lifestyle products.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-2">Email: support@shopstyle.com</p>
              <p className="text-gray-400 mb-2">Phone: (555) 123-4567</p>
              <p className="text-gray-400">Address: 123 Fashion St, Style City, ST 12345</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2024 ShopStyle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;