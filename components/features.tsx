import React from "react";

const ItemsComponent: React.FC = () => {
 
  const items = [
    {
      id: 0,
      heading: "Google Analytics",
      paragraph: "This is the description for item 1.",
      icon: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg" 
    },
    {
      id: 1,
      heading: "MailChimp",
      paragraph: "This is the description for item 2.",
      icon: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg" 
    },
    {
      id: 2,
      heading: "Hootsuits",
      paragraph: "This is the description for item 3.",
      icon: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
    },
    {
      id: 3,
      heading: "Hubspot",
      paragraph: "This is the description for item 4.",
      icon: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg" 
    },
    {
      id: 4,
      heading: "Canva",
      paragraph: "This is the description for item 5.",
      icon: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg" 
    },
    {
      id: 5,
      heading: "Zapier",
      paragraph: "This is the description for item 6.",
      icon: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg" 
    },
  ];

  return (
    <section className="bg-yellow-50 px-[20%] py-16">
    
      <div className="text-center mb-8 text-black">
        <h2 className="text-3xl font-bold mb-4">Enhance Your Productivity With Seamless Integrations</h2>
        <p className="text-sm">Link every pat of your business for a smoother,more efficient workflow</p>
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
      <div className="text-center mt-16">
    
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors">
          Discover more
        </button>
      </div>
    </section>
  );
};

export default ItemsComponent;
