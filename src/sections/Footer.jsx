import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import UpFooter from '../components/UpFooter'
import { Element } from 'react-scroll'

const Footer = () => {
  return (
    <section>
    <UpFooter/>
    <Element name={"About"}>
      <div className="container max-lg:px-4 px-30">
        <div className='py-20 px-8 bg-[#F0F0F0] w-full'>
            <div className='grid max-lg:grid-cols-2 grid-cols-5 gap-5'>
                <div className='max-lg:col-span-2 mb-5'>
                    <img src="/images/logo.png" alt="footer logo" className='mb-5 w-160 h-auto max-lg:w-60' />
                    <p className='mb-5 w-[248px] max-lg:w-full text-sm text-gray-700 leading-5'>We have clothes that suits your style and
                     which you’re proud to wear. From women to men.</p>
                     <div className='flex gap-3'>
                        <button className='p-2 rounded-full border border-gray-400 hover:bg-purple-950 hover:text-white transition-all duration-500 cursor-pointer'><FaTwitter/></button>
                        <button className='p-2 rounded-full border border-gray-400 hover:bg-purple-950 hover:text-white transition-all duration-500 cursor-pointer'><FaFacebook/></button>
                        <button className='p-2 rounded-full border border-gray-400 hover:bg-purple-950 hover:text-white transition-all duration-500 cursor-pointer'><FaInstagram/></button>
                        <button className='p-2 rounded-full border border-gray-400 hover:bg-purple-950 hover:text-white transition-all duration-500 cursor-pointer'><FaGithub/></button>
                     </div>
                </div>

                <div className='max-lg:col-span-1 mb-5 ml-20 max-lg:ml-0'>
                    <h3 className='uppercase mb-3 text-xl'>company</h3>
                    <ul>
                        <li className='text-md text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>About</li>
                        <li className='text-md text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>Features</li>
                        <li className='text-md text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>Works</li>
                        <li className='text-md text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>Career</li>
                    </ul>
                </div>
                <div className='max-lg:col-span-1 mb-5 ml-20 max-lg:ml-0'>
                    <h3 className='uppercase mb-3 text-xl'>help</h3>
                    <ul>
                        <li className='text-md text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>Customer Support</li>
                        <li className='text-md text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>Delivery Details</li>
                        <li className='text-[15px] text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>Terms & Conditions</li>
                        <li className='text-md text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>Privacy Policy</li>
                    </ul>
                </div>
                <div className='max-lg:col-span-1 mb-5 ml-20 max-lg:ml-0'>
                    <h3 className='uppercase mb-3 text-xl'>faq</h3>
                    <ul>
                        <li className='text-md text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>Account</li>
                        <li className='text-md text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>Manage Deliveries</li>
                        <li className='text-md text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>Orders</li>
                        <li className='text-md text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>Payment</li>
                    </ul>
                </div>
                <div className='max-lg:col-span-1 mb-5 ml-20 max-lg:ml-0'>
                    <h3 className='uppercase mb-3 text-xl'>resources</h3>
                    <ul>
                        <li className='text-md text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>Free eBook</li>
                        <li className='text-[14px] text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>Development Tutorial</li>
                        <li className='text-md text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>How to - Blog</li>
                        <li className='text-md text-gray-600 mb-3 hover:text-gray-800 cursor-pointer'>Youtube Playlist</li>
                    </ul>
                </div>
            </div>
            <hr className='text-gray-400 my-5' />
            <div className='flex justify-between items-center max-lg:flex-col'>
                <p className='text-medium text-gray-600'>Shop.co &copy; 2000-2023. All Rights Reserved</p>
                <div className='flex gap-3 flex-wrap'>
                    <img src="/images/visaCard.png" alt="visa card" className='cursor-pointer my-3' />
                    <img src="/images/masterCard.png" alt="visa card" className='cursor-pointer my-3' />
                    <img src="/images/payPol.png" alt="visa card" className='cursor-pointer my-3' />
                    <img src="/images/applePay.png" alt="visa card" className='cursor-pointer my-3' />
                    <img src="/images/googlePay.png" alt="visa card" className='cursor-pointer my-3' />
                </div>
            </div>
        </div>
      </div>
      </Element>
    </section>
  )
}

export default Footer
