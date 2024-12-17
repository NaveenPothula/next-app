import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-20 py-4 flex justify-between items-center">
        
        <div className="text-2xl font-bold text-green-500 flex items-center">
  <Link href="/" className="flex items-center space-x-0">
    <img 
      src= "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
      alt="Logo"
      className="w-8 h-8"
    />
    <span>mCartify</span>
  </Link>
</div>

      
        <nav className="hidden md:flex space-x-8">
          <Link href="/about" className="hover:text-green-500">
            About
          </Link>
          <Link href="/pricing" className="hover:text-green-500">
            Pricing
          </Link>
          <Link href="/services" className="hover:text-green-500">
            Services
          </Link>
          <Link href="/integration" className="hover:text-green-500">
            Integration
          </Link>
          <Link href="/contact" className="hover:text-green-500">
            Contact
          </Link>
        </nav>

       
        <div className="flex space-x-4">
          <Link href="/login">
            <button className="px-4 py-2  text-white hover:bg-green-500 hover:text-black rounded">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 bg-green-500 text-black hover:bg-green-600 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
