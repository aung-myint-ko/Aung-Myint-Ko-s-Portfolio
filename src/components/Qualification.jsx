import React from "react";
import { EduCard } from "./Card";

function Qualification(props) {
  return (
    <div className=" px-4 sm:px-16 md:px-24 pb-10 sm:pb-20 overflow-y-hidden">
      <h1
        data-aos="fade-up"
        className="purple font-semibold text-3xl lg:text-4xl mb-3 sm:mb-4"
      >
        Education
      </h1>
      <div className=" md:grid md:grid-cols-2 md:gap-x-4">
        <div data-aos="fade-up" data-aos-delay="200">
          <EduCard
            title={"University of Computer Studies, Yangon"}
            category={"Computer Science"}
            duration={`2019 - (currently stop)`}
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <EduCard
            title={"YCI Institute"}
            category={"Frontend Web Development"}
            duration={`Sept, 2021 - Dec, 2021`}
          />
        </div>
      </div>
    </div>
  );
}

export default Qualification;
