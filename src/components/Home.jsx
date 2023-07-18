import React from "react";
import { Link } from "react-scroll";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Home() {
  return (
    <div
      id="home"
      className=" bg-slate-50 min-h-[760px] lg:min-h-[542px] px-4 sm:px-16 md:px-24 pt-[40px] pb-[90px] lg:py-0 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:items-center overflow-hidden "
    >
      <div className=" max-w-xs lg:max-w-sm h-[300] mx-auto z-10">
        <LazyLoadImage
          className="vector w-full h-full  "
          src="/images/vector2.png"
          alt=""
        />
      </div>
      <div className="pt-5">
        <p className="mb-2 sm:mb-5 purple text-2xl sm:text-3xl font-black  ">
          Hello, I'm
        </p>
        <h1 className=" mb-2 sm:mb-5 text-4xl sm:text-5xl font-extrabold">
          Aung Myint Ko
        </h1>
        <p className=" mb-7 sm:mb-8 text-lg sm:text-2xl ">
          Frontend Web Developer, <br /> Based in Myanmar
        </p>
        <div>
          <Link
            to="about"
            spy={true}
            offset={-20}
            className="button hidden sm:inline-block"
          >
            Read More
          </Link>
          <Link
            to="about"
            spy={true}
            offset={-73}
            className="button sm:hidden "
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
