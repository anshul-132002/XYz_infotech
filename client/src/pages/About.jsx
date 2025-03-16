import React, { useContext } from "react";
import LogoSection from "../components/LogoSection";
import { motion } from "motion/react";
import { ThemeContext } from "../Context/createContext";
import { NavLink } from "react-router";

function About() {
  const { user ,theme} = useContext(ThemeContext);
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
      <section className="grid  p-10 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
        <div className=" flex flex-col gap-5 justify-center items-start ml-10  ">
          {user ? (
            <motion.h1
           
            className={`text-md font-mono font-thin ${theme === "light" ? "text-gray-800": "text-white" } `}>
             Helllo {user.username} to our website 
            </motion.h1>
          ) : (
            ""
          )}
          <p className="font-sans font-semibold text-lg uppercase">
            About Us{" "}
          </p>
          <h1 className="font-sans font-light text-5xl capitalize">
            why choose us ?{" "}
          </h1>
          <p className="font-light font-sans  flex flex-col ">
            <em>
              We are a forward-thinking technology company dedicated to
              delivering custom software solutions tailored to your business
              needs.
            </em>
            <br />
            <em>
              Our team of experts specializes in creating intuitive, efficient,
              and scalable applications that enhance your business operations
              and drive success.
            </em>
            <br />
            <em>
              By combining cutting-edge technology with a client-first approach,
              we aim to build long-lasting partnerships and help you achieve
              your goals with innovative solutions.
            </em>
            <br />
            <em>
              We take pride in our commitment to excellence, providing ongoing
              support and maintaining a deep understanding of your unique
              requirements.
            </em>
            <br />
            <em>
              Whether you're looking to develop a new product, optimize existing
              processes, or scale your operations, we are here to help you
              navigate the digital landscape with confidence.
            </em>
            <br />
            <em>
              Our approach is rooted in collaboration, transparency, and
              continuous improvement, ensuring that we are always aligned with
              your vision and goals for success.
            </em>
          </p>
          <div className=" gap-3 flex flex-row">
            <NavLink to={"/contact"} className="btn-primary">Connect now</NavLink>
            <NavLink to={"/"} className="btn-outline">Learn more</NavLink>
          </div>
        </div>
        <div>
          <img src="/images/about.png" alt="home" className="" />
        </div>
      </section>
      <LogoSection></LogoSection>
      <section className=" space-y-5">
        <h1 className="flex justify-center items-center font-bold text-3xl uppercase ">
          location
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3668.1987749866475!2d79.90289607477435!3d23.16294421107625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1737901014134!5m2!1sen!2sin"
          width="100%"
          height="350"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </motion.div>
  );
}

export default About;
