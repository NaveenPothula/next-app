import React from "react";

const CenteredSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 px-4 flex flex-col items-center">
     
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Empower Your Service with Our End-to-End eCommerce Solution
        </h2>
        {/* <p className="text-lg md:text-xl">
          Explore our services and see how we can help you grow.
        </p> */}
      </div>

      <div className="mb-6">
        <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded">
          Request a Demo
        </button>
      </div>

    
      <div className="w-full px-4 md:px-12 lg:px-20">
        <video
          controls
          className="w-full max-h-80 md:max-h-150 rounded-lg object-cover"
          src="https://www.w3schools.com/html/mov_bbb.mp4" 
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default CenteredSection;
