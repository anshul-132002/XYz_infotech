import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { contactSchema } from "./RegisterValidation";
import { ThemeContext } from "../Context/createContext";
import { motion } from "motion/react";
import axios from "axios";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const { theme, user } = useContext(ThemeContext);
  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        username: user?.username || "",
        email: user?.email || "",
        message: "",
      },
      validationSchema: contactSchema,
      onSubmit: async (value, { resetForm }) => {
        try {
          const response = await axios.post(
            "http://localhost:3000/form/contact",
            value
          );
          console.log("Response from backend:", response);
          toast.success("Message sent successfully !! ");
        } catch (error) {
          console.error("Error sending data:", error);
        }
        resetForm();
      },
    });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section
        className={`${
          theme === "light" ? "bg-white text-black mt-2" : "bg-black text-white"
        } `}
      >
        <main className="grid lg:grid-cols-2 md:grid-cols-1">
          {/* Left Section */}
          <div className="flex justify-center items-center">
            <img src="/images/about.png" alt="code" className="sm:h-72 lg:h-svh" />
          </div>

          {/* Right Section */}
          <div
            className={`flex justify-center items-center border-1  border: 1px solid m-10`}
          >
            <form
              className={` flex flex-col gap-5 w-full max-w-lg`}
              onSubmit={handleSubmit}
            >
              <h1
                className={`text-black font-extrabold mb-6 text-center font-serif text-2xl ${
                  theme === "dark" ? "text-white underline" : "text-black"
                }`}
              >
                Contact Us
              </h1>

              <div className="flex items-center gap-4">
                <label
                  htmlFor="username"
                  className={`w-32  font-medium ${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  }`}
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter the name"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`p-2 border border-gray-300 rounded-lg flex-1 ${
                    theme === "dark"
                      ? "placeholder:text-white"
                      : "placeholder:text-gray-700"
                  }`}
                />
              </div>
              {errors.username && touched.username && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

              <div className="flex items-center gap-4">
                <label
                  htmlFor="email"
                  className={`w-32  font-medium ${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  }`}
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter the email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`p-2 border border-gray-300 rounded-lg flex-1 ${
                    theme === "dark"
                      ? "placeholder:text-white"
                      : "placeholder:text-gray-700"
                  }`}
                />
              </div>
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
              <div className="flex items-center gap-4">
                <label
                  htmlFor="message"
                  className={`w-32  font-medium ${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  }`}
                >
                  Message :
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter the message ... "
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`p-2 border border-gray-300 rounded-lg flex-1 ${
                    theme === "dark"
                      ? "placeholder:text-white"
                      : "placeholder:text-gray-700"
                  }`}
                />
              </div>
              {errors.message && touched.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}

              <button
                type="submit"
                className="bg-green-400 p-3 hover:bg-green-500 rounded-2xl text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </main>
      </section>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </motion.div>
  );
}

export default Contact;
