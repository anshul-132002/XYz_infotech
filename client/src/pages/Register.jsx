import React, { useContext } from "react";
import { useFormik } from "formik";
import { userSchema } from "./RegisterValidation";
import { ThemeContext } from "../Context/createContext";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()
  const { theme,localStorageToken ,API} = useContext(ThemeContext);
  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        phone: "",
        password: "",
      },
      validationSchema: userSchema,
      onSubmit: async (value, { resetForm }) => {
        try {
          const response = await axios.post(
           `${API}/api/register`,
            value,
            { withCredentials: true }
          );
          console.log(response.data);
          const token_Data =response.data.token
          localStorageToken(token_Data)
          resetForm();
          toast.success("User registration successful !");
          navigate("/")
        } catch (error) {
        console.log(error.response.data)
        }
      },
    });

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity:0}}
    transition={{duration:1}}
   >
    <section
      className={`${
        theme === "light" ? "bg-white text-black m-2" : "bg-black text-white"
      }`}
    >
      <main className="grid grid-cols-2">
        <div className="flex justify-center items-center">
          <img src="/images/code1.png" alt="code" className="h-lvh" />
        </div>

        <div className="flex justify-center items-center border-1  border: 1px solid m-10">
          <form
            className="flex flex-col gap-5 w-full max-w-lg"
            onSubmit={handleSubmit}
          >
            <h1
              className={` font-extrabold mb-6 text-center font-serif text-2xl ${
                theme === "dark" ? "text-white" : "text-black "
              }`}
            >
              Registration Form
            </h1>

            <div className="flex items-center gap-4">
              <label
                htmlFor="username"
                className={`w-32  font-medium ${
                  theme === "dark" ? "text-white  " : "text-gray-700"
                }`}
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter the Username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`p-2 border border-gray-300 rounded-lg flex-1 ${
                  theme === "dark"
                    ? "placeholder:text-white "
                    : "placeholder:text-gray-700"
                }`}
              />
            </div>
            {errors.username && touched.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}

            <div className="flex items-center gap-4">
              <label
                htmlFor="email"
                className={`w-32  font-medium ${
                  theme === "dark" ? "text-white " : "text-gray-700"
                }`}
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter the Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`p-2 border border-gray-300 rounded-lg flex-1 ${
                  theme === "dark"
                    ? "placeholder:text-white "
                    : "placeholder:text-gray-700"
                }`}
              />
            </div>
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <div className="flex items-center gap-4">
              <label
                htmlFor="phone"
                className={`w-32  font-medium ${
                  theme === "dark" ? "text-white " : "text-gray-700"
                }`}
              >
                Phone:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter the Phone Number"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`p-2 border border-gray-300 rounded-lg flex-1 ${
                  theme === "dark"
                    ? "placeholder:text-white "
                    : "placeholder:text-gray-700"
                }`}
              />
            </div>
            {errors.phone && touched.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}

            <div className="flex items-center gap-4">
              <label
                htmlFor="password"
                className={`w-32  font-medium ${
                  theme === "dark" ? "text-white " : "text-gray-700"
                }`}
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter the Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`p-2 border border-gray-300 rounded-lg flex-1 ${
                  theme === "dark"
                    ? "placeholder:text-white "
                    : "placeholder:text-gray-700"
                }`}
              />
            </div>
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}

            <button
              type="submit"
              className="bg-red-400 p-3 hover:bg-red-500 rounded-2xl text-white"
            >
              Register
            </button>
          </form>
        </div>
      </main>
      <ToastContainer
        position="top-center"
        autoClose={3000}
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
    </section> 
      </motion.div>
  )
}

export default Register;
