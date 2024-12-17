import React from "react";

const FeatureComponent: React.FC = () => {
  
  const items = [
    {
      id: 0,
      logo: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg",
      heading: "All in one Solution",
      paragraph: "Description of feature 1.",
    },
    {
      id: 1,
      logo: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg", 
      heading: "Scalability",
      paragraph: "Description of feature 2.",
    },
    {
      id: 2,
      logo: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg", 
      heading: "Seamless Integrations",
      paragraph: "Description of feature 3.",
    },
  ];

  return (
    <section className="bg-white px-[10%] py-8">
    
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
        <p className="text-lg text-gray-600">Discover the Advantages That Set Us Apart</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 text-black rounded-lg shadow-lg flex flex-col items-start"
          >
            <img
              src={item.logo}
              alt={item.heading}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-2xl font-semibold text-green-500 mb-2">
              {item.heading}
            </h3>
            <p className="text-md text-gray-700 mb-4">{item.paragraph}</p>
          </div>
        ))}
      </div>

      
      <div className="text-center mt-8">
        <h3 className="text-3xl font-bold mb-4">Experience Seamless eCommerce!</h3>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default FeatureComponent;
