import React from "react";
import Jobs from "./jobs";

export default function ({ category }) {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">Job Category List</h1>
          <p className="mt-6 text-gray-400 text-center">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-around mt-6 gap-6 lg:gap-0">
          {category.map((jobs) => (
            <Jobs key={jobs.id} jobs={jobs}></Jobs>
          ))}
        </div>
      </div>
    </section>
  );
}
