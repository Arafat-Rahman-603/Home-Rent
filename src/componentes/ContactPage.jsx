import React from "react";

export default function ContactPage() {
  const handleMsg = (e) => {
    e.preventDefault();
    alert("Network Error! Try again later.");
  };

  return (
    <main className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-16 px-4">
      {/* Header */}
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Have questions about renting or listing your property? Get in touch
          with us — we’d love to help you.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 w-full max-w-6xl">
        {/* Contact Info + Map */}
        <div className="flex flex-col hover:scale-95 hover:shadow-2xl transition-all justify-center bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Reach us through phone, email, or visit our office.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              📍 <span className="font-semibold">Address:</span> Jurain, Dhaka-1204, Bangladesh
            </li>
            <li>
              📞 <span className="font-semibold">Phone:</span>{" "}
              <a
                className="hover:text-blue-400 transition-all cursor-pointer"
                href="tel:+8801609611399"
              >
                +880 1609-611399
              </a>
            </li>
            <li>
              📧 <span className="font-semibold">Email:</span>{" "}
              <a
                className="hover:text-blue-400 transition-all cursor-pointer"
                href="mailto:arafat.rahman.6003@gmail.com"
              >
                arafat.rahman.6003@gmail.com
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <iframe
              title="map"
              className="w-full h-48 rounded-lg border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.8043980783394!2d90.43099167533288!3d23.70270989044995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9c6195d37a7%3A0x2c64aec7a9474b5d!2sDholairpar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1694345671234!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:scale-95 hover:shadow-2xl transition-all">
          <form className="flex flex-col gap-5" onSubmit={handleMsg}>
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 flex items-center justify-center text-white py-2 rounded-lg font-semibold gap-2 hover:bg-blue-600 transition"
            >
              Send Message
              <lord-icon
                src="https://cdn.lordicon.com/vpbspaec.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#66a1ee"
                className="h-6 w-6"
              ></lord-icon>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
