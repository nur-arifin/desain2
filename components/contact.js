import Image from "next/image";
import React, { useState } from "react";

const ContactForm = () => {
  const [option, setOption] = useState("Say Hi");

  return (
    <section className="py-16 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-start">
        <h2 className="text-3xl font-bold mb-8 bg-[#B9FF66] max-w-fit px-2">
          Contact Us
        </h2>
        <p className="mb-6 max-w-lg pl-4">
          Connect with us: Let's discuss your digital marketing needs.
        </p>
      </div>

      <div className="flex w-full flex-row bg-[#F3F3F3] justify-between rounded-3xl shadow-lg">
        <div className="rounded-2xl p-8 max-w-xl w-full">
          {/* Radio Buttons */}
          <div className="flex items-center space-x-6 mb-6 ">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="contact-option"
                value="Say Hi"
                checked={option === "Say Hi"}
                onChange={(e) => setOption(e.target.value)}
                className="w-4 h-4 checked:bg-emerald-400 checked:hover:bg-emerald-400 checked:active:bg-emerald-400 checked:focus:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
              <span className="text-md font-medium text-black">Say Hi</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="contact-option"
                value="Get a Quote"
                checked={option === "Get a Quote"}
                onChange={(e) => setOption(e.target.value)}
                className="w4 h-4 checked:bg-emerald-400 checked:hover:bg-emerald-400 checked:active:bg-emerald-400 checked:focus:bg-emerald-400 focus:bg-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
              <span className="text-md font-medium text-black">
                Get a Quote
              </span>
            </label>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-lime-500 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <div className="h-full w-full items-center max-md:hidden flex">
            <Image
              width={250}
              height={250}
              src="/assets/contact/contact.png"
              alt="contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
