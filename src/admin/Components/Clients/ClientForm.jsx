/* eslint-disable react/prop-types */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ClientForm({ closeModal }) {
  const [formData, setFormData] = useState({
    client: "",
    phone: "",
    email: "",
    address: "",
    gstin: "",
  });

  const [errors, setErrors] = useState({
    client: "",
    phone: "",
    email: "",
    address: "",
    gstin: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (formData.client.length < 2) {
      newErrors.client = "Client name must be at least 2 characters.";
      valid = false;
    } else {
      newErrors.client = "";
    }
    if (formData.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 characters.";
      valid = false;
    } else {
      newErrors.phone = "";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    } else {
      newErrors.email = "";
    }
    if (formData.address.length < 5) {
      newErrors.address = "Address must be at least 5 characters.";
      valid = false;
    } else {
      newErrors.address = "";
    }
    if (formData.gstin.length !== 15) {
      newErrors.gstin = "GSTIN must be exactly 15 characters.";
      valid = false;
    } else {
      newErrors.gstin = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  const AnimatedInput = ({ name, label, type = "text", placeholder }) => (
    <motion.div
      className="relative"
      initial={false}
      animate={{
        width: focusedField === name ? "100%" : "auto",
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.label
        className="absolute left-2 transition-all duration-300 pointer-events-none bg-white"
        initial={false}
        animate={{
          top: focusedField === name || formData[name] ? "-8px" : "16px",
          fontSize: focusedField === name || formData[name] ? "20px" : "16px",
          color: focusedField === name ? "#6B7280" : "#6B7280",
        }}
      >
        {label}
      </motion.label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        onFocus={() => setFocusedField(name)}
        onBlur={() => setFocusedField(null)}
        className="w-full border-2 rounded-md p-2 mt-2 focus:border-blue-500 focus:outline-none transition-all duration-300  "
        placeholder={focusedField === name ? placeholder : ""}
      />
      <AnimatePresence>
        {errors[name] && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-500 text-sm mt-1"
          >
            {errors[name]}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="w-full bg-white rounded-lg p-8 overflow-hidden "
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Add Client</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatedInput
            name="client"
            label="Client"
            placeholder="Enter client name"
          />
          <AnimatedInput
            name="phone"
            label="Phone"
            type="tel"
            placeholder="Enter phone number"
          />
          <AnimatedInput
            name="email"
            label="Email"
            type="email"
            placeholder="Enter email address"
          />
          <AnimatedInput
            name="address"
            label="Address"
            placeholder="Enter address"
          />
          <AnimatedInput name="gstin" label="GSTIN" placeholder="Enter GSTIN" />

          <div className="flex justify-end gap-4 mt-8">
            <motion.button
              type="button"
              onClick={closeModal}
              className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 border-2 border-gray-700 hover:text-gray-700 hover:bg-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
            <motion.button
              type="submit"
              className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-white hover:text-red-700 border-2 border-red-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
