import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EnquiryForm = ({ setIsOpen }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Service: "",
    Comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_Backend_url}/user/add-contact`,
        formData
      );
      toast.success(response.data.message);
      // Reset form after successful submission
      setFormData({
        Name: "",
        Phone: "",
        Email: "",
        Service: "",
        Comments: "",
      });
      setIsOpen(false);
    } catch (error) {
      toast.error("Failed to submit enquiry.");
    }
  };

  return (
    <div className="flex w-full items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full"
      >
        <h2 className="text-2xl mb-4 text-center">Enquiry Form</h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="Name"
            type="text"
            placeholder="Your Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            name="Phone"
            type="tel"
            placeholder="Your Phone Number"
            value={formData.Phone}
            onChange={handleChange}
            required
          />
        </div>

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
            name="Email"
            type="email"
            placeholder="Your Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="service"
          >
            Service
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="service"
            name="Service"
            type="text"
            placeholder="Service Required"
            value={formData.Service}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="comments"
          >
            Comments
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comments"
            name="Comments"
            placeholder="Your Comments"
            value={formData.Comments}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>{" "}
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
