import React, { useContext } from "react";
import LogoSection from "../components/LogoSection";
import BarChart from "../Data/BarChart";
import { motion } from "framer-motion"; // Corrected import
import { ThemeContext } from "../Context/createContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={`${
        theme === "light" ? "bg-white text-black mt-2" : "bg-black text-white"
      }`}
    >
      {/* Hero Section */}
      <section className="grid  grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-10 py-10">
        {/* Left Content */}
        <div className="flex flex-col gap-6 justify-center">
          <p className="font-sans font-extralight text-lg uppercase">
            We are world best IT company
          </p>
          <h1 className="font-sans font-light text-4xl md:text-5xl leading-tight">
            Welcome to xyz Infotech
          </h1>
          <p className="font-thin font-sans">
            We are committed to providing cutting-edge software solutions that
            meet your unique business needs, ensuring efficiency, scalability,
            and seamless user experiences that drive success and growth for your
            organization.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button
              className="btn-primary"
              onClick={() => navigate("/contact")}
            >
              Connect now
            </button>
            <button
              className={`${
                theme === "light"
                  ? "btn-outline"
                  : "text-white ring ring-violet-800 rounded-full px-6 py-2"
              }`}
            >
              Learn more
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/images/banner.png"
            alt="home"
            className="w-full h-auto max-w-[500px] object-contain"
          />
        </div>
      </section>

      {/* Logo Section */}
      <LogoSection />

      {/* Secondary Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-10 py-10">
        {/* Left Image */}
        <div className="flex justify-center order-1 md:order-none">
          <img
            src="/images/banner2.png"
            alt="home"
            className="w-full h-auto max-w-[500px] object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-6 justify-center">
          <p className="font-sans font-extralight text-lg uppercase">
            We are here to help you
          </p>
          <h1 className="font-sans font-light text-4xl md:text-5xl leading-tight capitalize">
            Get started today
          </h1>
          <p className="font-thin font-sans">
            Our vision is to be your trusted technology partner, delivering
            innovative solutions that help you stay ahead in a competitive
            market, while continuously improving and adapting to your evolving
            business goals.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="btn-primary"
             onClick={() => navigate("/contact")}
            >Connect now</button>
            <button className="btn-outline">Learn more</button>
          </div>
        </div>
      </section>

      {/* Bar Chart Section */}
      <div className="px-4 md:px-10 py-10">
        <BarChart />
      </div>
    </motion.div>
  );
}

export default Home;
