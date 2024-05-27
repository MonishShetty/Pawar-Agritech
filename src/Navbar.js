import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // State variables to track whether the dropdown menus are open
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [marketplaceDropdownOpen, setMarketplaceDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // New state for mobile menu

  // Function to toggle the Service dropdown menu
  const toggleServiceDropdown = () => {
    setServiceDropdownOpen(!serviceDropdownOpen);
    // Close the Marketplace dropdown if open
    if (marketplaceDropdownOpen) {
      setMarketplaceDropdownOpen(false);
    }
  };

  // Function to toggle the Marketplace dropdown menu
  const toggleMarketplaceDropdown = () => {
    setMarketplaceDropdownOpen(!marketplaceDropdownOpen);
    // Close the Service dropdown if open
    if (serviceDropdownOpen) {
      setServiceDropdownOpen(false);
    }
  };

  // Function to close the Service dropdown
  const closeServiceDropdown = () => {
    setServiceDropdownOpen(false);
  };

  // Function to close the Marketplace dropdown
  const closeMarketplaceDropdown = () => {
    setMarketplaceDropdownOpen(false);
  };

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-green-100 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="logo.png" className="h-15 w-24 rounded-full" alt="Logo" />
          </div>
          <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <Link to='/login' className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                Login
            </Link>
            <Link to='/signup' className="text-white bg-green-900 hover:bg-green-950 focus:ring-4 focus:ring-green-900 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-green-900 dark:hover:bg-green-900 focus:outline-none dark:focus:ring-green-950">
                Sign up
            </Link>
            <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu" aria-expanded={mobileMenuOpen}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div id="mega-menu" className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${mobileMenuOpen ? '' : 'hidden'}`}>
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <Link to="/" className="block py-2 px-3 text-green-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:p-0 dark:text-green-900 md:dark:hover:text-green-900 dark:hover:bg-gray-700 dark:hover:text-green-900 md:dark:hover:bg-transparent dark:border-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <button id="mega-menu-dropdown-button" onClick={toggleServiceDropdown} className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:p-0 dark:text-white md:dark:hover:text-green-900 dark:hover:bg-gray-700 dark:hover:text-green-900 md:dark:hover:bg-transparent dark:border-gray-700">
                  Service <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                  </svg>
                </button>
                <div id="mega-menu-dropdown" className={`absolute z-50 grid w-80 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:w-auto md:grid-cols-3 dark:bg-gray-700 ${serviceDropdownOpen ? '' : 'hidden'}`}>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                      <li>
                        <Link onClick={closeServiceDropdown} className="text-gray-500 dark:text-gray-400 hover:text-green-900 dark:hover:text-green-900" to="/contractfarming">
                          Contract Farming
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeServiceDropdown} to='/watersolutions' className="text-gray-500 dark:text-gray-400 hover:text-green-900 dark:hover:text-green-900">
                          Water Solutions
                        </Link>
                      </li>
                      <li>
                        <Link onClick={closeServiceDropdown} className="text-gray-500 dark:text-gray-400 hover:text-green-900 dark:hover:text-green-900" to="/soiltesting">
                          Soil Testing
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link to='/team' className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:p-0 dark:text-white md:dark:hover:text-green-900 dark:hover:bg-gray-700 dark:hover:text-green-900 md:dark:hover:bg-transparent dark:border-gray-700">
                  Team
                </Link>
              </li>
              <li>
                <button id="mega-menu-dropdown-button-marketplace" onClick={toggleMarketplaceDropdown} className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:p-0 dark:text-white md:dark:hover:text-green-900 dark:hover:bg-gray-700 dark:hover:text-green-900 md:dark:hover:bg-transparent dark:border-gray-700">
                  Marketplace <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
                  </svg>
                </button>
                <div id="mega-menu-dropdown-marketplace" className={`absolute z-50 grid w-80 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:w-auto md:grid-cols-3 dark:bg-gray-700 ${marketplaceDropdownOpen ? '' : 'hidden'}`}>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button-marketplace">
                      <li>
                        <Link to='farmer' onClick={closeMarketplaceDropdown} className="text-gray-500 dark:text-gray-400 hover:text-green-900 dark:hover:text-green-900">
                          Farmers
                        </Link>
                      </li>
                      <li>
                        <Link to='/buyer' onClick={closeMarketplaceDropdown} className="text-gray-500 dark:text-gray-400 hover:text-green-900 dark:hover:text-green-900">
                          Buyers
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-900 md:p-0 dark:text-white md:dark:hover:text-green-900 dark:hover:bg-gray-700 dark:hover:text-green-900 md:dark:hover:bg-transparent dark:border-gray-700" to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
