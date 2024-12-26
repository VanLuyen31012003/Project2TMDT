import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-800 text-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Section 1: Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">My Company</h3>
          <p>Providing top-notch services and products for over 10 years.</p>
        </div>

        {/* Section 2: Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul>
            <li><a href="/home" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Section 3: Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p>© 2024 My Company. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
