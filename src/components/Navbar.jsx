import { useState } from "react";
import logo from "../assets/logo.webp";
import { LINKS } from "../constants";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };
  return (
    <nav className="border-b-2 w-full bg-slate-50 fixed top-0 z-50">
      <div className="max-w-7x1 mx-10 flex justify-between items-center py-8">
        <div className="pl-2">
          <a href="#">
            <img src={logo} width={150} height={15} alt="VastuSpaze" />
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2x1 pr-2 
            focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="uppercase text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute bg-neutral-50 w-full py-1 px-4 mt- border-b-4`}
      >
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="uppercase text-lg font-medium block py-2 tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
