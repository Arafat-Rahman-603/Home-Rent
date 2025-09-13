import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 border-t-2 border-t-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Tagline */}
        <div className="flex md:grid ">
          <img src="logo.png" alt="Rent App Logo" className="h-12" />
          <p className="text-gray-400 text-center md:text-start">
            Dream it. See it. Rent it.  
            Your trusted home rental partner in Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 text-center md:text-start">Quick Links</h3>
          <ul className="space-y-2 text-center md:text-start md:gap-0 md:grid md:justify-start flex justify-center gap-5">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/rent" className="hover:text-blue-400 transition">Rent</a></li>
            <li><a href="/agents" className="hover:text-blue-400 transition">Agents</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 text-center md:text-start">Contact Us</h3>
          <ul className="space-y-2 text-gray-400 text-center md:text-start">
            <li>📍 Jurain, Dhaka-1204, Bangladesh</li>
            <li><a href="tel: +880 1609-611399" className="hover:text-orange-500 transition-all">📞 +880 1609-611399</a></li>
            <li>📧 <a href="mailto:arafat.rahman.6003@gmail.com" className="hover:text-orange-500 transition-all">arafat.rahman.6003@gmail.com</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 text-center md:text-start">Follow Us</h3>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="hover:text-blue-500 transition "><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-sky-400 transition "><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-pink-500 transition "><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-blue-600 transition "><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Rent App. All rights reserved.
      </div>
    </footer>
  );
}
