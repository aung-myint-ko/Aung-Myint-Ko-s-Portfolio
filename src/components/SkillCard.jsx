import React from "react";

function SkillCard({ img, name }) {
  return (
    <div className="skillcard w-full h-14 sm:h-16 rounded gap-x-2 sm:gap-x-0 ">
      <div className="img">
        <img className="w-full h-full sm:w-4/5 sm:mx-auto" src={img} alt="" />
      </div>
      <div className=" w-3/5 ">
        <p className="w-fit mx-auto">{name}</p>
      </div>
    </div>
  );
}

export default SkillCard;
