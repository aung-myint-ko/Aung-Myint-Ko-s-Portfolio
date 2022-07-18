import React from "react";
import Circle from "./Circle";
import SkillCard from "./SkillCard";

const mainSkillsImage = [
  { id: 1, image: "/images/reactjs.png" },
  { id: 2, image: "/images/redux.jpeg" },
  { id: 3, image: "/images/javascript.png" },
  { id: 4, image: "/images/nextjs.png" },
];
const skillsImage = [
  {
    id: 1,
    name: "HTML & CSS",
    image: "/images/html-css.jpg",
  },
  {
    id: 2,
    name: "Tailwind CSS",
    image: "/images/tailwindcss.png",
  },
  {
    id: 3,
    name: "Bootstrap",
    image: "/images/bootstrap.png",
  },
  {
    id: 4,
    name: "jQuery",
    image: "/images/jquery.png",
  },
  {
    id: 5,
    name: "Figma",
    image: "/images/figma.png",
  },
  {
    id: 6,
    name: "Typescript",
    image: "/images/typescript.png",
  },
];

function TechnicalSkill() {
  return (
    <div
      id="skills"
      className=" px-4 sm:px-14 lg:px-24 pb-10 sm:pb-28 z-0 overflow-y-hidden "
    >
      <h1
        data-aos="fade-up"
        class="purple text-center font-semibold text-3xl lg:text-4xl mb-5 sm:mb-9"
      >
        Technical Skills
      </h1>
      <div data-aos="fade-up" className=" grid grid-cols-4 mb-5 sm:mb-9 ">
        {mainSkillsImage.map((skill) => {
          return <Circle key={skill.id} img={skill.image} />;
        })}
      </div>
      <div
        data-aos="fade-up"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3  "
      >
        {skillsImage.map((skill) => {
          return (
            <SkillCard key={skill.id} img={skill.image} name={skill.name} />
          );
        })}
      </div>
    </div>
  );
}

export default TechnicalSkill;
