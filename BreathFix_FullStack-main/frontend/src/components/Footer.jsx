import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10 font-poppins">
      <div className="flex flex-row justify-evenly">
        {/* First Column */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold mb-4">PenCrafted</h2>
          <p>
            <span className="font-semibold">Email: </span>info@website.com
          </p>
          <p>
            <span className="font-semibold">Contact: </span>+92 334 5678907
          </p>
          <p>
            <span className="font-semibold">Address: </span>123 Main Street,
            City, Country
          </p>
        </div>

        {/* Second Column */}
        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold mb-4 text-center">About Us</h2>
          <p className="mb-4 text-center w-96">
            Welcome to PenCrafted, your one-stop solution for Chronic Obstruct
            Pulmonary Prediction. We are dedicated to providing the best
            [products/services] with a focus on quality, reliability, and
            customer satisfaction
          </p>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://www.facebook.com"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <TiSocialFacebook size={"1.7rem"} />
            </a>
            <a
              href="https://www.twitter.com"
              className="hover:text-gray-400"
              aria-label="Twitter"
            >
              <TiSocialTwitter size={"1.7rem"} />
            </a>
            <a
              href="https://www.instagram.com"
              className="hover:text-gray-400"
              aria-label="Instagram"
            >
              <RiInstagramFill size={"1.5rem"} />
            </a>
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
