import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <section>
      <div className="container mx-auto flex flex-row items-center justify-around mt-6">
        <div>
          <h1 className="text-3xl font-bold text-black ">CareerHub</h1>
        </div>
        <div>
          <ul className="flex flex-row justify-center items-center gap-12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-normal cursor-pointer hover:border-b-2 border-[#9873ff] ${
                  isActive ? "text-[#9873ff]" : ""
                }`
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to="/applied-jobs"
              className={({ isActive }) =>
                `font-normal cursor-pointer hover:border-b-2 border-[#9873ff] ${
                  isActive ? "text-[#9873ff]" : ""
                }`
              }
            >
              Applied Jobs
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `font-normal cursor-pointer hover:border-b-2 border-[#9873ff] ${
                  isActive ? "text-[#9873ff]" : ""
                }`
              }
            >
              Blog
            </NavLink>
          </ul>
        </div>
        <div>
          <button className="btn px-6 font-bold text-white rounded-lg bg-gradient-to-r from-[#7e90fe] to-[#9873ff]">
            Start Applying
          </button>
        </div>
      </div>
    </section>
  );
}
