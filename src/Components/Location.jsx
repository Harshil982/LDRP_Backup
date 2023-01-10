import React from "react";

const Location = () => {
  return (
    <>
      <div className="mt-5">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.103141503052!2d72.63654211507043!3d23.239333514023347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b933477ba9f%3A0xe440409e66bea08a!2sLDRP%20Institute%20of%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1670401335746!5m2!1sen!2sin"
            className="rounded-lg w-60"
          />
        </div>
        <div className="mt-4">
          <ul className="flex gap-x-6">
            <li>
              <a href="#">
                <img
                  src={require("../img/facebook.png")}
                  alt=""
                  className="w-8"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={require("../img/instagram.png")}
                  alt=""
                  className="w-8"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={require("../img/youtube.png")}
                  alt=""
                  className="w-8"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={require("../img/linkedin.png")}
                  alt=""
                  className="w-8"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Location;
