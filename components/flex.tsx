import React from "react";

const ItemsComponent: React.FC = () => {

  const items = [
    {
      id: 0,
      heading: "E-Commerce",
      paragraph: "This is the description for item 1.",
      icon: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg" 
    },
    {
      id: 1,
      heading: "Restaurants",
      paragraph: "This is the description for item 2.",
      icon: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg" 
    },
    {
      id: 2,
      heading: "Grocery",
      paragraph: "This is the description for item 3.",
      icon: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg" 
    },
    {
      id: 3,
      heading: "Services",
      paragraph: "This is the description for item 4.",
      icon: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg" 
    },
    {
      id: 4,
      heading: "Cab booking",
      paragraph: "This is the description for item 5.",
      icon: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg" 
    },
    {
      id: 5,
      heading: "Cooking",
      paragraph: "This is the description for item 6.",
   
      icon: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
    
    },
  ];

  return (
    <section className="bg-green-900 px-[20%] py-16">
   
      <div className="text-center mb-8 text-white">
        <h2 className="text-4xl font-bold mb-4">Industries served</h2>
        <p className="text-sm">explore solutions Across Multiple Sectors</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 text-black rounded-lg shadow-lg flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{item.heading}</h3>
              <img src={item.icon} alt="Icon" className="w-8 h-8" />
            </div>
            <p className="text-md mb-4">{item.paragraph}</p>
            <a
              href="#"
              className="text-green-500 hover:text-green-600 flex items-center"
            >
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 00-1.41-.06L9 8.585 8.41 8a1 1 0 00-1.42 1.42l2 2a1 1 0 001.41 0l2-2a1 1 0 000-1.42z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemsComponent;
