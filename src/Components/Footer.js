import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-6 mt-6">
      <div className="container mx-auto px-4">
        {/* Top Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* About Us */}
          <div>
            <h3 className="font-bold text-lg mb-3">About Us</h3>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:underline">
                  Our Story
                </a>
              </li>
              <li className="mb-2">
                <a href="/mission" className="hover:underline">
                  Mission & Values
                </a>
              </li>
              <li className="mb-2">
                <a href="/farms" className="hover:underline">
                  Our Farms
                </a>
              </li>
            </ul>
          </div>
          {/* Customer Support */}
          <div>
            <h3 className="font-bold text-lg mb-3">Customer Support</h3>
            <ul>
              <li className="mb-2">
                <a href="/help" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="/returns" className="hover:underline">
                  Returns & Refunds
                </a>
              </li>
              <li className="mb-2">
                <a href="/shipping" className="hover:underline">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>
          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-3">Categories</h3>
            <ul>
              <li className="mb-2">
                <a href="/vegetables" className="hover:underline">
                  Vegetables
                </a>
              </li>
              <li className="mb-2">
                <a href="/fruits" className="hover:underline">
                  Fruits
                </a>
              </li>
              <li className="mb-2">
                <a href="/organic" className="hover:underline">
                  Organic Staples
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                className="hover:text-gray-300"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-gray-300"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com"
                className="hover:text-gray-300"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Info */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Naturally Fresh</h3>
            <p className="text-sm text-gray-300">
              Bringing nature's bounty to your doorstep. Chemical-free, fresh,
              and natural.
            </p>
          </div>
          {/* App Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://play.google.com"
              className="hover:opacity-80"
              aria-label="Download on Google Play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
            </a>
            <a
              href="https://apple.com"
              className="hover:opacity-80"
              aria-label="Download on App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Naturally Fresh. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
