import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import { ThemeProvider } from "./Context/createContext";
import Footer from "./components/Footer";
import Logout from "./pages/Logout";
import { AnimatePresence } from "motion/react";
import AdminLayout from "./pages/Layouts/Admin-Layout";
import AdminUser from "./pages/Layouts/AdminUser";
import AdminContacts from "./pages/Layouts/AdminContacts";
import AdminUpdate from "./pages/Layouts/Admin-update";
function App() {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <ThemeProvider>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/service" element={<Service></Service>}></Route>
            <Route path="/Register" element={<Register></Register>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/logout" element={<Logout></Logout>}></Route>
            <Route path="*" element={<Error></Error>}></Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="users" element={<AdminUser />} />
              <Route path="users/update/:id" element={<AdminUpdate />} />
              <Route path="contacts" element={<AdminContacts />} />
            </Route>
          </Routes>
          <Footer></Footer>
        </ThemeProvider>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
