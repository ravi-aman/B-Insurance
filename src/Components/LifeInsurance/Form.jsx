import React, { useState } from "react";

function Form() {
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [isQuoteSubmitted, setIsQuoteSubmitted] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);


  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const SUBMIT_FORM_ENDPOINT = import.meta.env.VITE_SUBMIT_FORM_ENDPOINT;

  console.log("API_BASE_URL", API_BASE_URL);
  console.log("SUBMIT_FORM_ENDPOINT", SUBMIT_FORM_ENDPOINT);

  const handleCloseForm = () => {
    setSelectedInsurance(null);
    setIsQuoteSubmitted(false);
    // setIsFormVisible(false);
  };

  const validateFormData = (formData) => {
    if (!formData.planningToBuy) return "Please select when you plan to buy.";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Please enter a valid email address.";
    if (!formData.name || formData.name.length < 2)
      return "Please enter a valid name (at least 2 characters).";
    if (!formData.contactNumber || !/^\d{10}$/.test(formData.contactNumber))
      return "Please enter a valid 10-digit contact number.";
    if (!formData.countryCode) return "Please select a country code.";
    return null;
  };

  // Form submission he
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.currentTarget.name.value.trim(),
      planningToBuy: event.currentTarget.week.value,
      email: event.currentTarget.email.value.trim(),
      contactNumber: event.currentTarget.number.value.trim(),
      countryCode: selectedCode,
    };

    const validationError = validateFormData(formData);
    if (validationError) {
      alert(validationError);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}${SUBMIT_FORM_ENDPOINT}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsQuoteSubmitted(true);
        alert("Form submitted successfully!");
        console.log("Form submitted successfully!");
      } else {
        alert(`Submission Error: ${result.message}`);
        console.error("Form submission failed:", result.message);
      }
    } catch (error) {
      alert(`Submission Error: ${error.message}`);
      console.error("Form submission error:", error);
    }
  };











  const [isOpen, setIsOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState("+40"); // Default selected code
  const countryCodes = [
    "+93", "+355", "+213", "+376", "+244", "+54", "+374", "+61", "+43", "+994",
    "+973", "+880", "+375", "+32", "+501", "+229", "+975", "+591", "+387", "+267",
    "+55", "+359", "+226", "+257", "+855", "+237", "+1", "+238", "+236", "+235",
    "+56", "+86", "+57", "+269", "+243", "+242", "+682", "+506", "+385", "+53",
    "+357", "+420", "+45", "+253", "+670", "+593", "+20", "+503", "+240", "+291",
    "+372", "+251", "+679", "+358", "+33", "+241", "+220", "+995", "+49", "+233",
    "+30", "+502", "+224", "+245", "+592", "+509", "+504", "+36", "+354", "+91",
    "+62", "+98", "+964", "+353", "+972", "+39", "+225", "+81", "+962", "+7",
    "+254",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (code) => {
    setSelectedCode(code);
    setIsOpen(false);
  };
  return (
    <div>
      {isFormVisible && (
        <div className="p-5 m-5 md:m-0 md:p-8 text-xs md:text-sm shadow-md rounded-3xl bg-white w-[90%] md:w-[23.094rem] md:h-[30.128rem] mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-[#5A5555]"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-semibold text-xs md:text-sm"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="form-input border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="week"
                className="font-semibold text-xs md:text-sm"
              >
                Planning to buy
              </label>
              <select
                name="week"
                id="week"
                className="form-input border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-cyan-400 pr-10"
              >
                <option value="1week">1-2 Weeks</option>
                <option value="2week">2-3 Weeks</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-semibold text-xs md:text-sm"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="form-input border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact"
                className="font-semibold text-xs md:text-sm"
              >
                Contact number <span className="text-red-600">*</span>
              </label>
              <div className="form-input py-2 border border-gray-300 rounded-full flex items-center px-4">
                {/* <select
                  name="country"
                  id="country"
                  className="bg-transparent outline-none"
                >
                  <option value="+40">+40</option>
                  <option value="+91">+91</option>
                </select> */}
                <div className="relative">
                  <button
                    type="button"
                    className="focus:outline-none text-left flex justify-between items-center"
                    onClick={toggleDropdown}
                  >
                    <span>{selectedCode}</span>
                    <svg
                      className={`w-4 h-4 pl-1 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="absolute w-30 z-10 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-auto mt-1">
                      {countryCodes.map((code) => (
                        <div
                          key={code}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleSelect(code)}
                        >
                          {code}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Contact number"
                  className="bg-transparent focus:outline-none w-full px-2"
                />
              </div>
            </div>

            <input
              type="submit"
              value="Get a Free quote"
              className="bg-[#24BBE3] text-white font-medium hover:bg-cyan-500 rounded-full py-2 text-base md:text-lg cursor-pointer transition-colors"
            />

            <div className="text-start text-xs mt-3 text-gray-600">
              I agree to{" "}
              <span className="underline cursor-pointer hover:text-cyan-500">
                terms of use
              </span>{" "}
              and{" "}
              <span className="underline cursor-pointer hover:text-cyan-500">
                privacy policy
              </span>{" "}
              when getting a free quote from
            </div>
          </form>
        </div>
      )}

      {isQuoteSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute bg-white p-4 md:p-8 rounded-lg shadow-lg w-[90%] md:w-[55%] z-50">
            <div className="flex flex-col items-center h-full">
              <div className="flex justify-between items-center w-full mb-0">
                <button
                  onClick={handleCloseForm}
                  className="text-white bg-black w-8 h-8 flex items-center justify-center rounded"
                >
                  ✖
                </button>
              </div>
              <img
                src="/thankyou.png"
                alt="Thank You Image"
                className="w-20 h-28 mb-0"
              />
              <h2 className="text-lg md:text-2xl font-bold">Thank you!</h2>
              <p className="text-center mt-0">
                We’ve sent your personalized quote to your inbox.
              </p>
              <button
                onClick={handleCloseForm}
                className="mt-4 text-cyan-400 border-2 border-cyan-400 text-xs font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full"
              >
                CHECK OTHER QUOTES
              </button>
              <p className="text-xs md:text-sm text-center text-gray-400 mt-4 flex gap-1">
                <img
                  src="/Home/img27.png"
                  alt="Data Security"
                  className="max-w-[20px] h-auto"
                />
                Your data is secured with us. We do not share your data with
                anyone except our insurance partners.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
