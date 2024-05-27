import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(soil.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-0">
        <h1 className="text-4xl  md:text-6xl font-bold mb-4">Soil Testing</h1>
        <p className="text-lg font-bold  md:text-xl mb-2">Soil testing is a critical process in agriculture and environmental management, involving the analysis of soil samples to determine nutrient content, composition, and other vital characteristics. By assessing factors such as pH levels, organic matter, and mineral content, soil testing helps identify deficiencies or toxicities in the soil, enabling farmers and gardeners to make informed decisions about fertilization and crop management.</p>
        <p className="text-lg font-bold md:text-xl">The uses of soil testing extend beyond agriculture. In environmental science, it aids in monitoring pollution and assessing soil health for land reclamation projects. For urban planning, it ensures safe construction by evaluating soil stability and composition. Overall, soil testing provides essential data for sustainable land use and effective agricultural practices.</p>
      </div>
    </div>
  );
};

export default HeroSection;
