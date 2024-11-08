import React from "react";

function QuoteForm({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white h-[70vh] text-gray-600 rounded-3xl shadow-lg max-w-2xl w-full flex relative">
        <div className="p-10 w-[55%]">
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="font-semibold">Your Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="border-2 border-gray-300 rounded-full px-3 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Planning to buy</label>
              <select className="border-2 border-gray-300 rounded-full px-3 py-2">
                <option>1-2 Weeks</option>
                <option>2-4 Weeks</option>
                <option>1 Month</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Email address</label>
              <input
                type="email"
                placeholder="Email address"
                className="border-2 border-gray-300 rounded-full px-3 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">
                Contact number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                placeholder="+40 Contact number"
                className="border-2 border-gray-300 rounded-full px-3 py-2"
              />
            </div>
            <button className="w-full bg-cyan-400 text-white py-3 rounded-full mt-4">
              Get a Free Quote
            </button>
            <p className="text-sm text-start text-gray-500 mt-4">
            I agree to <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span> when 
            getting a free quote from 
            </p>
          </form>
        </div>
        
        <div className="hidden md:block">
          <img src="health.png" alt="health" className="h-[70vh] object-cover" />
        </div>
        <div className="absolute right-0">
        <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
          <img src="close.png" alt="close"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
