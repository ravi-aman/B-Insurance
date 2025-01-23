import { useState } from "react";

const CountryCodeDropdown = () => {
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
        <form className="space-y-4">
            {/* Dropdown Component */}
            <div className="relative w-40">
                <button
                    type="button"
                    className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none text-left flex justify-between items-center"
                    onClick={toggleDropdown}
                >
                    <span>{selectedCode}</span>
                    <svg
                        className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""
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
                    <div
                        className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-auto mt-1"
                    >
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
        </form>
    );
};

export default CountryCodeDropdown;
