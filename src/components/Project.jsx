import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import { ProjectCard } from "./Card";
import ProjectsData from "./ProjectsData";

function Project() {
  return (
    <div id="projects" className=" pt-8 sm:pt-20 pb-16 sm:pb-[120px]">
      <div className=" px-4 sm:px-16 md:px-24 overflow-y-hidden">
        <h1 className="purple font-black  text-2xl sm:text-4xl mb-5 sm:mb-9">
          Projects
        </h1>
        <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
          These are the projects that I built them on my own. Some parts of
          UI/UX and web layout in these projects were inspired from some
          creators. I give credits to them all.
        </p>
      </div>
      {/* slider for desktop views */}
      <div className="hidden md:block px-0 md:px-14 lg:px-24">
        <Swiper
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {ProjectsData.map((project) => {
            return (
              <SwiperSlide key={project.id}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  img={project.image}
                  icons={project.icons}
                  url={project.url}
                  desc={project.desc}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* for mobile views */}
      <div className=" flex flex-col gap-y-8 md:hidden px-0 sm:px-14">
        {ProjectsData.map((project) => {
          return (
            <div key={project.id} className="mx-4 md:mx-10">
              <ProjectCard
                id={project.id}
                title={project.title}
                img={project.image}
                icons={project.icons}
                url={project.url}
                desc={project.desc}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
