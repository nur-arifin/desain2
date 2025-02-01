import Image from "next/image";
import React from "react";

const Banner1 = () => {
  return (
    <section className="py-5 px-6 lg:px-20">
      <div className="static bg-[#F3F3F3] p-6 rounded-3xl shadow-md flex items-center justify-between my-8">
        <div className="max-w-md p-4">
          <h2 className="text-3xl text-semibold mb-2">Let’s make things happen</h2>
          <p className="text-gray-600 mb-4">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-black text-white py-4 px-4 rounded-lg font-medium hover:bg-gray-800">
            Get your free proposal
          </button>
        </div>
        <div className="absolute right-4 w-full justify-end items-center max-md:hidden flex">
          <Image
            width={300}
            height={300}
            src="/assets/banner/banner.svg"
            alt="Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner1;
