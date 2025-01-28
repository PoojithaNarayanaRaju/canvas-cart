import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  onAddToCart: (id: number) => void;
}

export function ProductCard({ id, name, description, price, image, onAddToCart }: ProductProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors">
          <Heart className="h-5 w-5" />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${(price / 100).toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(id)}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}