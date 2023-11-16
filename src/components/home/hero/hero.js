import React from 'react';
import PropTypes from 'prop-types';
import './hero.css';

const Hero = () => (
  <section className='flex justify-center bg-gradient-to-t from-[#fdf3fe] to-white'>
    <div className='text-center my-20 relative' style={{ backgroundImage: "url(https://assets-global.website-files.com/6491847bf90579dea25936ea/6491b337c556a9c134ed403d_Rocket.png)", backgroundPosition: "50% 100%", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
      <h2 className="text-[5.5rem] leading-none max-w-screen-xl font-extrabold">Turn any <span className="text-[#f65d98]">marketing channel</span> into an <span className="text-[#811bdd]">in-store purchase</span></h2>
      <p className='text-3xl text-gray-500 max-w-screen-lg mt-12 mx-auto'>Unleash the true power of your marketing channels with effortless in-store offers that rockets sales and strengthens brand loyalty</p>
      <button type="button" className="text-white bg-[#4e32fb] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-extrabold rounded-full text-lg px-8 py-5 mt-12">Request Demo For Your Brand</button>
      <p className='text-center my-6'>Are you a consumer? View our <a className="underline text-blue-700" href="#">Offers Page</a> to discover brands near you</p>
      <img class="w-52 absolute -bottom-[30%] left-0" src="https://assets-global.website-files.com/6491847bf90579dea25936ea/6491b83d820fab305299c9d3_Emoji-p-500.png"></img>
    </div>
  </section>
);

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
