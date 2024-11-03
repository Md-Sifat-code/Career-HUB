import React from "react";
import Hire from "./Hire";

export default function Featured({ hire }) {
  return (
    <section>
      <div className="container mx-auto mt-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">Featured Jobs</h1>
          <p className="mt-6 text-gray-400 text-center">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mt-6">
          {hire.map((company) => (
            <Hire key={company.id} hires={company}></Hire>
          ))}
        </div>
      </div>
    </section>
  );
}
