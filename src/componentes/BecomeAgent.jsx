import React from "react";
import { Link } from "react-router-dom";

export default function BecomeAgent(){


  return(<>
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-gray-800 mb-4">
           This service is unavailable!
          </h2>
          <button className="px-6 py-2 border-2 rounded-3xl border-blue-300 text-2xl text-blue-300 hover:scale-105 hover:text-black hover:border-black transition-all"><Link to="/">Return Home</Link></button>
        </div>
      </div>
  </>)


}
