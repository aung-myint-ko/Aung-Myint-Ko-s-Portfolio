import React from "react";

function Circle({ img }) {
  return (
    <div className=" outer relative mx-auto w-16 h-16 md:w-40 md:h-40 border  shadow-lg rounded-full flex justify-center items-center">
      <div className="inner relative w-14 h-14 md:w-32 md:h-32 border rounded-full overflow-hidden">
        <img className="w-full h-full" src={img} alt="" />
      </div>
      <svg className=" z-10">
        <circle className="circle1" cx="80" cy="80" r="70" />
        <circle className="circle2" cx="32" cy="32" r="29" />
      </svg>
    </div>
  );
}

export default Circle;
