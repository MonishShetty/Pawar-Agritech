import React from 'react'

export default function Content() {
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div class="font-light text-green-900 sm:text-lg dark:text-gray-400">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-green-900 dark:text-white">Welcome to Pawar Agritech</h2>
                        <p class="mb-4">At Pawar Agritech, we are deeply proud to present top-tier products that reflect our unwavering dedication to excellence and customer delight. Our commitment shines through in the quality of every item we offer, serving as a testament to our relentless pursuit of perfection.</p>
                        <p> With us, satisfaction isn't just a goal; it's a promise upheld with every product, ensuring that our customers receive nothing but the best.</p>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <img class="w-full rounded-lg" src="c1.jpg" alt="office content 1" />
                        <img class="mt-4 w-full lg:mt-10 rounded-lg" src="c2.jpg" alt="office content 2" />
                    </div>
                </div>
            </section>
        </div>
    )
}
