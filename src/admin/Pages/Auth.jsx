import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Optional: for notifications
import Cookies from "js-cookie";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_Backend_url}/admin/login`,
        formData
      );
      // console.log(data);
      toast.success(data?.message);
      // console.log(data?.token)
      Cookies.set("adminToken", data?.token, {
        expires: 7,
      });

      navigate("/admin");
    } catch (err) {
      toast.error(err.response);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_Backend_url}/admin/login`,
          {},
          {
            withCredentials: true,
          }
        );
        // console.log(data);
        toast.success(data?.message);
        // // console.log(data?.token)
        // Cookies.set("adminToken", data?.token, {
        //   expires: 7,
        // });

        navigate("/admin");
      } catch (err) {
        // console.log(err, "ERRORORORO");
        toast.error(err.response.data.message);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen  bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md max-[600px]:m-2 rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full"
      >
        <h2 className="text-2xl mb-6 text-center">Admin Login</h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
