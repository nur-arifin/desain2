import Image from "next/image";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const cards = [
  {
    title1: "Search engine",
    title2: "optimization",
    color: "bg-gray-100",
    colorIcon: "bg-black text-white",
    highlight: "bg-lime-400",
    img: "/assets/services/tokyo-magnifier.svg"
  },
  {
    title1: "Pay-per-click",
    title2: "advertising",
    color: "bg-lime-400",
    colorIcon: "bg-black text-white",
    highlight: "bg-black text-white",
    img: "/assets/services/tokyo-selecting.svg"
  },
  {
    title1: "Social Media",
    title2: "Marketing",
    color: "bg-black text-white",
    colorIcon: "bg-white text-black",
    highlight: "bg-white text-black",
    textColor: "text-white",
    img: "/assets/services/tokyo-browser.svg"
  },
  {
    title1: "Email",
    title2: "Marketing",
    color: "bg-gray-100",
    colorIcon: "bg-black text-white",
    highlight: "bg-lime-400",
    img: "/assets/services/tokyo-sending.svg"
  },
  {
    title1: "Content",
    title2: "Creation",
    color: "bg-lime-400",
    colorIcon: "bg-black text-white",
    highlight: "bg-black text-white",
    img: "/assets/services/tokyo-many.svg"
  },
  {
    title1: "Analytics and",
    title2: "Tracking",
    color: "bg-black text-white",
    colorIcon: "bg-white text-black",
    highlight: "bg-lime-400",
    textColor: "text-white",
    img: "/assets/services/tokyo-volumetric.svg"
  },
];

const Card = ({
  title1,
  title2,
  color,
  colorIcon,
  highlight,
  textColor,
  img,
}) => {
  return (
    <div className="my-4 px-2">
      <div
        className={`p-8 rounded-3xl shadow-md ${color} flex flex-row hover:scale-105 hover:border-b-[13px] border border-black hover:border-black transition-all duration-200`}
      >
        <div className="flex flex-col">
          <div className="flex flex-col text-3xl w-[231px] h-[170px]">
            <span className={`py-1 rounded-md ${highlight} inline-block w-fit`}>
              {title1}
            </span>
            <span
              className={`px-2 py-1 rounded-md ${highlight} inline-block w-fit`}
            >
              {title2}
            </span>
          </div>
          <div>
            <button className="flex items-center space-x-2 text-black font-medium">
              <span className={`text-lg ${colorIcon} rounded-full`}>
                <LuArrowUpRight size={24} color="#B9FF66" />
              </span>
              <span className={`text-md ${textColor}`}>Learn more</span>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full max-sm:hidden">
          <Image
            width={200}
            height={200}
            src={`${img}`}
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCards = () => {
  return (
    <section className="py-16 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-start">
        <h2 className="text-3xl font-bold mb-8 bg-[#B9FF66] max-w-fit px-2">
          Services
        </h2>
        <p className="mb-6 max-w-lg pl-4">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* <div className="flex flex-wrap gap-4 justify-center p-6"> */}
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
        {/* </div> */}
      </div>
    </section>
  );
};

export default ServiceCards;
