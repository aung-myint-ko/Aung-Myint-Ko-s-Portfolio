import React from "react";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      id="home"
      className="home px-4 sm:px-16 md:px-24 pt-14 pb-20 sm:py-0 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:items-center "
    >
      <div data-aos="fade-up" className=" mb-9 lg:mb-0 -z-10">
        <img className="vector mx-auto " src="/images/vector.png" alt="" />
      </div>
      <div data-aos="fade-up">
        <p className="mb-1 md:mb-2 purple text-2xl sm:text-4xl font-semibold ">
          Hello,
        </p>
        <h1 className=" mb-2 md:mb-3 text-4xl sm:text-6xl font-extrabold">
          I'm Aung Myint Ko
        </h1>
        <p className="mb-2 md:mb-3 text-xl sm:text-3xl ">
          Frontend Web Developer, <br /> Based in Myanmar
        </p>
        <Link to="about" className="button ">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Home;
