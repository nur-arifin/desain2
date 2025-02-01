import Image from "next/image";
import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white max-w-[1000px]:w-full py-10 px-6 md:px-20 rounded-t-[4em] md:mx-20">
      <div className="container flex flex-col lg:flex-row justify-between items-center">
        <div className="pt-2">
          <h2 className="flex text-2xl font-bold">
            <span className="text-green-500">
              <Image
                src="/assets/footer/Icon.svg"
                alt="Logo"
                width={24}
                height={24}
                className="mr-2"
              />
            </span>
            Positivus
          </h2>
        </div>

        <div className="flex flex-row items-center justify-center mt-2">
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">
              About us
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Use Cases
            </a>
            <a href="#" className="hover:underline">
              Pricing
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
          </div>
        </div>

        <div className="flex space-x-6 text-white text-xl mt-2">
          <a
            href="javascript:;"
            class="p-2 rounded-full bg-white flex items-center border border-gray-300 justify-center transition-all 
            duration-500 hover:border-gray-100 hover:bg-white"
          >
            <FaLinkedin size={16} color="black" />
          </a>
          <a
            href="javascript:;"
            class="p-2 rounded-full bg-white flex items-center border border-gray-300 justify-center transition-all 
            duration-500 hover:border-gray-100 hover:bg-white"
          >
            <FaFacebook size={16} color="black" />
          </a>
          <a
            href="javascript:;"
            class="p-2 rounded-full bg-white flex items-center border border-gray-300 justify-center transition-all 
            duration-500 hover:border-gray-100 hover:bg-white"
          >
            <FaTwitter size={16} color="black" />
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-around text-left w-1/3">
          <p className="mt-4 px-2 py-1 w-fit bg-lime-400 text-black font-semibold rounded-xl">
            Contact us:
          </p>
          <p className="mt-2">Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
        </div>

        <div className="mt-10 ml-4">
          <div className="bg-gray-800 py-10 px-6 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between  items-center space-x-2">
              <input
                type="text"
                className="px-4 py-2 border border-gray-300 rounded-md flex-grow"
                placeholder="Email"
              />
              <button className="px-6 py-2 bg-[#B9FF66] text-black rounded-md hover:bg-lime-600 focus:outline-none">
                Subscribe to news
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-start items-center">
        <p className="text-gray-400 mr-4">
          &copy; 2023 Positivus. All Rights Reserved.
        </p>
        <a href="#" className="text-gray-400 hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
