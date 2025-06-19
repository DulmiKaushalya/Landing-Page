import { useEffect, useRef, useState } from "react";
import { ShoppingBag, Search } from "lucide-react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (navRef.current) {
      const navElement = navRef.current;
      navElement.style.transform = "translateY(-60px)";
      navElement.style.opacity = "0";
      
      setTimeout(() => {
        navElement.style.transition = "all 0.8s ease-out";
        navElement.style.transform = "translateY(0)";
        navElement.style.opacity = "1";
      }, 100);
    }
  }, []);

  return (
    <header ref={navRef} className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-black">SKINCARE</div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <li><a href="#" className="hover:text-black transition-colors">All Products</a></li>
          <li><a href="#" className="hover:text-black transition-colors">Serum</a></li>
          <li><a href="#" className="hover:text-black transition-colors">Sunscreen</a></li>
          <li><a href="#" className="hover:text-black transition-colors">Bundle</a></li>
        </ul>
        {/* Mobile Hamburger */}
        <button className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open Menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        {/* Cart/Search */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingBag className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4 pt-2">
          <ul className="flex flex-col space-y-4 text-base font-medium text-gray-700">
            <li><a href="#" className="hover:text-black transition-colors block">All Products</a></li>
            <li><a href="#" className="hover:text-black transition-colors block">Serum</a></li>
            <li><a href="#" className="hover:text-black transition-colors block">Sunscreen</a></li>
            <li><a href="#" className="hover:text-black transition-colors block">Bundle</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}