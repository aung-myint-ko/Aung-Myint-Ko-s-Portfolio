import React, { useState } from "react";
import { Link, animateScroll as Scroll } from "react-scroll";

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
          <img src="/images/Logo.png" alt="" />
        </div>

        <ul className="navs p-4 shadow sm:static sm:w-fit sm:flex sm:shadow-none z-10">
          <Link
            className="mb-2 sm:mb-0 sm:ml-5 md:ml-8 sm:text-xl nav_links"
            to="home"
            spy={true}
            offset={-100}
          >
            Home
          </Link>
          <Link
            className="mb-2 sm:mb-0 sm:ml-5 md:ml-8 sm:text-xl nav_links"
            to="about"
            spy={true}
            offset={-100}
          >
            About
          </Link>
          <Link
            className="mb-2 sm:mb-0 sm:ml-5 md:ml-8 sm:text-xl nav_links"
            to="skills"
            spy={true}
            offset={-100}
          >
            Skills
          </Link>
          <Link
            className="mb-2 sm:mb-0 sm:ml-5 md:ml-8 sm:text-xl nav_links"
            to="projects"
            spy={true}
            offset={-100}
          >
            Projects
          </Link>
          <Link
            className="mb-2 sm:mb-0 sm:ml-5 md:ml-8 sm:text-xl nav_links"
            to="contact"
            spy={true}
            offset={-80}
          >
            Contact
          </Link>
        </ul>
      </div>

      <div className=" sm:hidden">
        <div
          id="nav"
          className="px-4 py-2 border-b cursor-pointer"
          onClick={HandleClick}
        >
          <img className="w-14 h-14 " src="/images/Logo.png" alt="" />
        </div>
        <ul className=" p-2 shadow border-t fixed bottom-3 left-1/2 -translate-x-1/2 w-5/6 bg-purple-50 rounded-md z-50 grid grid-cols-5">
          <li className="flex justify-center link">
            <Link to="nav" spy={true} offset={0}>
              <i class="uil uil-estate text-xl"></i>
            </Link>
          </li>
          <li className="flex justify-center link">
            <Link to="about" spy={true} offset={-80}>
              <i class="uil uil-user-circle text-xl"></i>
            </Link>
          </li>
          <li className="flex justify-center link">
            <Link to="skills" spy={true} offset={-20}>
              <i class="uil uil-lightbulb-alt text-xl"></i>
            </Link>
          </li>
          <li className="flex justify-center link">
            <Link to="projects" spy={true} offset={-20}>
              <i class="uil uil-browser text-xl"></i>
            </Link>
          </li>
          <li className="flex justify-center link">
            <Link to="contact" spy={true} offset={0}>
              <i class="uil uil-message text-xl"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
