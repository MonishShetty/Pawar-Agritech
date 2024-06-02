import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-green-100 rounded-lg shadow dark:bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="icon.png" className="h-8" alt="" />
            <span className="self-center text-2xl  text-green-900 font-semibold whitespace-nowrap dark:text-white">
              Pawar Agritech
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a className=" me-4 md:me-6" href="/">
                Home
              </a>
            </li>
            <Link to="/team" className=" me-4 md:me-6">
              Team
            </Link>
            <Link to="/contact" className=" me-4 md:me-6">
              Contact
            </Link>
          </ul>
        </div>
        <hr className="my-6  border-gray-900 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block  text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Pawar Agritech. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
