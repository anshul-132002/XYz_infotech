import React, { useContext } from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { ThemeContext } from "../../Context/createContext";
import Loading from "../../components/Loading";

function AdminLayout() {
  const { user, loading } = useContext(ThemeContext);
  if (loading) return <Loading />;
  // console.log(user);
  if (!user.isAdmin) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="h-screen grid grid-cols-10">
      {/* Sidebar - 1/4 width */}
      <section className="col-span-1 bg-gray-100 p-4">
        <ul className="flex flex-col justify-center h-full space-y-10">
          <li>
            <NavLink
              to={"/admin/users"}
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }
            >
              <div className="flex items-center gap-2">
                <FaUserCircle /> Users
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/admin/contacts"}
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : "text-gray-700"
              }
            >
              <div className="flex items-center gap-2">
                <RiContactsBook2Fill /> Contacts
              </div>
            </NavLink>
          </li>
        </ul>
      </section>

      {/* Main Content - 3/4 width */}
      <section className="col-span-9 p-4 overflow-auto">
        <Outlet />
      </section>
    </div>
  );
}

export default AdminLayout;
