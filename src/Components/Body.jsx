import React from "react";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="flex flex-col items-center justify-center h-auto">
      <div className="bg-white rounded-lg p-5 text-center sm:w-2/3 mt-4 sm:my-10">
        <div className="font-sans text-xl sm:text-2xl textblue">
          <div className="text-center mb-7">
            <h2>
              Tucson Medical Therapy Services provides therapy services to
            </h2>
            <h2>home health agencies as well as offering accessible and</h2>
            <h2>
              cost-effective physical therapy services to private pay clients.
            </h2>
          </div>
          <div className="mb-7">
            <h2>
              Our therapists partner with the patients to achieve their goals
            </h2>
            <h2>
              while providing outstanding care with respect and integrity.
            </h2>
          </div>
          <div className="mb-7">
            <h2>We offer creative solutions to assist patients to achieve</h2>
            <h2>
              their optimal level of well-being and functional independence.
            </h2>
          </div>
        </div>
        <div className="textgreenlink text-lg sm:text-xl font-sans mt-20 flex items-center justify-center flex-col">
          <p>Tel:520-833-3803 or 541-514-5369</p>
          <p>wade@tucsonmedtherapy.com</p>
        </div>

        <div className="mt-10 text-xl sm:text-xl">
          <Link
            to="/Body2"
            className="rounded-full p-3 buttongradient text-center text-white"
          >
            Handouts
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Body;
