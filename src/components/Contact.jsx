import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function Contact(props) {
  return (
    <div
      id="contact"
      className=" bg-purple-100  w-full pt-10 pb-28  sm:py-5 overflow-y-hidden"
    >
      <h1 className=" sm:hidden text-center font-black  text-2xl sm:text-4xl mb-5 sm:mb-9">
        Contact Me
      </h1>
      <div className="  flex justify-center items-center flex-row sm:flex-col mb-5 sm:mb-0 gap-7 sm:fixed bottom-0 left-6">
        <a href="mailto:aungmyintko96@gmail.com" target={"_blank"}>
          <MdEmail
            color={"black"}
            className="hover:fill-violet-900 duration-100"
          />
        </a>
        <a href="https://www.facebook.com/aung.m.anarmala" target={"_blank"}>
          <BsFacebook
            color={"black"}
            className="hover:fill-violet-900 duration-100"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/aung-myint-ko-1872b0241/"
          target={"_blank"}
        >
          <BsLinkedin
            color={"black"}
            className="hover:fill-violet-900 duration-100"
          />
        </a>
        <a href="https://github.com/aung-myint-ko" target={"_blank"}>
          <BsGithub
            color={"black"}
            className="hover:fill-violet-900 duration-100"
          />
        </a>
        <div className=" hidden sm:block bg_purple w-1 h-28"></div>
      </div>
      <h5 className="text-lg font-semibold text-center font-sans">
        Created by Lucifer 96
      </h5>
      <p className="text-sm text-center text-gray-500 font-sans">Thank You</p>
    </div>
  );
}

export default Contact;
