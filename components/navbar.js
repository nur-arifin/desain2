import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full pt-4">
      <nav className="w-full bg-transparent flex items-center justify-between px-10 py-4 z-50 bg-[url('/assets/header/image.png')] bg-contain shadow-md border-b-[1px] border-t-[1px] border-black">
        <h2 className="flex items-center text-2xl font-semibold">
          <span className="text-green-500">
            <Image
              src="/assets/header/logo.svg"
              alt="Logo"
              width={24}
              height={24}
              className="mr-2"
            />
          </span>
          Positivus
        </h2>
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">
                use Cases
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">
                Blog
              </a>
            </li>
          </ul>
          <button className="px-4 py-2 border-[1px] border-black text-black font-semibold rounded-lg hover:bg-white transition duration-300">
            Request a quote
          </button>
        </div>
        <button
          className="md:hidden px-4 bg-white py-2 text-black font-semibold rounded-lg hover:bg-white transition duration-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RxCross1 size={24} /> : <CgMenuRight size={24} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="w-full bg-white shadow-md flex flex-col items-center p-4 md:hidden">
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">
                use Cases
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-500">
                Blog
              </a>
            </li>
          </ul>
          <button className="mt-2 px-4 py-2 border-[1px] border-black text-black font-semibold rounded-lg hover:bg-white hover:text-white transition duration-300">
            Request a quote
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
