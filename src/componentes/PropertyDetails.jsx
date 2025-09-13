import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useUser, SignedIn, SignedOut, SignIn } from "@clerk/clerk-react";

export default function PropertyDetails() {
  const { id } = useParams();
  const { user } = useUser();
  const property = useSelector(state =>
    state.property.properties.find(p => p.id === id)
  );

  // --- If user not signed in, show SignIn component ---
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Please login to view property details
          </h2>
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </div>
      </div>
    );
  }

  // --- If property not found ---
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Property Not Found</h2>
          <Link
            to="/properties"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Browse Properties
          </Link>
        </div>
      </div>
    );
  }

  // --- Property details ---
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
        />
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
          <p className="text-gray-600">{property.location}</p>
          <div className="text-4xl font-bold text-blue-600">
            ৳{property.price.toLocaleString()}
            <span className="text-lg text-gray-500">/month</span>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <p><span className="font-semibold">Bedrooms:</span> {property.bedrooms}</p>
            <p><span className="font-semibold">Available From:</span> {property.available_from}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p>{property.description}</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Contact Owner</h3>
            <p><span className="font-semibold">Phone:</span> {property.contactPhone}</p>
            <p><span className="font-semibold">Email:</span> {property.contactEmail}</p>
          </div>

          <div className="flex gap-5 font-bold">
            <button className="bg-blue-400 px-6 py-2 rounded-2xl hover:text-black transition-all hover:scale-105 text-white">
              <a href={`tel:${property.contactPhone}`}>CALL</a>
            </button>
            <button className="bg-blue-400 px-6 py-2 rounded-2xl hover:text-black transition-all hover:scale-105 text-white">
              <a href={`mailto:${property.contactEmail}`}>Mail</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
