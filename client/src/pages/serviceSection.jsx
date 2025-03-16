import React, { useContext } from "react";
import { ThemeContext } from "../Context/createContext";

function ServiceSection() {
  const { service ,theme } = useContext(ThemeContext);
  return (
    <div className={`${
      theme === "light" ? "bg-white text-black mt-2" : "bg-black text-white"
    } py-16 `}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-2xl font-bold text-center font-[Open_Sans] mb-8">
            Our Services
          </h2>

          <div className="grid gap-6 lg:grid-cols-3 ">
            {service.map((ele) => (
              <div key={ele._id} className="bg-zinc-50 shadow-lg rounded-lg p-6 ">
                <img
                  src="/images/code1.png"
                  alt="services"
                  className="w-full h-36 object-cover p-3"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  {ele.service}
                </h3>
                <p className="text-gray-600 mt-2">{ele.description}</p>
                <p className="text-gray-900 font-bold mt-4 ">
                  ₹{ele.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
