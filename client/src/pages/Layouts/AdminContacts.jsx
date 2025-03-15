import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Context/createContext";
import { Bounce, toast, ToastContainer } from "react-toastify";

function AdminContacts() {
  const { authentication , API} = useContext(ThemeContext);
  const [contacts, setContacts] = useState([]);

  const getAllContacts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/admin/contacts",
        {
          headers: {
            Authorization: authentication,
          },
        }
      );
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteContact = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(
      `${API}/api/admin/contacts/delete/${id}`,
        {
          headers: {
            Authorization: authentication,
          },
        }
      );
      if (response.status === 200) {
        getAllContacts();
        toast.success("Contact deleted successfully");
      } else {
        toast.error("some error occured ");
      }
    } catch (error) {}
  };
  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div className="container h-screen mx-auto p-6">
      <header className="text-2xl font-bold mb-4">Contacts</header>
      <section className="bg-white shadow-md rounded-lg p-4">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4 text-center">{contact.username}</td>
                <td className="py-2 px-4 text-center">{contact.email}</td>
                <td className="py-2 px-4 text-center">{contact.message}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleDeleteContact(contact._id)}
                    className="bg-red-500 px-2 rounded-2xl text-white font-thin font-mono"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        transition={Bounce}
      />
    </div>
  );
}

export default AdminContacts;
