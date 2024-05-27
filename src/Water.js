import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const WaterSolutionsPage = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl text-green-900 font-bold mb-8 text-center">Water Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Images */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img src="ws1.jpg" alt="Water Solutions 1" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <img src="ws2.jpg" alt="Water Solutions 2" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <img src="ws3.jpg" alt="Water Solutions 3" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <img src="ws4.jpg" alt="Water Solutions 4" className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        {/* Content */}
        <div className="mt-8 p-4 text-green-900 rounded-lg shadow-lg">
          <p className="text-lg">
          Water solutions encompass a broad spectrum of strategies, technologies, and policies aimed at addressing water-related challenges. These solutions range from innovative water purification methods to sustainable water management practices.                </p>
          <Transition
            show={showMore}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {(ref) => (
              <div ref={ref}>
                <p className=" text-lg mt-4">
                Desalination, for instance, offers a means to convert seawater into freshwater, vital for regions facing water scarcity. Rainwater harvesting and greywater recycling promote efficient use of water resources by capturing and reusing water for various purposes.                                 </p>
                <p className=" text-lg mt-4">
                Additionally, watershed management techniques focus on conserving and restoring ecosystems to maintain water quality and quantity. Policy interventions, such as water pricing mechanisms and regulations, play a crucial role in promoting responsible water usage and ensuring equitable access to clean water for all.                </p>
              </div>
            )}
          </Transition>
          <button onClick={handleShowMore} className="text-white bg-green-900 p-1 rounded-lg  mt-4 focus:outline-none">
            {showMore ? 'View Less' : 'View More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaterSolutionsPage;
