import React, { useState } from 'react';

export default function Contract() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className={`py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 ${expanded ? 'lg:grid-cols-1' : ''} transition-all duration-500 ease-in-out`}>
                    <div className="font-light text-green-600 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-green-900 dark:text-white text-center"> Contract Farming</h2>
                        <p className="mb-4">
                        Contract farming is a mutually beneficial arrangement between farmers and agribusiness companies. In this system, farmers agree to produce crops or livestock according to the specifications of the contracting company. The company typically provides farmers with necessary resources such as seeds, fertilizers, and technical support, while guaranteeing a market for the produced goods at a predetermined price. This model offers farmers financial stability, access to modern technologies, and reduced market risks. However, concerns regarding pricing fairness, power imbalances, and dependency on corporate entities have been raised, necessitating transparent and equitable contract farming agreements.                        </p>
                        <p className={`mb-4 ${expanded ? 'hidden' : ''}`}>
                        The company typically provides farmers with necessary resources such as seeds, fertilizers, and technical support, while guaranteeing a market for the produced goods at a predetermined price. This                             <button onClick={toggleExpand} className= "text-white rounded-lg m-1 p-1 bg-green-900 hover:bg-green-950 focus:outline-none">View More</button>
                        </p>
                        <p className={`${expanded ? '' : 'hidden'}`}>
                        The company typically provides farmers with necessary resources such as seeds, fertilizers, and technical support, while guaranteeing a market for the produced goods at a predetermined price. This model offers farmers financial stability, access to modern technologies, and reduced market risks. However, concerns regarding pricing fairness, power imbalances, and dependency on corporate entities have been raised, necessitating transparent and equitable contract farming agreements.                            <button onClick={toggleExpand} className="text-white rounded-lg m-1 p-1 bg-green-900 hover:bg-green-950 focus:outline-none">View Less</button>
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4  mt-8">
                        <img className="w-full rounded-lg image-hover transition-transform duration-300 transform hover:scale-150 hover:shadow-xl	" src="cf1.jpg" alt="office content 1" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg image-hover transition-transform duration-300 transform hover:scale-105" src="cf2.jpg" alt="office content 2" />
                        <img className="w-full rounded-lg image-hover transition-transform duration-300 transform hover:scale-150 hover:shadow-xl	" src="cf3.jpg" alt="office content 1" />
                        <img className="w-full rounded-lg image-hover transition-transform duration-300 transform hover:scale-150 hover:shadow-xl	" src="cf4.jpg" alt="office content 1" />


                    </div>
                </div>
            </section>
        </div>
    );
}
