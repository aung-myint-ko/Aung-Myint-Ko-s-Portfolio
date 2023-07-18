import React from "react";
import { EduCard } from "./Card";

function Qualification(props) {
  return (
    <div className=" px-4 sm:px-16 md:px-24 py-8 sm:pt-20 sm:pb-10 overflow-y-hidden">
      <h1 className="purple text-center sm:text-start font-black  text-2xl sm:text-4xl mb-5 sm:mb-9">
        Education
      </h1>
      <div className=" gap-y-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
        <div>
          <EduCard
            title={"University of Computer Studies, Yangon"}
            category={"Computer Science"}
            duration={`2019 - (currently stop)`}
            img={"/images/ucsy.png"}
          />
        </div>
        <div>
          <EduCard
            title={"Youth Carrier Institute"}
            category={"Frontend Web Development"}
            duration={`Sept, 2021 - Dec, 2021`}
            img={"/images/yci.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default Qualification;
