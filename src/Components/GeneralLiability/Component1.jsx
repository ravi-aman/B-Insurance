import React from "react";

function Component1() {
  return (
    <div className="bg-white">
      <div className="m-auto flex flex-col gap-10 md:gap-28 p-5 md:p-10 md:px-10">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-40">
          <div className="flex flex-col text-center md:text-left md:text-lg pl-0 md:pl-20">
            <span className="w-full font-semibold">
              Get instant travel insurance quotes
            </span>
            <span>from 20 of Canada's Top Insurers</span>
          </div>
          <div className="mt-5 md:mt-0">
            <img src="family1.png" alt="family1" className="h-16 md:h-20" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center py-10 mx-auto gap-20">
          <div className="text-lg text-center">
            <div className="text-2xl md:text-4xl font-semibold">Why Choose</div>
            <p className="text-base max-w-[47rem] mx-auto mt-5 font-normal">
            We help Canadian small business owners save time and money by providing
              <div>
                {" "}
                a convenient and affordable way to buy business insurance.
              </div>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap text-sm md:text-lg gap-10 justify-center">
            <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/4">
              <div className="text-lg md:text-2xl font-semibold md:mb-5">
              Convenience
              </div>
              <p>
              Purchase your insurance anytime, anywhere, with our easy-to-use online platform.
              </p>
              <div className="flex justify-end md:mt-[4.5rem]">
                <img src="/General/img1.png" alt="farmer" className="h-20" />
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/4">
              <div className="text-lg md:text-2xl font-semibold md:mb-5">
              Cost
              </div>
              <p>
              Compare rates across leading insurance companies to ensure you get the best price on your premium.
              </p>
              <div className="flex justify-end md:mt-[2.8rem]">
                <img src="/General/img2.png" alt="farmer" className="h-20" />
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-sm p-5 text-start flex flex-col w-full sm:w-1/4">
              <div className="text-lg md:text-2xl font-semibold mb-5">Curation</div>
              <p>
              We use data and analytics to identify the right insurance policies for your business.
              </p>
              <div className="flex justify-end md:mt-[4.3rem]">
                <img src="/General/img3.png" alt="farmer" className="h-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component1;
