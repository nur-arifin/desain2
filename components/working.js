import React, { useState } from "react";

const WorkingProcess = () => {
  const [activeStep, setActiveStep] = useState(1); // Default expanded step is 1

  const steps = [
    {
      id: 1,
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 2,
      title: "Research and Strategy Development",
      description:
        "We analyze your market and competitors to build a winning strategy tailored to your business needs.",
    },
    {
      id: 3,
      title: "Implementation",
      description:
        "We execute the planned strategies to meet your marketing and business goals.",
    },
    {
      id: 4,
      title: "Monitoring and Optimization",
      description:
        "We continuously monitor campaign performance and make data-driven adjustments.",
    },
    {
      id: 5,
      title: "Reporting and Communication",
      description:
        "We provide transparent reporting to keep you informed on the progress of our efforts.",
    },
    {
      id: 6,
      title: "Continual Improvement",
      description:
        "We refine strategies based on results to ensure sustained success over time.",
    },
  ];

  const toggleStep = (id) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <section className="py-16 px-6 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-start">
        <h2 className="text-3xl font-bold mb-8 bg-[#B9FF66] max-w-fit px-2">
          Our Working Process
        </h2>
      </div>

      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-5">
        <div className="w-full">
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`p-2 rounded-3xl shadow-lg border hover:border-b-4 border border-black hover:border-black transition-all duration-200 ${
                  activeStep === step.id &&
                  "bg-[#B9FF66] text-black border-gray-300"
                }`}
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => toggleStep(step.id)}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{`0${step.id}`}</span>
                    <span className="text-lg font-thin">{step.title}</span>
                  </div>
                  <span
                    className={`text-xl font-bold ${
                      activeStep === step.id
                        ? "text-black border border-black rounded-full px-2"
                        : "text-black border border-black rounded-full px-2"
                    }`}
                  >
                    {activeStep === step.id ? "−" : "+"}
                  </span>
                </button>
                {activeStep === step.id && (
                  <div className="px-6 pb-4">
                    <div className="my-4 h-[2px] border-t-1 bg-slate-950" />
                    <p className="text-sm">{step.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
