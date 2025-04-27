import React from 'react'
import Link from 'next/link'
import { FaSquareWebAwesome } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="pt-24 pb-10 bg-blue-100">
      <div className="w-[80%] mx-auto items-start grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* 1st part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            About Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Careers
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blogs
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Gift Cards
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Magazine
          </p>
        </div>

        {/* 2nd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Support</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Contact
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Leagal Notice
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Privacy Policy
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Terms & Conditions
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            site Maps
          </p>
        </div>

        {/* 3rd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Discover</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Destinations
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Travel Guides
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Travel Stories
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Travel Tips
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950">
            Travel Insurance
          </p>
        </div>

        {/* 4th part */}
        <div>
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Our Mobile number</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              +94 71 48 22 623
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Our Email</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              chamathupeka@gmail.com
            </h1>
          </div>
        </div>
      </div>
      {/* end */}
      <div className='mt-8 w-[80%] mx-auto border-t-2 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
        <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <span>Spcial: </span>
            <Link href="#"><FaSquareWebAwesome/></Link>
        </div>
      </div>
    </div>
  );
}

export default Footer