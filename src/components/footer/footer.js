import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

const Footer = () => (


<footer class="bg-black shadow">
    <div class="w-full max-w-screen-xl mx-auto pt-24 px-4 pb-12">
        <div class="lg:flex sm:items-center sm:justify-between">
            <a href="https://gotoaisle.com/" class="flex items-center mb-4 space-x-3 justify-center md:justify-start rtl:space-x-reverse">
                <img src="https://assets-global.website-files.com/6491847bf90579dea25936ea/6542796bdd234bf751acd2d6_Aisle%20Logo%20White.png" class="h-8" alt="Aisle Logo" />
                <span class="self-center text-2xl sr-only font-semibold whitespace-nowrap">Aisle</span>
            </a>
            <ul className="font-medium flex items-center text-white flex-col flex-wrap lg:flex-nowrap p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li>
          <a href="#" className="transition-all block py-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">Our Features</a>
        </li>
        <li>
          <a href="#" className="transition-all block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:opacity-70 md:p-0">Our Solutions</a>
        </li>
        <li>
          <a href="#" className="transition-all block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:opacity-70 md:p-0 ">Offers Page</a>
        </li>
        <li>
          <a href="#" className="transition-all block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:opacity-70 md:p-0 ">ROI Calculator</a>
        </li>
        <li>
        <a href="mailto:support@gotoaisle.com?subject='Hey Aisle! I need some help.'" className="transition-all block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:opacity-70 md:p-0 ">Get Support</a>
        </li>
   
        <li>
        <a href="#" className="transition-all block text-white bg-[#4e32fb] p-4 font-bold hover:bg-[#0616a7]  md:border-0 rounded-full">Request Demo</a>
        </li>
      </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span class="inline text-sm text-white">© 2023 <a href="https://gotoaisle.com/" class="hover:underline">Aisle, Inc</a>.</span>
        <span class="text-sm text-white ml-4"><a href="#" class="hover:underline">Terms of Use</a></span>
        <span class="text-sm text-white ml-4"><a href="#" class="hover:underline">Privacy Policy</a></span>

    </div>
</footer>


);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
