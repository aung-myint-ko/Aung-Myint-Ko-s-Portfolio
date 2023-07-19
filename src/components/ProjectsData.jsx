import Javascript from "../assets/javascript.png";
import ReactJs from "../assets/react.png";
import Redux from "../assets/redux.png";
import Tailwind from "../assets/tailwindcss.png";
import Html from "../assets/html-5.png";
import Css from "../assets/css.png";
import Express from "../assets/express.png";
import Mongodb from "../assets/mongodb.png";
import Jquery from "../assets/jquery.png";
import NextJs from "../assets/nextjs.png";
import Bootstrap from "../assets/bootstrap.png";
import Sanity from "../assets/sanity.png";
import Strapi from "../assets/strapi.png";

import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";
import Project5 from "../assets/project5.jpg";

const ProjectsData = [
  {
    id: 5,
    image: Project5,
    title: "Three AGR Bookstore",
    desc: `A fullstack bookstore website developed with next.js 13.`,
    icons: [NextJs, Strapi, Tailwind],

    url: "https://threeagrbookstore.vercel.app/",
  },
  {
    id: 1,
    image: Project1,
    title: "Tan Tock Seng Hospital",
    desc: `This is my first React website. In this website, I used Reactjs, TailwindCSS. For state management, contextAPI had been useen`,
    icons: [ReactJs, Tailwind],
    url: "https://tan-tock-seng-hospital.vercel.app/",
  },
  {
    id: 2,
    image: Project2,
    title: "CrossFit Club Gym",
    desc: `This is the project that I used UI layout from Youtube and developed by myself. At that time, I was beginner stage so It was quite challenging to apply grid and animation. In this project, I used HTML, CSS, Vanilla Javascript and Bootstarp`,
    icons: [Html, Css, Bootstrap, Javascript, Jquery],
    url: "https://crossfitclub.netlify.app/",
  },
  {
    id: 3,
    image: Project3,
    title: "Artisan Bakery",
    desc: `A bakery website develop with MERN stack. In there, you can see recipes and make order.`,
    icons: [ReactJs, Express, Mongodb, Redux, Tailwind],
    url: "https://artisanbakery.vercel.app/",
  },
  {
    id: 4,
    image: Project4,
    title: "Los Pollos Fast Food",
    desc: `A food ordering website develop with next.js. In this, you can order the food, increase and decrease food quantity as usual we do in ecommerce app.\n
      After add your food to the cart, click the "Pay Now" button to complete the payment process. Then customer info form will appear and type your name and some number in respective field.`,
    icons: [NextJs, Sanity, Tailwind, Redux],

    url: "https://los-pollos.vercel.app/",
  },
];
export default ProjectsData;
