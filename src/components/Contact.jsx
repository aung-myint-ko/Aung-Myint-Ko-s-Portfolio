import React from "react";

function Contact(props) {
  return (
    <div
      id="contact"
      className=" bg_purple w-full  pt-5 pb-16 sm:py-10 overflow-y-hidden"
    >
      <h1
        data-aos="fade-up"
        className="text-white text-center font-semibold text-3xl lg:text-4xl mb-2 sm-mb-4"
      >
        Contact
      </h1>
      <p
        data-aos="fade-up"
        className="text-center text-xs md:text-lg text-white mb-2 sm-mb-4"
      >
        <i className="fa-regular fa-envelope"></i> - aungmyintko96@gmail.com
      </p>
      <div data-aos="fade-up" className="text-white text-center mb-3">
        <a href="https://www.facebook.com/aung.m.anarmala">
          <i className="fa-brands fa-facebook-f mx-2 md:mx-4 icon"></i>
        </a>
        <a href="https://www.linkedin.com/in/aung-myint-ko-1872b0241/">
          <i className="fa-brands fa-linkedin-in mx-2 md:mx-4 icon"></i>
        </a>
        <a href="https://github.com/aung-myint-ko">
          <i className="fa-brands fa-github mx-2 md:mx-4 icon"></i>
        </a>
      </div>
      <p
        data-aos="fade-up"
        className="text-xs text-center text-gray-500 font-sans"
      >
        Thank You
      </p>
    </div>
  );
}

export default Contact;
