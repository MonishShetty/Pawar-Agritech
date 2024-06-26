import React, { useEffect } from 'react';

export default function Carousel() {
  useEffect(() => {
    const initializeCarousel = () => {
      const carouselElement = document.getElementById('indicators-carousel');
      if (carouselElement) {
        console.log('Carousel found, initializing...');
        const items = carouselElement.querySelectorAll('[data-carousel-item]');
        let activeIndex = 0;

        const showItem = (index) => {
          items.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index);
            item.classList.toggle('block', i === index);
          });
        };

        const nextItem = () => {
          activeIndex = (activeIndex + 1) % items.length;
          showItem(activeIndex);
        };

        const prevItem = () => {
          activeIndex = (activeIndex - 1 + items.length) % items.length;
          showItem(activeIndex);
        };

        document.querySelector('[data-carousel-next]').addEventListener('click', nextItem);
        document.querySelector('[data-carousel-prev]').addEventListener('click', prevItem);

        showItem(activeIndex);
      } else {
        console.log('Carousel element not found');
      }
    };

    initializeCarousel();
  }, []);

  return (
    <div>
      <div id="indicators-carousel" className="relative w-full" data-carousel="static">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="webimages/drone.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Drone" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 p-4 text-white text-center">
              <h3 className="text-xl font-bold mb-1">Maximizing agricultural productivity through digital tools</h3>
            </div>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="webimages/plant.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Plant" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 p-4 text-white text-center">
              <h3 className="text-xl font-bold mb-1">Empowering farmers with innovative technology solutions</h3>
            </div>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="webimages/farm.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Farm" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 p-4 text-white text-center">
              <h3 className="text-xl font-bold mb-1">Transforming farming practices with data-driven insights</h3>
            </div>
          </div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
