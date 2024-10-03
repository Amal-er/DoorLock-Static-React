import React from "react";
import footerimg1 from "../assets/footerimg1.jpg";
import footerimg2 from "../assets/footerimg2.jpg";
import footerimg3 from "../assets/footerimg3.jpg";
import footerimg4 from "../assets/footerimg4.jpg";
import footerimg5 from "../assets/footerimg5.jpg";
import footerimg6 from "../assets/footerimg6.jpg";

function Footer() {
  return (
    <div>
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding Section */}
          <div>
            <h2 className="text-xl font-bold">Bohimia</h2>
            <p className="mt-4 text-gray-400">
              Lorem ipsum dolor sit amet, ne mel detraxit voluptatum, muci us
              consetetur per ex. Mei cu ullum.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-tumblr"></i>
              </a>
            </div>
          </div>

          {/* News Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">NEWS</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="text-white">Interior Design</span> - March 28,
                2018
              </li>
              <li>
                <span className="text-white">Certification Process</span> -
                April 11, 2018
              </li>
              <li>
                <span className="text-white">Monday Musings</span> - April 11,
                2018
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
            <p className="text-gray-400">
              Street, Suite 23
              <br />
              New York, NY 10010
              <br />
              allston@example.com
              <br />
              (800) 202 0000 001
            </p>
          </div>

          {/* Instagram Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">INSTAGRAM</h3>
            <div className="grid grid-cols-3 gap-2">
              <img src={footerimg1} alt="Instagram Image" className="w-full" />
              <img src={footerimg2} alt="Instagram Image" className="w-full" />
              <img src={footerimg3} alt="Instagram Image" className="w-full" />
              <img src={footerimg4} alt="Instagram Image" className="w-full" />
              <img src={footerimg5} alt="Instagram Image" className="w-full" />
              <img src={footerimg6} alt="Instagram Image" className="w-full" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Bohimia, All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
