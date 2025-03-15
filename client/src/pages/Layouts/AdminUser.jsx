import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Context/createContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AdminUser() {
  const { authentication , API } = useContext(ThemeContext);
  const [user, setUser] = useState([]);

  const getAllUserData = async () => {
    try {
      const resp = await axios.get(`${API}/api/admin/users`, {
        headers: {
          Authorization: authentication,
        },
      });
      setUser(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const resp = await axios.delete(
        `${API}/api/admin/users/delete/${id}`,
        {
          headers: {
            Authorization: authentication,
          },
        }
      );
      if (resp.status === 200) {
        getAllUserData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <div className="container h-screen mx-auto p-6">
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr className="text-left">
              <th className="px-4 py-3 border-b border-gray-300">Status</th>
              <th className="px-4 py-3 border-b border-gray-300">Username</th>
              <th className="px-4 py-3 border-b border-gray-300">Email</th>
              <th className="px-4 py-3 border-b border-gray-300">Phone</th>
              <th className="px-4 py-3 border-b border-gray-300 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((ele, index) => (
              <tr
                key={index}
                className="even:bg-gray-50 hover:bg-gray-100 transition"
              >
                <td className="px-4 py-3 text-center">
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                    Online{" "}
                  </span>
                </td>
                <td className="px-4 py-3 border-b">{ele.username}</td>
                <td className="px-4 py-3 border-b">{ele.email}</td>
                <td className="px-4 py-3 border-b">{ele.phone}</td>
                <td className="px-4 py-3 border-b text-center space-x-2">
                  <Link
                    to={`/admin/users/update/${ele._id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm shadow-md hover:bg-blue-600 transition"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(ele._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm shadow-md hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
