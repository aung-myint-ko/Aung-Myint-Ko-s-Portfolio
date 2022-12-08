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
    desc: `This is my first React website. In this website, I used Reactjs, TailwindCSS. For state management, contextAPI had been useen`,
    icons: ["/images/react.png", "/images/tailwindcss.png"],
    url: "https://tan-tock-seng-hospital.vercel.app/",
  },
  {
    id: 2,
    image: "/images/project2.png",
    title: "CrossFit Club Gym",
    desc: `This is the project that I used UI layout from Youtube and developed by myself. At that time, I was beginner stage so It was quite challenging to apply grid and animation. In this project, I used HTML, CSS, Vanilla Javascript and Bootstarp`,
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
    desc: `A bakery website develop with MERN stack. In there, you can see recipes and make order.`,
    icons: [
      "/images/react.png",
      "/images/express.png",
      "/images/mongodb.png",
      "/images/redux.png",
      "/images/tailwindcss.png",
    ],
    url: "https://artisan-bakery.vercel.app/",
  },
  {
    id: 4,
    image: "/images/project4.png",
    title: "Los Pollos Fast Food",
    desc: `A food ordering website develop with next.js. In this, you can order the food, increase and decrease food quantity as usual we do in ecommerce app. After add your food to the cart, click the "Pay Now" button to complete the payment process. Then customer info form will appear and type your name and some number in respective field.`,
    icons: [
      "/images/nextjs.png",
      "/images/sanity.png",
      "/images/tailwindcss.png",
      "/images/redux.png",
    ],

    url: "https://los-pollos.vercel.app/",
  },
];

function Project(props) {
  return (
    <div id="projects" className=" pt-8 sm:pt-20 pb-16 sm:pb-[120px]">
      <div className=" px-4 sm:px-16 md:px-24 overflow-y-hidden">
        <h1 className="purple font-black  text-2xl sm:text-4xl mb-5 sm:mb-9">
          Projects
        </h1>
        <p
          data-aos="fade-up"
          className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6"
        >
          These are the projects that I built them on my own. UI/UX and web
          layout in these projects were inspired from some creators. I give
          credits to them all.
        </p>
      </div>
      {/* slider for desktop views */}
      <div className="hidden sm:block px-0 sm:px-14 lg:px-24">
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
                <div className="mx-4 md:mx-10">
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    img={project.image}
                    icons={project.icons}
                    url={project.url}
                    desc={project.desc}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* for mobile views */}
      <div className=" flex flex-col gap-y-8 sm:hidden px-0 sm:px-14 lg:px-24">
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
