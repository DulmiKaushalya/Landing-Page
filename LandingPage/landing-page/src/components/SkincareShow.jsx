import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function SkincareShow() {
 const products = [
    {
      id: 1,
      name: "ALYA SKIN CLEANSER.",
      price: "$26.99",
      image: "../../public/images/alyaskin.png",
      bgColor: "bg-blue-50",
      description: "Foaming Micellar Water"
    },
    {
      id: 2,
      name: "RITUAL OF SAKURA.",
      price: "$27.99",
      image: "../../public/images/sakura.png",
      bgColor: "bg-emerald-900",
      description: "Soothing Face Cream"
    },
    {
      id: 3,
      name: "THE BODY LOTION.",
      price: "$19.99",
      image: "../../public/images/bodylotion.png",
      bgColor: "bg-gray-200",
      description: "Moisturizing Body Care"
    }
  ];

  const categories = [
    { name: "NEW ARRIVAL", active: true },
    { name: "CLEANSING", active: false },
    { name: "ACNE FIGHTER", active: false },
    { name: "ANTI AGING", active: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-4 leading-tight">
            Feel Beautiful Inside and Out<br />
            with Every Product.
          </h1>
          
          {/* Category Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-gray-800 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {products.map((product) => (
                   <div key={product.id} className="group cursor-pointer">
                     {/* Product Image Container */}
                     <div className={`relative ${product.bgColor} rounded-3xl overflow-hidden h-96 mb-4 transition-transform duration-300 group-hover:scale-105`}>
                       {/* Full Product Image */}
                       <img 
                         src={product.image} 
                         alt={product.name}
                         className="w-full h-full object-cover object-center"
                       />
                       
                       {/* Overlay for better text readability if needed */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                       
                       {/* Optional: Product badge */}
                       <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         {product.description}
                       </div>
                     </div>
       
                     {/* Product Info */}
                     <div className="flex items-center justify-between">
                       <div>
                         <h3 className="text-lg font-medium text-gray-900 mb-1">
                           {product.name}
                         </h3>
                         <p className="text-sm text-gray-600">FROM {product.price}</p>
                       </div>
                       
                        <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
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