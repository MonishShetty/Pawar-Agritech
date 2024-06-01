import React from "react";

const FeatureSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-900">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Feature */}
          <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
            <img
              src="confarm.jpg"
              alt=""
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-bold mb-4 text-center text-green-900">
              Contract Farming
              </h2>
              <p className="text-green-900 text-center">
              Contract farming facilitates collaboration between farmers and companies, ensuring mutual benefits, productivity, and quality control in agricultural production
              </p>
            </div>
          </div>

          {/* Second Feature */}
          <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
            <img
              src="water.jpg"
              alt=""
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-bold mb-4 text-center text-green-900">
            Water Solutions
              </h2>
              <p className="text-green-900 text-center">
              Water solutions integrate advanced technologies to optimize usage, mitigate scarcity, and enhance sustainability for communities and industries worldwide
                            </p>
            </div>
          </div>

          {/* Third Feature */}
          <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
            <img
              src="of.jpg"
              alt=""
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-bold mb-4 text-center text-green-900">
              Organic Fertilizer
              </h2>
              <p className="text-green-900 text-center">
              Organic fertilizers, derived from natural sources like compost and manure, enhance soil fertility without harmful chemicals, promoting sustainable agriculture
              </p>
            </div>
          </div>

          {/* Fourth Feature */}
          <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
            <img
              src="sw.jpg"
              alt=""
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-bold mb-4 text-center text-green-900">
               Warehouse
              </h2>
              <p className="text-green-900 text-center">
              A state-of-the-art storage warehouse, equipped with advanced technology, ensures efficient management and secure storage of goods
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    
  );
};

export default FeatureSection;
