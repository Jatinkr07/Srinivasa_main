import React from "react";

const locations = [
  "Mumbai",
  "Pune",
  "Nagpur",
  "Thane",
  "Navi Mumbai",
  "Lonavala",
  "Karjat",
  "Ahmedabad",
  "Surat",
  "Rajkot",
  "Bhavnagar",
  "Jamnagar",
  "Junagadh",
  "Gandhinagar",
  "Chennai",
  "Coimbatore",
  "Tiruchirappalli",
  "Tirunelveli",
  "Vellore",
  "Bangalore",
  "Davanagere",
  "Bellary",
  "Shimoga",
  "Visakhapatnam",
  "Vijayawada",
  "Guntur",
  "Nellore",
  "Kurnool",
  "Rajahmundry",
  "Tirupati",
  "Anantapur",
  "Hyderabad",
  "Warangal",
  "Nizamabad",
  "Nalgonda",
  "Jaipur",
  "Udaipur",
  "Jodhpur",
  "Bhilwara",
  "Bharatpur",
  "Bhopal",
  "Indore",
  "Gwalior",
  "Ujjain",
  "Raipur",
];

const Map = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg m-auto">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4 md:mb-8">
              Reliable Earthmovers Services and Excavator on rent
            </h1>

            <p className="text-lg md:text-xl text-gray-700 text-center mb-6 md:mb-12">
              We offer a wide range of earthmoving, land development, mining
              services, breakwater services, Infrastructure Development,
              excavator on rent.
            </p>
            <p className="text-lg md:text-sm text-gray-700 mb-4">
              kasturi earth movers is a leading provider of comprehensive{" "}
              <span className="font-semibold">earthmoving services</span> across
              India. Our expertise ensures that your construction projects are
              completed efficiently and to the highest standards.
            </p>

            <p className="text-lg md:text-sm text-gray-700 mb-4">
              We offer a wide range of{" "}
              <span className="font-semibold">excavator rentals</span>,
              including{" "}
              <span className="font-semibold">long boom excavator rentals</span>
              , tailored to meet the specific needs of your projects.
            </p>

            <p className="text-lg md:text-sm text-gray-700">
              Our earthmoving services and excavator rentals are available in
              various cities, including:
            </p>

            {/* <div className="mt-4 "> */}
            <div className="mt-4 text-sm">
              <p>{locations.join(", ")}</p>
            </div>
            {/* </div> */}

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full mt-8">
              CONTACT US TODAY
            </button>
          </div>

          <div className="relative">
            {/* Replace with the actual map image URL */}
            <img
              src="https://kasturiearthmovers.com/wp-content/uploads/2024/07/India-map-en-768x870.png"
              alt="India Map"
              className="w-full h-full shadow-lg rounded-md"
            />

            {/* You can add interactive elements to the map using absolute positioning here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
