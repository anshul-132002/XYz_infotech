import React, { useContext } from "react";
import { useFormik } from "formik";
import { LoginSchema } from "./RegisterValidation";
import { ThemeContext } from "../Context/createContext";
import axios from "axios";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const navigate = useNavigate();
  const { theme, API ,localStorageToken } = useContext(ThemeContext);
  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: LoginSchema,
      onSubmit: async (value, { resetForm }) => {
        try {
          const response = await axios.post(`${API}/api/login`, value);
          if (response.status === 200) {
            toast.success("Login successful!");
            // Store token
            localStorageToken(response.data.token);
            resetForm();
            navigate("/"); // Redirect to home
          }
        } catch (error) {
          toast.error(error.response?.data?.message || "Invalid credentials");
        }
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
        }`}
      >
        <main className="grid grid-cols-2">
          {/* Left Section */}
          <div className="flex justify-center items-center">
            <img src="/images/login.png" alt="code" className="h-svh" />
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
                Login Form
              </h1>

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
                  placeholder="Enter the Email"
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
                  htmlFor="password"
                  className={`w-32  font-medium ${
                    theme === "dark" ? "text-white" : "text-gray-700"
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
                      ? "placeholder:text-white"
                      : "placeholder:text-gray-700"
                  }`}
                />
              </div>
              {errors.password && touched.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}

              <button
                type="submit"
                className="bg-green-400 p-3 hover:bg-green-500 rounded-2xl text-white"
              >
                Login
              </button>
            </form>
          </div>{" "}
        </main>

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
      </section>
    </motion.div>
  );
}

export default Login;
