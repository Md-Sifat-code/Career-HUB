import React from "react";

export default function Hire({ hires }) {
  const {
    job_title,
    company_name,
    logo,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = hires;
  return (
    <div className="flex flex-col justify-start p-10 items-start border shadow-xl">
      <img className="w" src={logo} alt="" />
      <h1 className="mt-4 font-bold text-xl">{job_title}</h1>
      <p className="mt-4 font-normal text-gray-400">{company_name}</p>
      <div className="flex flex-row gap-6 mt-4 ">
        <button className="btn btn-sm text-[#9873ff] border-[#9873ff]">
          {remote_or_onsite}
        </button>
        <button className="btn btn-sm text-[#9873ff] border-[#9873ff]">
          {job_type}
        </button>
      </div>
      <div className="flex flex-row gap-6 mt-4">
        <p className="flex flex-row gap-2 items-center">
          <i class="fa-solid fa-location-dot text-[#9873ff]"></i>
          {location}
        </p>
        <p className="flex flex-row gap-2 items-center">
          <i class="fa-solid fa-coins text-[#9873ff]"></i>
          {salary}
        </p>
      </div>
    </div>
  );
}
