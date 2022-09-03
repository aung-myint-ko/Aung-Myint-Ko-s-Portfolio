import React from "react";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      id="home"
      className=" bg-slate-50 min-h-[760px] lg:min-h-[542px] px-4 sm:px-16 md:px-24 py-20 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-20 lg:items-center overflow-hidden "
    >
      <div className="max-w-xs lg:max-w-sm mx-auto z-10">
        <img
          className="vector w-full h-full  "
          src="/images/vector2.png"
          alt=""
        />
      </div>
      <div>
        <p
          data-aos="fade-up"
          className="mb-4 sm:mb-5 purple text-2xl sm:text-3xl font-black  "
        >
          Hello, I'm
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="50"
          className=" mb-5 text-4xl sm:text-5xl font-extrabold"
        >
          Aung Myint Ko
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mb-8 text-lg sm:text-2xl "
        >
          Frontend Web Developer, <br /> Based in Myanmar
        </p>
        <div data-aos="fade-up" data-aos-delay="150">
          <Link to="about" spy={true} offset={-73} className="button ">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
