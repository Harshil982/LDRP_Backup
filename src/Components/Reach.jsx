import React from "react";

const Reach = () => {
  return (
    <>
      <div className="mt-5">
        <div className="mb-5">
          <p className="text-2xl font-semibold">Reach Us</p>
        </div>
        <div>
          <ul>
            <li className="flex gap-x-3 items-center mb-4">
              <img
                src={require("../img/location.png")}
                alt=""
                className="w-4"
              />
              <p className="w-60 sm:w-60">
                LDRP Institute of Technology & Research, Near KH-5, Sector-15,
                Gandhinagar - 382015.
              </p>
            </li>
            <li className="flex gap-x-3 items-center mb-4">
              <img src={require("../img/email.png")} alt="" className="w-4" />
              <p>info@ldrp.ac.in</p>
            </li>
            <li className="flex gap-x-3 items-center mb-4">
              <img src={require("../img/call.png")} alt="" className="w-4" />
              <p>+ 91 - 079 - 23241492</p>
            </li>
            <li className="flex gap-x-3 items-center">
              <img src={require("../img/fax.png")} alt="" className="w-4" />
              <p>+ 91 - 079 - 23241493</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Reach;
