import React from 'react';
import PropTypes from 'prop-types';
import './cta.css';

const Cta = () => (
  <section className='xl:flex bg-white relative' >


  <div className='md:my-28 mt-28 w-3/4 mx-auto relative'>
    <h3 className="text-4xl leading-none max-w-lg font-extrabold">Join hundreds of brands already growing with Aisle</h3>
    <button type="button" className="text-white bg-[#4e32fb] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-extrabold rounded-full text-lg px-8 py-5 mt-8">Request Demo</button>
    <p className='my-6 max-w-md'>Are you a consumer? View our <a className="underline text-blue-700" href="#">Offers Page</a> to discover brands near you</p>
  </div>

  <div className='absolute top-0 left-0 bottom-0 right-0 hidden xl:block ' style={{ backgroundImage: "url(https://assets-global.website-files.com/6491847bf90579dea25936ea/6491c71cb98f72a30f05e0bb_Landing%20Shot%20%282%29.png)", backgroundPosition: "50%", backgroundSize: "auto 100%", backgroundRepeat: "no-repeat" }}></div>
  <img className='block md:hidden' src='https://assets-global.website-files.com/6491847bf90579dea25936ea/6491c8f406eac5e719d5eb88_Landing%20Shot%20Mobile%20(2)-p-800.png' alt=""></img>
</section>
);

Cta.propTypes = {};

Cta.defaultProps = {};

export default Cta;
