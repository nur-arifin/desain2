import Image from "next/image";
import Navbar from "./navbar";
const Header = () => {

  return (
    <header className="w-full min-h-fit bg-gray-100 flex flex-col items-center justify-between mt-8 md:py-6">
      <div className="flex flex-row pl-4 md:pl-16">
        <div className="w-full md:w-[60%] lg:w-[40%] text-left p-4 md:px-16 flex flex-col justify-between">
          <p className="text-3xl md:text-5xl mt-2 font-semibold">
            Navigating the digital landscape for success
          </p>
          <button className="w-fit px-6 py-4 bg-black text-white hover:text-black font-semibold rounded-xl shadow-md hover:bg-white transition duration-300">
            Book a Consultation
          </button>
        </div>
        <div className="w-full md:w-[60%] flex justify-center mt-6 md:mt-0">
          <Image
            width={300}
            height={300}
            src="/assets/header/illustration.svg" // Ensure this path is correct in your public/assets folder
            alt="Header Image"
            className="w-full md:w-auto h-auto max-w-xs md:max-w-lg border-dashed border-2 border-gray-500"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
