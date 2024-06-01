import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
    return (
        <div
            className="bg-cover bg-no-repeat bg-center backdrop-blur-md"
            style={{
                backgroundImage: `url('webimages/login2.jpg')`,
            }}
        >
            <section className=" dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                    </div>
                    <div className="w-full opacity-90 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 bg-opacity-80">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white dark:text-white">Confirm password</label>
                                    <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-white dark:text-gray-300">I accept the <div className="font-medium text-gray-200 hover:underline dark:text-primary-500" >Terms and Conditions</div></label>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="text-center text-white bg-green-900 hover:bg-white hover:text-green-900  focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-2xl px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <Link to='/login' className="text-xl font-light text-white dark:text-gray-400">
                                    Already have an account? <div  className="font-large text-white  hover:bg-white hover:text-green-900  rounded-lg p-1 dark:text-primary-500">Login here</div>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
