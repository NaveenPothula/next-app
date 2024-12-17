import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white px-[10%] py-12">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div>

        <Link href="/" className="flex items-center space-x-0">
    <img 
      src= "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
      alt="Logo"
      className="w-8 h-8"
    />
    <span className="text-green-500">mCartify</span>
  </Link>
          <p className="text-gray-400">
            we deliver tailored ecommerce solutions that drive sales and enhance the shopping experience
          </p>
        </div>

       
        <div>
          <h4 className="text-xl font-bold mb-4">Useful Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-xl font-bold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Grocery
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Food
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                E-Commerce
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Milk
              </a>
            </li>
          </ul>
        </div>

       
        <div>
          <h4 className="text-xl font-bold mb-4">Download Our App</h4>
         
          <div className="space-y-4 mb-6">
            <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
              <img
                src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg" 
                alt="Google Play"
                className="w-6 h-6"
              />
              <span>Get it on Google Play</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
              <img
                src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
                alt="App Store"
                className="w-6 h-6"
              />
              <span>Download on the App Store</span>
            </a>
          </div>


          <div className="flex space-x-4">
          
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
           
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
           
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
          
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-white mt-10">mCartify@2024, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
