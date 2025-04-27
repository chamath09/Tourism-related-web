import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import SectionHeading from "../Helper/SectionHeading";

const ContactUs = () => {
  return (
    <div className="pt-28 pb-10 rounded-2xl ">
      <SectionHeading heading="Contact Us" />
      <div className="w-[80%] mx-auto h-auto shadow-lg bg-gray-100 rounded-2xl p-4 mt-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Contact Form Section */}
          <div className="flex-1 bg-white p-6 rounded-2xl shadow-md">
            {/* <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Get in Touch
            </h2> */}

            <form className="flex flex-col gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-400 text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-rose-600 text-white font-semibold py-2 rounded-md hover:bg-rose-700 transition text-sm"
              >
                Send Message
              </button>
            </form>

            {/* Social Media Links */}
            <div className="flex gap-3 items-center justify-center mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="flex-1 overflow-hidden rounded-2xl shadow-md h-[300px] mt-12">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=University%20of%20Sri%20Jayewardenepura&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
