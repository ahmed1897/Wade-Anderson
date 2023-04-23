import React from "react";
import logo from "../Images/logo.PNG"; // Replace with the path to your logo image

function Navbar() {
  return (
    <nav className="flex items-center py-1 px-1 h-auto ">
      <div className="mr-2">
        <img src={logo} alt="Logo" />
      </div>

      <div className="flex flex-col text-center justify-center w-full mr-2">
        <h1 className="textblue text-5xl my-2 font-medium font-serif">
          Tucson Medical Therapy Services
        </h1>

        <hr className=" border-t-4 borderblue" />
        <h3 className="textgreen text-4xl">WADE ANDERSON, PT & ASSOCIATES</h3>
      </div>
    </nav>
  );
}

export default Navbar;
