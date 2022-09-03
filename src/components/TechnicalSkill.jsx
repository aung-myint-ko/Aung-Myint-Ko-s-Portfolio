import React from "react";
import Marquee from "react-fast-marquee";

const skillsImage = [
  { id: 3, image: "/images/javascript.png", title: "Javascript" },
  { id: 1, image: "/images/react.png", title: "React" },
  { id: 2, image: "/images/redux.png", title: "Redux" },
  { id: 4, image: "/images/nextjs.png", title: "Nextjs" },
  { id: 6, image: "/images/nodeJs.png", title: "Nodejs" },
  { id: 7, image: "/images/express.png", title: "Express" },
  { id: 8, image: "/images/mongodb.png", title: "Mongodb" },
  { id: 5, image: "/images/jquery.png", title: "Jquery" },
  { id: 12, image: "/images/typescript.png", title: "Typescript" },
  { id: 9, image: "/images/bootstrap.png", title: "Bootstrap" },
  { id: 10, image: "/images/tailwindcss.png", title: "Tailwindcss" },
  { id: 11, image: "/images/figma.png", title: "Figma" },
  { id: 13, image: "/images/git.png", title: "Git" },
];

function TechnicalSkill() {
  return (
    <div className=" px-4 sm:px-14 lg:px-24 py-8 sm:pt-20 sm:pb-10 z-0">
      <h1 class="purple text-center font-black  text-2xl sm:text-4xl mb-5 sm:mb-9">
        Technical Skills
      </h1>
      <Marquee
        data-aos="fade-up"
        speed={80}
        gradientWidth={50}
        pauseOnHover={true}
        className=" w-full h-20 sm:h-24 "
      >
        {skillsImage.map((img) => {
          return (
            <div
              key={img.id}
              className=" w-12 sm:w-16  flex items-center  hover:-translate-y-2 transition ease-in duration-200 mx-5 "
            >
              <img className=" w-full" src={img.image} alt="" />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default TechnicalSkill;
