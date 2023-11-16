import React from 'react';
import PropTypes from 'prop-types';
import './brand-growth.css';

const BrandGrowth = () => (

  <section className="bg-[#1a0032] py-32">
    <div className='max-w-screen-lg mx-auto relative text-white  px-4 lg:px-0'>
      <h3 className='text-4xl text-center font-extrabold mb-24'>Here is how we help your brand grow</h3>

      {/* card 1 */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-24 my-20">
        <div className="items-center flex">
          <div>
            <img className="w-16 mb-4" src="https://assets-global.website-files.com/6491847bf90579dea25936ea/649ae7686989567edca9dca4_Benefit%20Icon%202.png" alt=""></img>
            <h4 className='text-3xl font-extrabold mb-4'>We maximize the marketing channels you already use</h4>
            <p className='text-lg'>Make 100% of your marketing activities attributable to an in-store purchase. Whether paid social, influencers, store locator widgets or in-store activations, see what moved the most units!</p>
          </div>
        </div>
        <div className='relative'>
          <div class="absolute bg-gradient-to-t from-[#1a0032] to-transparent top-0 left-0 right-0 bottom-0"></div>
          <img className="" alt="" src="https://assets-global.website-files.com/6491847bf90579dea25936ea/649af37977922d33f3edc1c3_Benefit%20Diagram%201-p-500.png"></img>
        </div>  </div>

      {/* card 2 */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-24 my-20">
        <div className="items-center flex">
          <div>
            <img className="w-16 mb-4" src="https://assets-global.website-files.com/6491847bf90579dea25936ea/649ae7686989567edca9dca4_Benefit%20Icon%202.png" alt=""></img>
            <h4 className='text-3xl font-extrabold mb-4'>Gain insights into your customers like never before</h4>
            <p className='text-lg'>Our reporting dashboard updates in real time, telling you exactly who your in-store shopper is, where they shop and what SKU they purchased</p>
          </div>
        </div>
        <div className='relative'>
          <div class="absolute bg-gradient-to-t from-[#1a0032] to-transparent top-0 left-0 right-0 bottom-0"></div>
          <img className="" alt="" src="https://assets-global.website-files.com/6491847bf90579dea25936ea/649af20d82adecd34ecdcedf_Benefit%20Diagram%202-p-500.png"></img>
        </div>
      </div>

      {/* card 3 */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-24 my-20">
        <div className="items-center flex">
          <div>
            <img className="w-16 mb-4" src="https://assets-global.website-files.com/6491847bf90579dea25936ea/649ae768a9f33317ca14d442_Benefit%20Icon%203.png" alt=""></img>
            <h4 className='text-3xl font-extrabold mb-4'>Strength brand loyalty and rocket customer retention</h4>
            <p className='text-lg'>This can be via Venmo or PayPal. We can also do free merch from your website!</p>
          </div>
        </div>
        <div className='relative'>
          <div class="absolute bg-gradient-to-t from-[#1a0032] to-transparent top-0 left-0 right-0 bottom-0"></div>
          <img className="" alt="" src="https://assets-global.website-files.com/6491847bf90579dea25936ea/649af20dd70c8d3b6050338c_Benefit%20Diagram%203-p-500.png"></img>
        </div>
      </div>
      <button type="button" className="text-[#1a0032] block bg-white border-2 border-solid focus:ring-4 focus:ring-blue-300 font-extrabold text-center rounded-full text-lg px-8 py-4 mt-12 mx-auto">Check out our features</button>
    </div>
  </section>
);

BrandGrowth.propTypes = {};

BrandGrowth.defaultProps = {};

export default BrandGrowth;
