import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceRequired, setServiceRequired] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send form data to your server here

    const { data } = await axios.post(
      `${import.meta.env.VITE_Backend_url}/user/add-contact`,
      {
        Name: name,
        Phone: phone,
        Email: email,
        Service: serviceRequired,
        Comments: comments,
      }
    );
    toast.success(data?.message);
    setName("");
    setPhone("");
    setEmail("");
    setComments("");
    setServiceRequired("");
  };

  return (
    <div className="flex justify-center items-center   p-10 max-[600px]:p-2 items-center md:min-h-screen bg-gray-100">
      <div className="bg-yellow-100 flex justify-center p-0 rounded-lg shadow-md w-fit  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full justify-items-stretch items-center">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4 max-[600px]:mb-2 max-[600px]:text-xl">Get in Touch with us</h2>
            <p className="mb-6 max-[600px]:mb-4 max-[600px]:text-sm">
              Please call or email contact form and we will be happy to assist
              you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  type="text"
                  id="serviceRequired"
                  value={serviceRequired}
                  onChange={(e) => setServiceRequired(e.target.value)}
                  placeholder="Service Required"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Your Comments"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="flex items-center mb-4">
                <input required type="checkbox" id="robot" />
                <label htmlFor="robot" className="text-gray-700 ml-2">
                  I'm not a robot
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#FACF15]  text-black font-bold max-[600px]:text-[0.8rem] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                GET FREE QUOTE
              </button>
            </form>
          </div>
          {/* <div className="bg-gray-200 w-full h-full p-8">
            <h3 className="text-xl font-bold mb-4 ">Our Office Address</h3>
            <div className="mb-6">
              <h4 className="font-bold">Pune Office:</h4>
              <p>1215 Gera's Imperium Rise</p>
              <p>Hinjewadi phase II, Pune 411057</p>
            </div>
            <div className="mb-6">
              <h4 className="font-bold">Baramati Office:</h4>
              <p>Jagdamba Nagar Bhigwan Road,</p>
              <p>MIDC Baramati, Baramati,</p>
              <p>Maharashtra 413133</p>
            </div>
            <h4 className="font-bold">Talk to Us:</h4>
            <p>9999 12 4242</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
