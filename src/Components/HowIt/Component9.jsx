import React from "react";

function Component9() {
  return (
    <div className="bg-blue-500 flex flex-col md:flex-row p-10 justify-center text-white text-sm gap-10 md:gap-40">
      <div className="text-start">
        <p className="text-lg md:text-2xl font-semibold pb-5 text-start">Change insurance for good</p>
        <p className="text-start">
          Join the team that is making health insurance simple, transparent, and
          human.
        </p>
      </div>
      <div className="flex flex-row gap-5 text-xs md:text-lg text-center font-semibold">
        <div className="p-3 md:pt-5 md:pl-10 md:pr-10 w-1/2 md:w-auto rounded-xl bg-white text-blue-600">
            Become a Partner
        </div>
        <div className="p-3 md:pt-5 md:pl-5 md:pr-5 rounded-xl w-1/2 md:w-auto border-2 border-white text-white">
          Get a free quote
        </div>
      </div>
    </div>
  );
}

export default Component9;