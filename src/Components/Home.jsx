import React from "react";
import logo from "/assets/images/user.png";

export default function () {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mt-12 man p-5 sm:p-0">
        {/* Title part */}
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-6xl font-bold lg:leading-[70px]">
            One Step
            <br /> Closer To Your
            <br />
            <span className="bg-gradient-to-r from-[#7e90fe] to-[#9873ff] bg-clip-text text-transparent">
              Dream Job
            </span>
          </h1>

          <p className="mt-6 text-[12px] md:text-[16px] font-normal text-gray-500">
            Explore thousands of job opportunities with all the<br></br>{" "}
            information you need. Its your future. Come find it. Manage all
            <br></br> your job application from start to finish.
          </p>
          <button className="btn border-none rounded-[8px] bg-gradient-to-r from-[#7e90fe] to-[#9873ff] font-bold text-white mt-6">
            Get Started
          </button>
        </div>
        {/* img part */}
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
    </section>
  );
}
