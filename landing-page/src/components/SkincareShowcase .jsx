import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

export default function SkincareShowcase() {
  const products = [
    {
      id: 1,
      name: "ALYA SKIN CLEANSER.",
      price: "$26.99",
      image: "/images/alyaskin.png",
      bgColor: "bg-blue-50",
      description: "Foaming Micellar Water"
    },
    {
      id: 2,
      name: "RITUAL OF SAKURA.",
      price: "$27.99",
      image: "/images/sakura.png",
      bgColor: "bg-emerald-900",
      description: "Soothing Face Cream"
    },
    {
      id: 3,
      name: "THE BODY LOTION.",
      price: "$19.99",
      image: "/images/bodylotion.png",
      bgColor: "bg-gray-200",
      description: "Moisturizing Body Care"
    }
  ];

  // Carousel state for mobile/tablet
  const [current, setCurrent] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const visibleProducts = isMobile ? [products[current]] : products;

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  // Responsive: use 1 column on mobile, 3 on md+
  return (
    <div className="min-h-screen bg-[
#fefff4] p-4 sm:p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        {/* Navigation and Title */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12 gap-4 md:gap-0">
          <div className="flex items-center space-x-2 md:space-x-4">
            <span className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 rounded-full bg-white border border-gray-300 text-xs md:text-sm font-medium text-gray-700">
              • Best Selling Products
            </span>
          </div>
          <div className="text-center flex-1">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-light text-[#2d3b36] leading-tight font-semibold">
              Skincare That Brings Out<br />
              Your Natural Radiance
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="p-2 md:p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-all duration-200 active:scale-90 focus:scale-95"
              onClick={handlePrev}
              aria-label="Previous Product"
              style={{ touchAction: 'manipulation' }}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              className="p-2 md:p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all duration-200 active:scale-90 focus:scale-95"
              onClick={handleNext}
              aria-label="Next Product"
              style={{ touchAction: 'manipulation' }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 transition-transform duration-500`}>
          {visibleProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer transition-transform duration-500">
              {/* Product Image Container */}
              <div className={`relative ${product.bgColor} rounded-3xl overflow-hidden h-72 sm:h-96 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-105`}>
                {/* Full Product Image */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Optional: Product badge */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {product.description}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-0.5 sm:mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">FROM {product.price}</p>
                </div>
                
                 <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-200 active:scale-90 focus:scale-95">
                  <ShoppingCart className="w-5 h-5" />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}