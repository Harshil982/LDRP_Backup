import React from "react";
import Ldrp from "../Components/Ldrp";
import Reach from "../Components/Reach.jsx";
import Location from "../Components/Location";

const Footer = () => {
  return (
    <>
      <div
        className="bg-gradient-footer text-white py-24 w-full h-max px-5
      flex flex-col justify-center sm:items-center md:flex-row md:gap-x-5 lg:justify-between lg:px-10
      "
      >
        <Ldrp />
        <Reach />
        <Location />
      </div>
    </>
  );
};

export default Footer;
