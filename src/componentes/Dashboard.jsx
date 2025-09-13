import React from "react";
import { Link } from "react-router-dom";

export default function BuyerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-300 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Buyer Dashboard
        </h1>
        <p className="text-xl text-blue-100">
          Browse and track properties you are interested in
        </p>
      </div>

      {/* Explore Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Explore</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/properties"
              className="p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors font-semibold"
            >
              Browse Properties
            </Link>
            <Link
              to="/agents"
              className="p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors font-semibold"
            >
              Find Agents
            </Link>
            <Link
              to="/contact"
              className="p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors font-semibold"
            >
              Get Help
            </Link>
          </div>
        </div>

        {/* Property List */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Properties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-2 border-blue-300 rounded-3xl p-5">
              <h1 className="text-2xl"><strong>RENT</strong> you'r first property by <strong>US</strong></h1>
              <button className="bg-blue-400 px-3 py-1 mt-3 rounded-2xl hover:text-black transition-all hover:scale-105 text-white"><Link to="/properties">RENT NOW</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
