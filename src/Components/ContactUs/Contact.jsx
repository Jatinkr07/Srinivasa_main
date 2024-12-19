import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-start px-4 py-20 ">
      {/* Left: Form Section */}
      <div className="w-full md:w-2/3 bg-yellow-100 p-8 shadow-lg">
        <p className="text-center text-gray-600 mb-6">
          Please call or email contact form and we will be happy to assist you.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 max-[600px]:flex max-[600px]:flex-wrap gap-4">
          <input type="text" placeholder="Name" className="border p-3 w-full max-[600px]:text-base max-[600px]:p-2 rounded" />
          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 w-full max-[600px]:text-base max-[600px]:p-2 rounded"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border p-3 w-full max-[600px]:text-base max-[600px]:p-2 rounded"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="border p-3 w-full max-[600px]:text-base max-[600px]:p-2 rounded"
          />
          <textarea
            placeholder="Write your message here..."
            className="border p-3 w-full col-span-2 h-32 max-[600px]:text-base max-[600px]:p-2 rounded"
          />

          {/* Captcha and Submit Button */}
          <div className="col-span-2 max-[600px]:items-start flex items-center max-[600px]:flex-col  justify-between">
            <div className="flex  items-center  space-x-2">
              <input type="checkbox" />
              <label className="text-sm">I'm not a robot</label>
            </div>
            <button className="bg-yellow-500 text-black max-[600px]:text-sm max-[600px]:mt-2 font-bold py-3 px-6 rounded-lg hover:bg-yellow-600">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>

      {/* Right: Office Address Section */}
      <div className="w-full md:w-1/3  mt-8 md:mt-0 md:ml-6 bg-white p-8 ">
        {/* <h3 className="text-xl font-bold mb-4">Our Office Address</h3> */}

        <div className="mb-6 p-5 bg-yellow-100">
          <h4 className="font-semibold text-yellow-500 max-[600px]:text-[1.2rem] text-xl font-bold">Our Address:</h4>
          <p className="text-black max-[600px]:text-[0.8rem] mt-2">
            62, Lakshmipura, Thatguni post , Kanakapura Main Road,
            Bengaluru-560062
          </p>
        </div>

        <div className="mb-6 p-5 bg-yellow-100">
          <h4 className="font-semibold text-yellow-500 max-[600px]:text-[1.2rem] text-xl font-bold">Talk to Us:</h4>
          <p className="text-black max-[600px]:text-[0.8rem] mt-2">Email: info@srinivasaearthmovers.com</p>
          <p className="text-black max-[600px]:text-[0.8rem] mt-2">Phone: +919035379994</p>
          {/* <p className="text-gray-600">999-912-4242</p> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
