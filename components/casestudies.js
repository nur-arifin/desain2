import { LuArrowUpRight } from "react-icons/lu";
const CaseStudies = () => {
  return (
    <section className="py-5 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-start">
        <h2 className="text-3xl font-bold mb-8 bg-[#B9FF66] max-w-fit px-2">
          Case Studies
        </h2>
        <p className="mb-6 max-w-lg pl-4">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="mx-auto text-white">
        {/* Case Studies Cards */}
        <div className="flex flex-col md:flex-row bg-[#191A23] rounded-3xl">
          <div className="p-10">
            <p className="text-md">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <a
              href="#"
              className="text-lime-400 flex items-center mt-4 font-medium"
            >
              Learn more
              <LuArrowUpRight size={24} color="#B9FF66" />
            </a>
          </div>

          <div className="md:my-8 w-1 bg-[#FFFFFF]"></div>

          <div className="p-10">
            <p className="text-md">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first-page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <a
              href="#"
              className="text-lime-400 flex items-center mt-4 font-medium"
            >
              Learn more
            <LuArrowUpRight size={24} color="#B9FF66" />
            </a>
          </div>

          <div className="md:my-6 w-1 bg-[#FFFFFF]"></div>

          <div className="p-12">
            <p className="text-md">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <a
              href="#"
              className="text-lime-400 flex items-center mt-4 font-medium"
            >
              Learn more
              <LuArrowUpRight size={24} color="#B9FF66" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
