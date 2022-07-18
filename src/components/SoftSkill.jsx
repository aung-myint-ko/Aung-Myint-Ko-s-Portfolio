import React from "react";
import Progress from "./Progress";

function SoftSkill(props) {
  return (
    <div className=" px-4 sm:px-16 md:px-24 pb-16 sm:pb-20 overflow-y-hidden ">
      <h1
        data-aos="fade-up"
        class="purple text-center font-semibold text-3xl lg:text-4xl mb-3 sm:mb-4"
      >
        Soft Skills
      </h1>
      <div className="md:grid md:grid-cols-2 md:gap-x-4">
        <div data-aos="fade-up" data-aos-delay="200">
          <Progress done={"65"} title={"Creativity"} />
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <Progress done={"80"} title={"Teamwork"} />
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <Progress done={"70"} title={"Time Management"} />
        </div>
        <div data-aos="fade-up" data-aos-delay="800">
          <Progress done={"90"} title={"Desire to Learn"} />
        </div>
      </div>
    </div>
  );
}

export default SoftSkill;
