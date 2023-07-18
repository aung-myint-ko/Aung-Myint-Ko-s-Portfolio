import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FcGraduationCap } from "react-icons/fc";
import { IoCalendar } from "react-icons/io5";

export function EduCard({ title, category, duration, img }) {
  return (
    <div className="w-full h-fit py-4 px-4 md:px-6 bg-purple-100 border rounded-lg shadow-md transition hover:-translate-y-2 hover:shadow-xl ease-in duration-200 ">
      <h1 className=" mb-2 text-lg sm:text-xl font-semibold text-black">
        {title}
      </h1>

      <div className="flex justify-between items-center">
        <div className=" flex flex-col gap-y-2 ">
          <h3 className="sm:text-lg flex items-center opacity-90">
            <FcGraduationCap size={19} className="mr-3 opacity-70" />
            {category}
          </h3>
          <p className="sm:text-lg flex items-center opacity-90">
            <IoCalendar size={19} className="mr-3 opacity-70" />
            {duration}
          </p>
        </div>
        <LazyLoadImage
          className=" max-w-[70px] sm:max-w-[95px] ml-auto "
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}

export function ProjectCard({ id, img, title, desc, icons, url }) {
  return (
    <div className=" project_card grid grid-cols-1 md:grid-cols-2">
      <div className=" rounded-md flex items-center justify-center min-h-[200px] md:min-h-[300px] ">
        <LazyLoadImage
          src={img}
          alt={title}
          className=" w-full max-w-md h-full md:h-[80%] bg-purple-100 "
        />
      </div>
      <div className="p-4 bg-purple-100 md:bg-transparent shadow md:shadow-none rounded-md md:rounded-none md:flex md:flex-col md:justify-center ">
        <h1 className="text-center md:text-left text-lg md:text-2xl font-semibold mb-2">
          {title}
        </h1>
        <p className=" tracking-wide leading-relaxed text-xs md:text-sm mb-1 md:mb-2 ">
          {desc}
        </p>
        <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row">
          <ul className=" gap-x-2 my-1 flex items-center w-full h-10 justify-center md:justify-start  ">
            {icons.map((icon) => {
              return (
                <li key={id} className=" w-fit h-5/6 overflow-hidden">
                  <LazyLoadImage className=" w-full h-full" src={icon} alt="" />
                </li>
              );
            })}
          </ul>
          <div>
            <a
              className=" mx-auto md:mx-0 flex justify-center items-center w-20 h-8 md:w-20 md:h-10 md:text-sm lg:text-base bg-blue-700 hover:bg-blue-600 text-white rounded"
              href={url}
              rel="noreferrer"
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
