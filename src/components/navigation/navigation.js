import React from 'react';
import PropTypes from 'prop-types';
import './navigation.css';

const Navigation = () => (


<nav className="bg-white border-gray-200">
  <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-8">
    <a href="https://gotoaisle.com/" className="flex items-center rtl:space-x-reverse">
        <img src="https://assets-global.website-files.com/6491847bf90579dea25936ea/6542796bea9c8e640dfe1665_Aisle%20Logo%20Black.png" className="h-7 m-4" alt="Aisle Logo" />
        <span className="self-center text-2xl sr-only font-semibold whitespace-nowrap">Aisle</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
        <li>
          <a href="#" className="transition-all block py-2 px-3 text-black rounded md:bg-transparent md:p-0" aria-current="page">Our Features</a>
        </li>
        <li>
          <a href="#" className="transition-all block py-2 px-3 text-black rounded md:hover:bg-transparent md:border-0 md:hover:opacity-70 md:p-0">Our Solutions</a>
        </li>
        <li>
          <a href="#" className="transition-all block py-2 px-3 text-black rounded md:hover:bg-transparent md:border-0 md:hover:opacity-70 md:p-0 ">Offers Page</a>
        </li>
        <li>
        <a href="#" className="transition-all block py-2 px-3 text-black rounded md:hover:bg-transparent md:border-0 md:hover:opacity-70 md:p-0 ">Get Support</a>
        </li>
        <li>
        <a href="#" className="transition-all block text-white bg-[#4e32fb] p-4 font-bold hover:bg-[#0616a7]  md:border-0 rounded-full">Request Demo</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
