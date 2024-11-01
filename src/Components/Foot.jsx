import React from "react";

export default function Foot() {
  return (
    <section className="bg-black">
      <div className="container mx-auto bg-black">
        <div className="footer bg-black text-neutral-content p-10">
          <nav className="">
            <h1 className="text-3xl font-bold">CareerHub</h1>
            <p className="text-gray-400">
              There are many variations of passages of<br></br>Lorem Ipsum , but
              the majority have <br></br>suffered alteration in some form.
            </p>
            <div className="flex flex-row gap-6 mt-4">
              <i class="fa-brands fa-facebook text-[#9873ff] cursor-pointer "></i>
              <i class="fa-brands fa-x-twitter text-[#9873ff] cursor-pointer"></i>
              <i class="fa-brands fa-instagram text-[#9873ff] cursor-pointer"></i>
            </div>
          </nav>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </div>
    </section>
  );
}
