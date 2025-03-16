import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const ThemeContext = createContext();
import "react-toastify/dist/ReactToastify.css";

export const ThemeProvider = ({ children }) => {
  const API = import.meta.env.VITE_URI;
  
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();
  const [loading, setIsLoading] = useState(true);
  const [service, setService] = useState([]);
  const [theme, settheme] = useState("light");
  const authentication = `Bearer ${token}`;
  const handleToggle = () => {
    settheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

   
  const localStorageToken = (servertoken) => {
    setToken(servertoken);
    return localStorage.setItem("token", servertoken);
  };
  const isLoggedIn = !!token;
  const LogoutUser = () => {
    setToken("");
    toast.error("User logged out")
    return localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(`${API}/api/user`, {
        headers: { Authorization: authentication },
      });
      if (response.status === 200) {
        // console.log(response.data.user);
        setUser(response.data.user);
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getServices = async () => {
    try {
      const response = await axios.get(`${API}/api/service`);
      if (response.status === 200) {
        setService(response.data.response);
      }
    } catch (error) {
      console.log(`Error from frontend: ${error.message}`);
    }
  };
  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleToggle,
        localStorageToken,
        LogoutUser,
        isLoggedIn,
        user,
        service,
        authentication,
        loading,
        API
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
