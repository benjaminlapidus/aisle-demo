
import React from 'react';
import PropTypes from 'prop-types';
import './how-it-works.css';

const HowItWorks = () => (
  <section className="bg-gradient-to-t from-[#fdf3fe] to-white py-32">
    <div className='max-w-screen-lg px-8 mx-auto relative'>
      <h3 className='text-4xl text-center font-extrabold mb-24'>Here's how it works in the aisle</h3>

      {/* card 1 */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 my-20">
        <img className="" alt="" src="https://assets-global.website-files.com/6491847bf90579dea25936ea/649aef29385ced3b33108889_Customer%20Shot%201.png"></img>
        <div className="items-center flex">
          <div>
            <h4 className='text-3xl font-extrabold mb-4'>Your future customer buys your product in-store or online</h4>
            <p className='text-lg'>This could be at your local Walmart or it could be using Instacart or an online retailer</p>
          </div>
        </div>
      </div>

      {/* card 2 */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 my-20">
        <div className="items-center flex order-last md:order-first">
          <div>
            <h4 className='text-3xl font-extrabold mb-4'>Your future customer takes a picture of their receipt</h4>
            <p className='text-lg'>There is no app to download, no friction. Just a single text, as if they're talking with a friend</p>
          </div>
        </div>
        <img className="" alt="" src="https://assets-global.website-files.com/6491847bf90579dea25936ea/649aef2a7cf9fc9b062425be_Customer%20Shot%202.png"></img>
      </div>

      {/* card 3 */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 my-20">
        <img className="" alt="" src="https://assets-global.website-files.com/6491847bf90579dea25936ea/649aef6b2bc678f835da1a28_Customer%20Shot%203.png"></img>
        <div className="items-center flex">
          <div>
            <h4 className='text-3xl font-extrabold mb-4'>Your future customer is rewarded within 24 hours</h4>
            <p className='text-lg'>This can be via Venmo or PayPal. We can also do free merch from your website!</p>
          </div>
        </div>
      </div>

      <button type="button" className="text-[#811bdd] hover:text-purple-900 block bg-transparent border-2 border-solid border-[#811bdd] focus:ring-4 focus:ring-blue-300 font-extrabold text-center rounded-full text-lg px-8 py-4 mt-12 mx-auto">Check out our solutions</button>



      <img className="w-52 absolute -bottom-[10%] lg:-bottom-[15%] right-0" src="https://assets-global.website-files.com/6491847bf90579dea25936ea/6492f300facf45d0ac7e5d60_Emoji%20Love%20(1)-p-500.png"></img>
    </div>
  </section>
);

HowItWorks.propTypes = {};

HowItWorks.defaultProps = {};

export default HowItWorks;
