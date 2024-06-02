import React, { useState } from 'react';

export default function FAQ() {
    // Define state to manage accordion open/close state for each section
    const [openIndex, setOpenIndex] = useState(0); // Initially set to 0

    // Function to toggle accordion state for a specific section
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Data for FAQ sections
    const faqs = [
        {
            question: "Why do farmers require soil testing?",
            answer: "Soil testing is crucial for farmers because it provides valuable insights into the health and composition of their soil. This helps them make informed decisions about fertilizer application, crop selection, and soil management practices to optimize yields and protect the environment",
        },
        {
            question: "Why is Water management important for  farmers?",
            answer: "Water management is vital for farmers because it ensures efficient use of water resources, especially in regions prone to drought or water scarcity. Proper water management techniques like irrigation scheduling, water conservation, and drainage systems help farmers optimize crop growth, minimize water wastage, and sustain agricultural productivity in the long term",
        },
        {
            question: "How is technology beneficial in the field of agriculture?",
            answer: "Farmers need technology for agriculture because it helps them work more efficiently and produce better crops. Technologies like drones, GPS, and sensors can provide valuable data on soil moisture, crop health, and pest infestations, allowing farmers to make informed decisions and optimize their farming practices. Additionally, machinery like tractors and harvesters equipped with advanced technology can save time and labor, making farming more productive and sustainable",
        },
      
    ];

    return (
        <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4 ">
            <h1 className="text-center dark:text-white lg:text-4xl  text-3xl lg:leading-9 font-bold leading-7 text-green-900   pb-8">FAQ's</h1>

            {/* FAQ sections */}
            <div className="lg:w-8/12 w-full mx-auto grid gap-6">
                {/* Render each FAQ section */}
                {faqs.map((faq, index) => (
                    <div key={index} className="w-full">
                        <div className="flex justify-between items-center w-full bg-green-900 rounded-lg p-4">
                            <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-white">
                                <span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-white p-3">Q{index + 1}.</span> {faq.question}
                            </p>
                            <button aria-label="toggler"  onClick={() => toggleAccordion(index)}>
                                <img  className={`bg-white rounded-full transform ${openIndex === index ? '' : 'rotate-180'} dark:hidden `} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg" alt="toggler" />
                                <img className={`bg-white transform ${openIndex === index ? '' : 'rotate-180'} dark:block hidden `} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg" alt="toggler" />
                            </button>
                        </div>
                        <div className={`mt-2 w-full bg-green-100  rounded-lg p-4 ${openIndex === index ? '' : 'hidden'}`}>
                            <p className="text-base leading-6 text-green-900 dark:text-gray-300 font-normal">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
