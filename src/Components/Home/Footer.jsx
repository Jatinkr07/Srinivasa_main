import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-no-repeat bg-center "
      style={{
        backgroundImage: `url(https://kasturiearthmovers.com/wp-content/uploads/2023/07/kasturi-earthmovers-footer-new.png)`,
      }}
    >
      <div className="container mx-auto px-4 py-12 text-white max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About kasturi earth movers */}
          <div>
            <h2 className="text-2xl font-bold mb-4 ">Srinivasa Earth Movers</h2>
            <hr className="h-[0.4rem] w-[1.5rem] bg-orange-500 mb-2" />
            <p>
              At Srinivasa Earth Movers, we are a leading provider of
              comprehensive services in earth movers, infrastructure
              development, and land development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <hr className="h-[0.4rem] w-[1.5rem] bg-orange-500 mb-2" />

            <div className="flex justify-around">
              <ul className="space-y-2 list-disc">
                <li> Earth Movers</li>
                <li> Breakwater</li>
                <li> Land Development</li>
                <li> Excavators</li>
              </ul>
              <ul className="list-disc space-y-2">
                <li> Mining</li>
                <li> Infrastructure</li>
                <li> Case Studies</li>
                <li> FAQs</li>
              </ul>
            </div>
          </div>

          {/* Other Quick Links and Contact */}
          <div>
            <div className="">
              <h3 className="text-xl font-semibold mb-4 ">Get In Touch</h3>
              <hr className="h-[0.4rem] w-[1.5rem] bg-orange-500 mb-2" />

              <address className="not-italic">
                <p>
                  <span className="inline-block w-8 text-orange-500">📍</span>{" "}
                  #62, Lakshmipura, Thatguni post , Kanakapura Main Road,
                  Bengaluru-560062
                </p>
                <p>
                  <span className="inline-block w-8 text-orange-500">🏙️</span>{" "}
                  Pune 411057
                </p>
                <p>
                  <span className="inline-block w-8 text-orange-500">📞</span>{" "}
                  Phone: +919035379994
                </p>
                <p>
                  <span className="inline-block w-8 text-orange-500">📧</span>{" "}
                  Email:{" "}
                  <a href="mailto:info@srinivasaearthmovers.com">
                    info@srinivasaearthmovers.com
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        {/* Copyright */}
      </div>
      <hr className="text-white mt-4 w-full" />
      <div className="text-left text-white p-4 pl-[16rem] max-[750px]:pl-2">
        Copyright &copy; 2024 Srinivasa Earth Movers. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
