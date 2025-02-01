import Image from "next/image";
import React from "react";

const partner = [
  {
    logo: "/assets/partners/amazon.svg",
  },
  {
    logo: "/assets/partners/dribble.svg",
  },
  {
    logo: "/assets/partners/hubspot.svg",
  },
  {
    logo: "/assets/partners/notion.svg",
  },
  {
    logo: "/assets/partners/netflix.svg",
  },
  {
    logo: "/assets/partners/zoom.svg",
  },
];
const Partners = () => {
  return (
    <section className="bg-accent py-8 px-10">
      <div className="flex flex-wrap justify-around items-center w-full gap-6">
        {partner.map((i, index) => (
          <Image
            height={120}
            width={120}
            key={index}
            src={`${i.logo}`}
            className="h-12 object-contain px-2"
          />
        ))}
      </div>
    </section>
  );
};

export default Partners;
