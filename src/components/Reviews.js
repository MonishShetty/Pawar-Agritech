import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import React, { useState } from "react";

const reviews = [
  {
    name: "Pandu Rathod",
    photo: "pandu.jpeg",
    place: "Bijapur",
    review: "Pawar Agritech uses advanced tech to tackle farm issues. They aim for sustainable, modern farming practices.",
  },
  {
    name: "Hanuma",
    photo: "hanumanth.jpeg",
    place: "Bijapur",
    review: "Pawar Agritech wants to make farming better by using new technologies. Their dream is to help farmers grow more food in ways that are good for the environment.",
  },
  {
    name: "Rohith",
    photo: "rohith.jpeg",
    place: "Bijapur",
    review: "Pawar Agritech employs innovative tech for sustainable, environmentally-friendly farming to aid small farmers.",
  }
];

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className=" py-10 pt-4 pb-8">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl text-green-900 font-bold text-center mb-8">What our happy customers and well-wishers say!!</h2>
        <div className="relative flex justify-center items-center ">
          <div className="flex overflow-hidden w-full max-w-3xl relative ">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`w-full transition-transform duration-500 transform ${
                  index === currentIndex ? "block" : "hidden"
                }`}
              >
                <div className="bg-green-100 p-6 rounded-lg shadow-lg mx-4">
                  <div className="flex items-center mb-4">
                    <img
                      className="w-16 h-16  rounded-full mr-6"
                      src={"testinomials/"+review.photo}
                      alt={review.name}
                    />
                    <div>
                      <h3 className="text-xl p-1 text-green-900 font-bold mb-1">{review.name}</h3>
                      <p className="text-green-900 p-1 mb-2">{review.place}</p>
                    </div>
                  </div>
                  <p className="text-green-900">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-900 text-white p-2 rounded-full z-10 lg:left-2"
          >
            <CircleChevronLeft/>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-900 text-white p-2 rounded-full z-10 lg:right-2"
          >
            <CircleChevronRight/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
