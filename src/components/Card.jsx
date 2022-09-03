import React from "react";
import { FcGraduationCap } from "react-icons/fc";
import { IoCalendar } from "react-icons/io5";

export function EduCard({ title, category, duration, img }) {
  return (
    <div className="w-full h-fit py-3 px-4 md:px-10 bg-purple-100 border rounded-lg shadow-md transition hover:-translate-y-2 hover:shadow-xl ease-in duration-200 ">
      <h1 className=" mb-2 md:text-xl font-semibold text-black">{title}</h1>

      <div className="grid grid-cols-3 items-center">
        <div className=" col-span-2 flex flex-col gap-y-2 ">
          <h3 className="flex items-center">
            <FcGraduationCap size={19} className="mr-3 opacity-70" />
            {category}
          </h3>
          <p className="flex items-center text-sm opacity-90">
            <IoCalendar size={19} className="mr-3 opacity-70" />
            {duration}
          </p>
        </div>
        <img className="w-3/4 ml-auto " src={img} alt="" />
      </div>
    </div>
  );
}

export function ProjectCard({ id, img, title, desc, icons, url }) {
  return (
    <div className=" project_card overflow-hidden sm:grid sm:grid-cols-1 md:grid-cols-2">
      <div className=" rounded-md overflow-hidden flex items-center">
        <img data-aos="flip-left" src={img} alt="" />
      </div>
      <div className="p-4 bg-purple-100 sm:bg-transparent shadow sm:shadow-none rounded-b-md sm:flex sm:flex-col sm:justify-center ">
        <h1
          data-aos="fade-up"
          className="text-center sm:text-left text-lg sm:text-2xl font-semibold mb-2"
        >
          {title}
        </h1>
        <p
          data-aos="fade-up"
          className=" tracking-wide leading-relaxed text-xs sm:text-sm mb-1 sm:mb-2 "
        >
          {desc}
        </p>
        <div className="flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row">
          <ul
            data-aos="fade-up"
            className=" gap-x-2 my-1 flex items-center w-full h-10 justify-center sm:justify-start  "
          >
            {icons.map((icon) => {
              return (
                <li key={id} className=" w-fit h-5/6 overflow-hidden">
                  <img className=" w-full h-full" src={icon} alt="" />
                </li>
              );
            })}
          </ul>
          <div data-aos="fade-up">
            <a
              className=" mx-auto sm:mx-0 flex justify-center items-center w-20 h-8 sm:w-16 sm:h-7 lg:w-20 lg:h-10 sm:text-sm lg:text-base bg-blue-700 hover:bg-blue-600 text-white rounded"
              href={url}
              target={"_blank"}
            >
              See
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
