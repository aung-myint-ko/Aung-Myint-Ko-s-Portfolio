import React from "react";

function About() {
  return (
    <div
      id="about"
      className="about px-4 sm:px-16 md:px-24 pb-20 sm:pt-20 lg:flex lg:flex-row-reverse lg:items-center "
    >
      <div
        data-aos="fade-up"
        className="w-4/6 lg:w-3/6 overflow-hidden mx-auto lg:mx-0 mb-5 lg:mb-0"
      >
        <img
          className=" lg:w-96 lg:h-96 lg:mx-auto rounded-full border-2 "
          src="/images/profile2.jpg"
          alt=""
        />
      </div>
      <div data-aos="fade-up" className="lg:w-3/6">
        <div className="lg:w-5/6 lg:ml-auto">
          <h1
            data-aos="fade-up"
            className="purple font-semibold text-3xl lg:text-4xl mb-3"
          >
            About Me
          </h1>
          <p
            data-aos="fade-up"
            className="mb-1 text-sm sm:text-base lg:text-lg"
          >
            My name is Aung Myint Ko (aka) Lucifer. I'm first year Computer
            Science student at University of Computer Studies, Yangon.
          </p>
          <p
            data-aos="fade-up"
            className="mb-1 text-sm sm:text-base lg:text-lg"
          >
            The journey of my Web development career was started since COVID-19
            pandemic started and it's been 2 years that I'm in this field.
          </p>
          <p
            data-aos="fade-up"
            className="mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg"
          >
            Currently, I'm doing React.js related web project and trying to
            become MERN stack developer.
          </p>
          <a
            href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:93196cce-b721-4370-a63a-c0e35c338aa5"
            target={"_blank"}
            data-aos="fade-up"
            className="button"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
