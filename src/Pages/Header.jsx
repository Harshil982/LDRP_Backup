import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div>
        <nav
          className="flex flex-col bg-gradient-primary text-white  
          sm:flex sm:flex-row sm:items-center sm:justify-between 
          md:items-center md:justify-between
          lg:items-center lg:justify-between
          "
        >
          <div className="flex h-28 w-full items-center justify-between px-6 lg:h-36 lg:pb-10 xl:h-40 xl:pb-10 2xl:h-56">
            {/* Logo Section */}
            <div className="w-36 h-16 lg:w-44 lg:h-16 2xl:w-60">
              <img src={require("../img/LDRP.png")} alt="LDRP" />
            </div>
            {/* End */}
            {/* Hamburger Menu */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="outline-none sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden"
            >
              <MenuOutlined className="text-xl text-white" />
            </button>
            {/* End */}
          </div>
          {/* Menu link */}
          <div
            className={
              showMenu
                ? "px-2 pb-5 pt-2 -mt-5 flex flex-row justify-between items-center mx-3"
                : "hidden sm:block lg:pb-10 xl:pb-10"
            }
          >
            {/* First Nav */}
            <div>
              <ul
                className="text-left sm:flex sm:items-center 
              sm:text-sm sm:mr-4 
              md:text-sm md:mr-4
              lg:text-lg lg:mr-8
              2xl:text-2xl"
              >
                <li className=" flex flex-col sm:mx-2 lg:mx-4">
                  <a href="#">Administration</a>
                  <span className="italic text-xs lg:text-sm 2xl:text-xl">
                    who are we ?
                  </span>
                </li>
                <li className="flex flex-col sm:mx-2 lg:mx-4">
                  <a href="#">Syllabus</a>
                  <span className="italic text-xs lg:text-sm 2xl:text-xl">
                    Curriculum
                  </span>
                </li>
                <li className="flex flex-col sm:mx-2 lg:mx-4">
                  <a href="#">Department</a>
                  <span className="italic text-xs lg:text-sm 2xl:text-xl">
                    Learn more...
                  </span>
                </li>
                <li className="flex flex-col sm:mx-2 lg:mx-4">
                  <a href="#">Activities</a>
                  <span className="italic text-xs lg:text-sm 2xl:text-xl">
                    Explore...
                  </span>
                </li>
              </ul>
            </div>
            {/* End */}
            {/* Second Nav */}
            <div className="sm:hidden">
              <ul className="text-right">
                <li>
                  <a href="#">Student Corner</a>
                </li>
                <li>
                  <a href="#">About LDRP</a>
                </li>
                <li>
                  <a href="#">About SVKM</a>
                </li>
                <li>
                  <a href="#">Placement</a>
                </li>
                <li>
                  <a href="#">NCC</a>
                </li>
                <li>
                  <a href="#">NSS</a>
                </li>
                <li>
                  <a href="#">Sports</a>
                </li>
                <li>
                  <a href="#">Green KSV</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
            {/* End */}
          </div>
          {/* End */}
        </nav>
        {/* Second Nav */}
        <div
          className="hidden sm:flex sm:bg-gradient-secondary sm:w-[97%] sm:h-8 sm:shadow-3xl sm:rounded-full sm:items-center sm:justify-center sm:mx-auto sm:relative sm:-top-6 sm:text-[0.6rem]
        md:w-[97%] md:h-8 md:text-[0.75rem] md:-top-4 
        lg:w-[95%] lg:text-[0.95rem] lg:h-10 lg:-top-6
        xl:w-[90%] xl:text-lg xl:h-11 xl:-top-7
        2xl:text-2xl 2xl:w-[95%]
        "
        >
          <ul className="flex text-white items-center">
            <li className="mx-2 lg:mx-3">
              <a href="#">Student Corner</a>
            </li>
            <li className="mx-2 lg:mx-3">
              <a href="#">About LDRP</a>
            </li>
            <li className="mx-2 lg:mx-3">
              <a href="#">About SVKM</a>
            </li>
            <li className="mx-2 lg:mx-3">
              <a href="#">Placement</a>
            </li>
            <li className="mx-2 lg:mx-3">
              <a href="#">NCC</a>
            </li>
            <li className="mx-2 lg:mx-3">
              <a href="#">NSS</a>
            </li>
            <li className="mx-2 lg:mx-3">
              <a href="#">Sports</a>
            </li>
            <li className="mx-2 lg:mx-3">
              <a href="#">Green KSV</a>
            </li>
            <li className="mx-2 lg:mx-3">
              <a href="#">Contact Us</a>
            </li>
            <li className="mx-2 lg:mx-3">
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        {/* End */}
      </div>
    </>
  );
};

export default Header;
