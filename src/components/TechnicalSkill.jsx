import React from "react";
import Marquee from "react-fast-marquee";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Javascript from "../assets/javascript.png";
import ReactJs from "../assets/react.png";
import Redux from "../assets/redux.png";
import Tailwind from "../assets/tailwindcss.png";
import Node from "../assets/nodeJs.png";
import Express from "../assets/express.png";
import Mongodb from "../assets/mongodb.png";
import TypeScript from "../assets/typescript.png";
import NextJs from "../assets/nextjs.png";
import Bootstrap from "../assets/bootstrap.png";
import Figma from "../assets/figma.png";
import Git from "../assets/git.png";

const skillsImage = [
  { id: 3, image: Javascript, title: "Javascript" },
  { id: 1, image: ReactJs, title: "React" },
  { id: 2, image: Redux, title: "Redux" },
  { id: 4, image: NextJs, title: "Nextjs" },
  { id: 6, image: Node, title: "Nodejs" },
  { id: 7, image: Express, title: "Express" },
  { id: 8, image: Mongodb, title: "Mongodb" },
  { id: 12, image: TypeScript, title: "Typescript" },
  { id: 9, image: Bootstrap, title: "Bootstrap" },
  { id: 10, image: Tailwind, title: "Tailwindcss" },
  { id: 11, image: Figma, title: "Figma" },
  { id: 13, image: Git, title: "Git" },
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
              className=" w-12 sm:w-16 hover:-translate-y-2 transition ease-in duration-200 mx-5 "
            >
              <LazyLoadImage
                className="w-fit "
                effect="black-and-white"
                src={img.image}
                alt={img.title}
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default TechnicalSkill;
