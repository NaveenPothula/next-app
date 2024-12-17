"use client"
import React, { useState } from "react";

const TabsComponent: React.FC = () => {
  
  const [selectedTab, setSelectedTab] = useState(0);

  
  const tabs = [
    {
      id: 0,
      title: "Brand Persona",
      content: {
        image: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg", 
        heading: "Start Your Brand Today",
        paragraph: "Choose from a varienty of custoizable eCommerce store templates to create your online store and engage the customers you want",
      },
    },
    {
      id: 1,
      title: "Launch without code",
      content: {
        image: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg",
        heading: "Tab 2 Heading",
        paragraph: "Choose from a varienty of custoizable eCommerce store templates to create your online store and engage the customers you want",
      },
    },
    {
      id: 2,
      title: "Personalize Every Step",
      content: {
        image: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg",
        heading: "Tab 3 Heading",
        paragraph: "This is the content for Tab 3.",
      },
    },
    {
      id: 3,
      title: "Eleganr Visuals",
      content: {
        image: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg", 
        heading: "Tab 4 Heading",
        paragraph: "This is the content for Tab 4.",
      },
    },
  ];

  const handleTabClick = (id: number) => {
    setSelectedTab(id);
  };

  return (
    <section className="bg-gray-100 flex flex-col items-center py-8">
     
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">innovative solutions for Your Business</h2>
        <p className="text-lg text-gray-600">
          Our mission is to enhance the accessibility of impactful content, empowering you to reach your audience effectively
        </p>
      </div>

   
      <div className="flex justify-around space-x-4 mb-6 w-full max-w-4xl bg-yellow-50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`py-2 px-4 text-lg font-semibold ${
              selectedTab === tab.id
                ? "text-white bg-gray-800"
                : "text-gray-800 hover:bg-gray-200"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="flex items-start w-full max-w-4xl">
        <div className="flex-shrink-0">
        
          <img
            src={tabs[selectedTab].content.image}
            alt={tabs[selectedTab].content.heading}
            className="w-72 h-72 object-cover rounded-lg" 
          />
        </div>
        <div className="ml-8">
      
          <h3 className="text-2xl font-semibold mb-2">{tabs[selectedTab].content.heading}</h3>
          <p className="text-lg text-gray-700">{tabs[selectedTab].content.paragraph}</p>
        </div>
      </div>
    </section>
  );
};

export default TabsComponent;
