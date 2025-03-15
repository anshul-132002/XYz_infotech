import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ThemeContext } from "../Context/createContext";

function Logout() {
  const { LogoutUser } = useContext(ThemeContext);
  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);
  return <Navigate to="/" />;
}

export default Logout;
