import React from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
function Contact() {
  return (
    <div
      id="contact"
      className=" bg-purple-100  w-full pt-10 pb-[98px]  sm:py-5 overflow-y-hidden"
    >
      <h1 className=" sm:hidden text-center font-black  text-2xl sm:text-4xl mb-5 sm:mb-9">
        Contact Me
      </h1>
      <div className="  flex justify-center items-center flex-row sm:flex-col mb-5 sm:mb-0 gap-7 sm:fixed bottom-0 left-5 md:left-[31px]">
        <a
          href="mailto:aungmyintko96@gmail.com"
          rel="noreferrer"
          target={"_blank"}
        >
          <IoMdMail
            color={"black"}
            className="hover:fill-violet-900 duration-100"
          />
        </a>
        <a
          href="https://www.facebook.com/aung.m.anarmala"
          rel="noreferrer"
          target={"_blank"}
        >
          <FaFacebook
            color={"black"}
            className="hover:fill-violet-900 duration-100"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/aung-myint-ko-1872b0241/"
          rel="noreferrer"
          target={"_blank"}
        >
          <FaLinkedin
            color={"black"}
            className="hover:fill-violet-900 duration-100"
          />
        </a>
        <a
          href="https://github.com/aung-myint-ko"
          rel="noreferrer"
          target={"_blank"}
        >
          <FaGithub
            color={"black"}
            className="hover:fill-violet-900 duration-100"
          />
        </a>
        <div className=" hidden sm:block bg_purple w-1 h-28"></div>
      </div>
      <h5 className="text-lg font-medium md:font-semibold text-gray-700 text-center  mb-1">
        Created by Lucifer 96
      </h5>
      <p className="text-sm text-center text-gray-500">Thank You</p>
    </div>
  );
}

export default Contact;
