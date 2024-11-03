import React from "react";

export default function Jobs({ jobs }) {
  const { logo, category_name, availability } = jobs;
  return (
    <div className="border p-14 flex flex-col justify-center items-start bg-[#f9f8ff] cursor-pointer  transform transition-transform duration-200 hover:scale-105">
      <img className="p-4 bg-[#edeeff] w-[80px] h-[80px]" src={logo} alt="" />
      <h1 className="mt-8 font-bold text-xl">{category_name}</h1>
      <p>{availability}</p>
    </div>
  );
}
