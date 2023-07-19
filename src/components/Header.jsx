import React from "react";
import { Link, animateScroll as Scroll } from "react-scroll";
import {
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../assets/logo.png";

function Header() {
  const HandleClick = () => {
    Scroll.scrollToTop({
      delay: 0,
      duration: 0,
    });
  };

  return (
    <>
      <div className=" hidden bg-white sticky top-0 px-4 sm:px-16 md:px-24 sm:h-20 sm:flex justify-between items-center border-b z-50">
        <div
          className="logo w-14 h-14 sm:w-16 sm:h-16 cursor-pointer"
          onClick={HandleClick}
        >
          <LazyLoadImage src={Logo} alt="logo" />
        </div>

        <ul className="navs p-4 shadow sm:static sm:w-fit sm:flex sm:shadow-none z-10">
          <Link
            className="mb-2 sm:mb-0 sm:ml-5 md:ml-8 sm:text-base sm:font-semibold nav_links"
            to="home"
            spy={true}
            offset={-80}
          >
            Home
          </Link>
          <Link
            className="mb-2 sm:mb-0 sm:ml-5 md:ml-8 sm:text-base sm:font-semibold nav_links"
            to="about"
            spy={true}
            offset={-20}
          >
            About
          </Link>
          <Link
            className="mb-2 sm:mb-0 sm:ml-5 md:ml-8 sm:text-base sm:font-semibold nav_links"
            to="skills"
            spy={true}
            offset={-20}
          >
            Skills
          </Link>
          <Link
            className="mb-2 sm:mb-0 sm:ml-5 md:ml-8 sm:text-base sm:font-semibold nav_links"
            to="projects"
            spy={true}
            offset={-20}
          >
            Projects
          </Link>
        </ul>
      </div>

      {/* mobile screen */}
      <div className=" sm:hidden sticky  top-0 left-0 z-50">
        <div
          id="nav"
          className="flex justify-between items-center bg-white px-4 py-2 border-b cursor-pointer"
          onClick={HandleClick}
        >
          <h1 className="text-3xl font-bold tracking-widest	">L96</h1>
          <LazyLoadImage className="w-14 h-14 " src={Logo} alt="logo" />
        </div>
        <ul className=" p-2 shadow border-t fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-purple-50 rounded-md z-50 grid grid-cols-3">
          <li className="flex justify-center link">
            <Link to="home" spy={true} offset={-73}>
              <HiOutlineHome size={25} className={"mx-auto"} />
              <p className="text-xs font-semibold text-center">Home</p>
            </Link>
          </li>
          <li className="flex justify-center link">
            <Link to="about" spy={true} offset={-73}>
              <HiOutlineUserCircle size={25} className={"mx-auto"} />
              <p className="text-xs font-semibold">About</p>
            </Link>
          </li>

          <li className="flex justify-center link">
            <Link to="projects" spy={true} offset={-73}>
              <HiOutlineViewGrid size={25} className={"mx-auto"} />
              <p className="text-xs font-semibold">Projects</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
