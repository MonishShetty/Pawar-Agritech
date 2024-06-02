import React from 'react';

export default function Team() {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-green-900">Our Team</h2>
                        <p className="font-light text-green-900 lg:mb-16 sm:text-xl dark:text-gray-400">
                            Elevating Agriculture: Meet Our Dedicated Agritech Team Transforming Farming Through Innovation
                        </p>
                    </div>
                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

                        <div className="items-center bg-green-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <div >
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="team/vishal.jpeg" alt="Vishal" />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-green-900 dark:text-white">
                                    <div >Vishal Pawar</div>
                                </h3>
                                <span className="text-green-900 dark:text-gray-400">CEO</span>
                                <p className="mt-3 mb-4 font-light text-green-900 dark:text-gray-400">
                                    Vishal leads the overall vision and strategic direction of the company, ensuring sustainable growth and operational excellence.
                                </p>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="https://www.linkedin.com/in/vishal-pawar-agritech/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-green-900 hover:text-green-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.994 17.006h-2.81v-5.833c0-1.39-.028-3.178-1.937-3.178-1.938 0-2.236 1.514-2.236 3.074v5.937H8.202V8.994h2.698v1.77h.037c.378-.715 1.302-1.467 2.68-1.467 2.868 0 3.396 1.887 3.396 4.34v5.369zM5.349 7.764a1.654 1.654 0 01-1.648-1.649 1.654 1.654 0 011.648-1.649c.91 0 1.649.738 1.649 1.649 0 .91-.738 1.649-1.649 1.649zM6.752 19.006h-2.81V8.994h2.81v10.012zM12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="items-center bg-green-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <div>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="team/appu.jpeg" alt="Appu" />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-green-900 dark:text-white">
                                    <div >Appu Pawar</div>
                                </h3>
                                <span className="text-green-900 dark:text-gray-400">CMO</span>
                                <p className="mt-3 mb-4 font-light text-green-900 dark:text-gray-400">
                                    Appu spearheads the marketing strategy, enhancing brand visibility and driving customer engagement across all channels.
                                </p>
                                <ul className="flex space-x-4 sm:mt-0">
                                    {/* Social media icons can be added here */}
                                </ul>
                            </div>
                        </div>

                        <div className="items-center bg-green-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <div >
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="team/moni.jpg" alt="Monish" />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-green-900 dark:text-white">
                                    <div>Monish H Shetty</div>
                                </h3>
                                <span className="text-green-900 dark:text-gray-400">Web Developer</span>
                                <p className="mt-3 mb-4 font-light text-green-900 dark:text-gray-400">
                                    Monish suggests the technical strategy of the Vishal Agritech platform.
                                </p>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="https://www.linkedin.com/in/monish-h-shetty-258928252/" className="text-green-900 hover:text-green-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.994 17.006h-2.81v-5.833c0-1.39-.028-3.178-1.937-3.178-1.938 0-2.236 1.514-2.236 3.074v5.937H8.202V8.994h2.698v1.77h.037c.378-.715 1.302-1.467 2.68-1.467 2.868 0 3.396 1.887 3.396 4.34v5.369zM5.349 7.764a1.654 1.654 0 01-1.648-1.649 1.654 1.654 0 011.648-1.649c.91 0 1.649.738 1.649 1.649 0 .91-.738 1.649-1.649 1.649zM6.752 19.006h-2.81V8.994h2.81v10.012zM12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/MonishShetty" className="text-green-900 hover:text-green-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026a9.56 9.56 0 012.501-.336c.849.004 1.704.115 2.502.336 1.909-1.296 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.847-2.339 4.694-4.565 4.942.359.31.679.921.679 1.855 0 1.338-.013 2.418-.013 2.747 0 .27.179.58.688.481C19.137 20.193 22 16.442 22 12.017 22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="items-center bg-green-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <div>
                                <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="team/manoj.jpg" alt="Shree" />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-green-900 dark:text-white">
                                    <div >Manoj Siddoji</div>
                                </h3>
                                <span className="text-green-900 dark:text-gray-400">Product Designer</span>
                                <p className="mt-3 mb-4 font-light text-green-900 dark:text-gray-400">
                                    Manoj crafts innovative and user-centric designs, enhancing the overall user experience and aesthetic of the product.
                                </p>
                                <ul className="flex space-x-4 sm:mt-0">
                                    <li>
                                        <a href="https://www.linkedin.com/in/manoj-siddoji-9b837b205/" className="text-green-900 hover:text-green-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.994 17.006h-2.81v-5.833c0-1.39-.028-3.178-1.937-3.178-1.938 0-2.236 1.514-2.236 3.074v5.937H8.202V8.994h2.698v1.77h.037c.378-.715 1.302-1.467 2.68-1.467 2.868 0 3.396 1.887 3.396 4.34v5.369zM5.349 7.764a1.654 1.654 0 01-1.648-1.649 1.654 1.654 0 011.648-1.649c.91 0 1.649.738 1.649 1.649 0 .91-.738 1.649-1.649 1.649zM6.752 19.006h-2.81V8.994h2.81v10.012zM12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/manojsiddoji" className="text-green-900 hover:text-green-900 dark:hover:text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.026a9.56 9.56 0 012.501-.336c.849.004 1.704.115 2.502.336 1.909-1.296 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.7 1.028 1.595 1.028 2.688 0 3.847-2.339 4.694-4.565 4.942.359.31.679.921.679 1.855 0 1.338-.013 2.418-.013 2.747 0 .27.179.58.688.481C19.137 20.193 22 16.442 22 12.017 22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                                            </svg>
                                        </a>
                                    </li>                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
