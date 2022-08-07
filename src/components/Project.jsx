import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import { ProjectCard } from "./Card";

const ProjectsData = [
  {
    id: 1,
    image: "/images/project1.png",
    title: "Tan Tock Seng Hospital",
    icons: ["/images/react.png", "/images/tailwindcss.png"],
    url: "https://tan-tock-seng-hospital.vercel.app/",
  },
  {
    id: 2,
    image: "/images/project2.png",
    title: "CrossFit Club Gym",
    icons: [
      "/images/html-5.png",
      "/images/css.png",
      "/images/bootstrap.png",
      "/images/javascript.png",
      "/images/jquery.png",
    ],
    url: "https://crossfitclub.netlify.app/",
  },
  {
    id: 3,
    image: "/images/project3.png",
    title: "Artisan Bakery",
    icons: [
      "/images/html-5.png",
      "/images/css.png",
      "/images/bootstrap.png",
      "/images/javascript.png",
      "/images/jquery.png",
    ],
    url: "https://artisan-bakery.netlify.app/",
  },
  {
    id: 4,
    image: "/images/project4.png",
    title: "Los Pollos Fast Food",
    icons: [
      "/images/nextjs.png",
      "/images/sanity.png",
      "/images/tailwindcss.png",
      "/images/redux.jpeg",
    ],

    url: "https://los-pollos.vercel.app/",
  },
];

function Project(props) {
  return (
    <div id="projects" className="pb-16 sm:pb-36">
      <div className=" px-4 sm:px-16 md:px-24 overflow-y-hidden">
        <h1
          data-aos="fade-up"
          className="purple font-semibold text-3xl lg:text-4xl mb-2 sm:mb-4"
        >
          Projects
        </h1>
        <p
          data-aos="fade-up"
          className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6"
        >
          These are the projects that I built them on my own. UI/UX and web
          layout in these projects were <br /> inspired from some creators. I
          give credits to them all.
        </p>
      </div>
      <div data-aos="fade-up" className="px-0 sm:px-14 lg:px-24">
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
                <div className="mx-7 md:mx-10">
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    img={project.image}
                    icons={project.icons}
                    url={project.url}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Project;
