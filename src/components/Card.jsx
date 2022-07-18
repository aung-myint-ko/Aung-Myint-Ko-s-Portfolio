import React from "react";
import { Link } from "react-router-dom";

export function EduCard({ title, category, duration }) {
  return (
    <div className="w-full h-fit p-3 md:px-0 bg-purple-100 border rounded-lg shadow-md mt-3 md:mt-0 ">
      <div className=" md:w-11/12 md:mx-auto">
        <h1 className=" md:text-xl font-semibold text-black">{title}</h1>
        <h3>
          <i className="fa-solid fa-graduation-cap mr-1 opacity-70"></i>
          {category}
        </h3>
        <p className=" text-sm opacity-90">
          <i className="fa-regular fa-calendar-days mr-2 opacity-70"></i>
          {duration}
        </p>
      </div>
    </div>
  );
}

export function ProjectCard({ id, img, title, icons, url }) {
  return (
    <div className=" project_card overflow-hidden pb-5 sm:pb-7 sm:grid sm:grid-cols-2 sm:gap-x-10">
      <div className=" rounded-md overflow-hidden">
        <img src={img} alt="" />
      </div>
      <div className="p-2 bg-purple-100 sm:bg-transparent shadow sm:shadow-none rounded-b-md sm:flex sm:flex-col sm:justify-center ">
        <h1 className="text-center sm:text-left text-lg sm:text-2xl lg:text-4xl mb-1 lg:mb-2">
          {title}
        </h1>
        <ul className="flex justify-center sm:justify-start mb-2 lg:mb-3 ">
          {icons.map((icon) => {
            return (
              <li
                key={id}
                className=" w-6 h-6 sm:w-7 sm:h-7 mr-2 overflow-hidden"
              >
                <img className="w-fit h-fit" src={icon} alt="" />
              </li>
            );
          })}
        </ul>
        <button className=" mx-auto sm:mx-0 flex justify-center items-center w-20 h-8 sm:w-16 sm:h-7 lg:w-20 lg:h-10 sm:text-sm lg:text-base bg-blue-700 hover:bg-blue-600 text-white rounded">
          <a href={url} target={"_blank"}>
            See <i className="fa-regular fa-eye ml-1"></i>
          </a>
        </button>
      </div>
    </div>
  );
}
