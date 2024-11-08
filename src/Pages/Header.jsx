import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "./QuoteForm";

function Header() {
  const [selectedHeading, setSelectedHeading] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    individual: false,
    commercial: false,
    support: false,
  });

  const handleOpenQuoteForm = () => {
    setIsQuoteOpen(true);
  };

  const handleCloseQuoteForm = () => {
    setIsQuoteOpen(false);
  };

  const navigate = useNavigate();

  const headingClick = (heading) => {
    setSelectedHeading(heading);
    closeAllDropdowns();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      individual: false,
      commercial: false,
      support: false,
      [menu]: !prevDropdowns[menu],
    }));
  };

  const closeAllDropdowns = () => {
    setDropdowns({
      individual: false,
      commercial: false,
      support: false,
    });
  };

  const navItems = [
    {
      name: "Home",
      navPage: "/",
    },
    {
      name: "Individual",
      subMenu: [
        {
          name: "Life",
          description: "Protect your loved ones",
          link: "/lifeInsurance",
        },
        {
          name: "Automobile",
          description: "Protect your vehicle",
          link: "/automobileinsurance",
        },
        {
          name: "Home",
          description: "Protect your dream home",
          link: "/homeinsurance",
        },
      ],
    },
    {
      name: "Commercial",
      subMenu: [
        { name: "Auto", description: "For your Fleet", link: "/auto" },
        {
          name: "General Liability",
          description: "Travel around the world care free",
          link: "/general",
        },
        {
          name: "Warehouse",
          description: "Protect your warehouse",
          link: "/warehouse",
        },
        {
          name: "Restaurants",
          description: "Protect your food business",
          link: "/restaurantinsurance",
        },
      ],
    },
    {
      name: "Travel",
      navPage: "/travel",
    },
    {
      name: "Support",
      subMenu: [
        {
          name: "Contact us",
          description: "We've got your back",
          link: "/contact",
        },
        { name: "About us", description: "Why you matter", link: "/about" },
        { name: "How it works", description: "How we do things", link: "/how" },
        { name: "FAQs", description: "General topics", link: "/faq" },
        {
          name: "Blog",
          description: "Insurance Knowledge Resource",
          link: "/blog",
        },
      ],
    },
  ];

  return (
    <header className="bg-white shadow-sm">
      <nav className="flex justify-between md:justify-center items-center p-2">
        <div className="hidden md:w-1/3 md:flex justify-center">
          <img src="logo.png" alt="logo" className="h-10 md:h-[3rem]" />
        </div>
        <div className=" md:w-1/3 md:hidden justify-center">
          <img src="binsure1.png" alt="logo" className="h-10 md:h-[3rem]" />
        </div>
        <div className="md:w-2/3 flex justify-center items-center gap-5 cursor-pointer">
          <ul className="flex gap-10 items-center text-sm">
            {navItems.map((item) => (
              <li className="text-sm relative hidden md:flex" key={item.name}>
                <div
                  className={`cursor-pointer ${
                    selectedHeading === item.name ? "font-semibold" : ""
                  }`}
                  onClick={() => {
                    navigate(item.navPage);
                    headingClick(item.name);
                    if (item.subMenu) {
                      toggleDropdown(item.name.toLowerCase());
                    }
                  }}
                >
                  {item.name}
                </div>
                {selectedHeading === item.name && (
                  <div className="absolute h-[3px] bg-blue-500 w-full bottom-[-23px] left-0"></div>
                )}

                {item.subMenu && dropdowns[item.name.toLowerCase()] && (
                  <div className="z-50 absolute top-[3rem] w-[13vw] left-0 bg-white shadow-lg p-4 rounded-lg">
                    {item.subMenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        onClick={() => {
                          navigate(subItem.link);
                          headingClick(item.name);
                        }}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        <strong>{subItem.name}</strong>
                        <p className="text-sm text-gray-500">
                          {subItem.description}
                        </p>
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}

            <li
              className="hidden md:block bg-[#24BBE3] text-white p-3 pl-7 pr-7 rounded-xl cursor-pointer"
              onClick={() => {
                headingClick("Get a Quote");
                handleOpenQuoteForm();
              }}
            >
              Get a Quote
            </li>
          </ul>
          <div className="hidden md:block md:border-l-4 border-[#e5e7eb] pl-4 ml-10 md:ml-0">
            <img src="search1.png" alt="Search" className="h-5 md:h-7" />
          </div>
          <div className="md:hidden flex justify-start pr-5">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isOpen ? (
                "✖"
              ) : (
                <img src="hamburger.png" alt="hamburger" className="h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2">
          <ul className="flex flex-col items-center gap-5 text-sm p-4">
            {navItems.map((item) => (
              <li className="relative" key={item.name}>
                <div
                  onClick={() => {
                    if (item.subMenu) {
                      toggleDropdown(item.name.toLowerCase());
                    } else {
                      navigate(item.navPage);
                      headingClick(item.name);
                      setIsOpen(false);
                    }
                  }}
                  className="block w-full text-center py-2"
                >
                  {item.name}
                </div>

                {item.subMenu && dropdowns[item.name.toLowerCase()] && (
                  <div className="bg-white shadow-lg p-4 rounded-lg mt-2 w-full text-left">
                    {item.subMenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        onClick={() => {
                          navigate(subItem.link);
                          headingClick(item.name);
                          setIsOpen(false);
                        }}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        <strong>{subItem.name}</strong>
                        <p className="text-sm text-gray-500">
                          {subItem.description}
                        </p>
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li
              className="bg-cyan-400 text-white p-3 text-center rounded-xl"
              onClick={() => {
                headingClick("Get a Quote");
                navigate("/quote");
                setIsOpen(false);
              }}
            >
              Get a Quote
            </li>
          </ul>
        </div>
      )}
      {isQuoteOpen && <QuoteForm onClose={handleCloseQuoteForm} />}
    </header>
  );
}

export default Header;
