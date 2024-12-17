import React from "react";

const PricingSection: React.FC = () => {
  const plans = [
    {
      id: 1,
      title: "Basic Plan",
      paragraph1: "Perfect for individuals getting started.",
      price: "₹1000/month",
      paragraph2: "Access to basic features and support.",
      features: [
        "Access to core features",
        "Email support",
        "Up to 5 projects",
      ],
      isMostPopular: false,
    },
    {
      id: 2,
      title: "Pro Plan",
      paragraph1: "Best for growing teams and businesses.",
      price: "₹1000/month",
      paragraph2: "Includes advanced tools and integrations.",
      features: [
        "All Basic features included",
        "Priority support",
        "Unlimited projects",
        "Advanced reporting",
      ],
      isMostPopular: true, 
    },
    {
      id: 3,
      title: "Enterprise Plan",
      paragraph1: "For large organizations with custom needs.",
      price: "₹3000/month",
      paragraph2: "Tailored for enterprise-grade solutions.",
      features: [
        "All Pro features included",
        "Dedicated account manager",
        "Custom integrations",
      ],
      isMostPopular: false,
    },
  ];

  return (
    <section className="bg-white px-[10%] py-12">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Flexible Pricing for Every Business</h2>
        <p className="text-lg text-gray-600">
          No Extra Charges.No hidden fees.
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="relative bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col 
               border-2 border-black"
            
          >
          
            {plan.isMostPopular && (
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold py-1 px-3 rounded-tr-lg">
                Most Popular
              </div>
            )}

           
            <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-gray-600 mb-4">{plan.paragraph1}</p>

            <div className="text-4xl font-bold text-green-500 mb-2">
              {plan.price}
            </div>
            <p className="text-gray-600 mb-6">{plan.paragraph2}</p>

            <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition mb-2">
              Start a Free Trial
            </button>
            <p className="text-xs text-gray-500 mb-6">
              No credit card required
            </p>

            <h4 className="text-lg font-semibold mb-2">Key Features</h4>
            <ul className="text-gray-700 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414-1.414l-7 7-3-3a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}

    
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center justify-start border-2 border-black">
          <h3 className="text-2xl font-bold text-center mb-4">Custom Plan</h3>
          <p className="text-gray-600 text-center mb-6">
            We have custom plans suited to your needs.
          </p>
          <img
            src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
            alt="Custom Plan"
            className="mb-6 rounded-lg"
          />
          <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition">
            Set Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
