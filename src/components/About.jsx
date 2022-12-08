import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function About() {
  return (
    <div
      id="about"
      className="px-4 sm:px-16 md:px-24 pt-10 pb-8 sm:pt-20 sm:pb-10 overflow-hidden "
    >
      <h1 className="purple text-center font-black text-2xl sm:text-4xl mb-7 ">
        About Me
      </h1>
      <div className="  lg:flex lg:flex-row-reverse lg:items-center ">
        <div className=" w-4/5 md:w-3/6 overflow-hidden mx-auto lg:mx-0 mb-5 lg:mb-0">
          <LazyLoadImage
            data-aos="fade-left"
            className=" w-full h-full max-w-[280px] sm:max-w-xs mx-auto shadow-md rounded-md "
            src="/images/profile3.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-3/6">
          <div className="lg:w-5/6 lg:ml-auto">
            <p
              data-aos="fade-up"
              className="mb-2 sm:mb-3 text-sm sm:text-base leading-loose	"
            >
              My name is Aung Myint Ko (aka) Lucifer. I'm first year Computer
              Science student at University of Computer Studies, Yangon.
            </p>
            <p
              data-aos="fade-up"
              className="mb-2 sm:mb-3 text-sm sm:text-base leading-loose	 "
            >
              The journey of my Web development career have been started since
              COVID-19 pandemic started and it's been 2 years that I'm in this
              field.
            </p>
            <p
              data-aos="fade-up"
              className="mb-6 sm:mb-8 text-sm sm:text-base leading-loose	"
            >
              Currently, I'm doing React.js related web project and trying to
              become MERN stack developer.
            </p>
            <div data-aos="fade-up">
              <a
                href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:60e3fe8b-dd30-4f4b-b809-8fad29d1dbd9"
                target={"_blank"}
                className="button"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
