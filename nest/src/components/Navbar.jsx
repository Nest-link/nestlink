import React from "react";

const Navbar = () => {
  return (
    <div
      className={`fixed top-0 w-full h-20 bg-[#38B6FF] place-content-center`}
    >
      <div className={`container mx-auto flex justify-between items-center `}>
        <div className={`h-14`}>
          <img
            src={`/logo/nestlink_logo_light.png`}
            className={`h-14 cursor-pointer`}
            alt={`Logo`}
          />
        </div>
        <div>Other Items</div>
      </div>
    </div>
  );
};

export default Navbar;
