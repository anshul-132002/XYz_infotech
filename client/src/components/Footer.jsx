import React, { useContext } from "react";
import { ThemeContext } from "../Context/createContext";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={` flex w-full capitalize justify-center items-center py-5 ${
        theme === "dark" ? "text-white bg-black border-1 " : "text-black bg-neutral-400 "
      } `}
    >
      all rights reserved @anshul 2025
    </div>
  );
}

export default Footer;
