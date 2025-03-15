import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "../../Context/createContext";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminUpdate() {
  const { authentication, API } = useContext(ThemeContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.patch(
        `${API}/api/admin/users/update/${id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: authentication,
          },
        }
      );

      if (resp.status === 200) {
        toast.success("User updated successfully");
      } else {
        toast.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Something went wrong");
    }
  };

  const getSingleUserData = async () => {
    try {
      const response = await axios.get(`${API}/api/admin/users/${id}`, {
        headers: {
          Authorization: authentication,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Update User
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="block text-gray-600">Phone</label>
            <input
              type="text"
              name="phone"
              value={data.phone}
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Update User
          </button>
        </form>
        <Link
          to={"/admin/users/"}
          className="w-full flex justify-center mt-1 bg-violet-900 text-white py-2 rounded-lg hover:bg-violet-600 transition duration-200"
        >
          go Back
        </Link>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        transition={Bounce}
      />
    </div>
  );
}

export default AdminUpdate;
