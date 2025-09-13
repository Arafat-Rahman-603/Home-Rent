import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";

// --- Dummy local data store ---
const initialProperties = [];

export default function Renter() {
  const { user } = useUser(); // Clerk user
  const [properties, setProperties] = useState(initialProperties);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    bedrooms: "",
    contactPhone: "",
    contactEmail: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = {
      id: (properties.length + 1).toString(),
      title: formData.title,
      description: formData.description,
      price: formData.price,
      location: formData.location,
      bedrooms: formData.bedrooms,
      contactPhone: formData.contactPhone,
      contactEmail: formData.contactEmail,
      image: imagePreview,
      views: 0,
      contacts: 0,
      owner: user?.primaryEmailAddress?.emailAddress || "unknown",
    };
    setProperties((prev) => [...prev, newProperty]);

    // Reset form
    setFormData({
      title: "",
      description: "",
      price: "",
      location: "",
      bedrooms: "",
      contactPhone: "",
      contactEmail: "",
      image: null,
    });
    setImagePreview(null);
  };

  return (
    <div className="p-5 md:px-20">
      <div className="text-center mb-8">
        <h1 className="text-blue-500 text-4xl md:text-6xl font-bold underline mb-4">
          Rent Your Property
        </h1>
        {user && (
          <p className="text-gray-600 text-lg">
            Welcome back, {user.firstName || user.emailAddresses[0].emailAddress}!
          </p>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-start mb-10"
      >
        {/* Image Upload */}
        <div className="flex flex-col items-center md:w-1/3">
          <label className="cursor-pointer">
            <input
              name="image"
              type="file"
              onChange={handleChange}
              className="hidden"
            />
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full object-cover rounded-lg border-2 border-gray-300 mb-2"
              />
            ) : (
              <div className="flex flex-col items-center">
                <lord-icon
                  src="https://cdn.lordicon.com/qtebspeb.json"
                  trigger="hover"
                  className="w-16 h-16 mb-1"
                ></lord-icon>
                <p className="text-gray-600 text-sm font-semibold">Upload Image</p>
              </div>
            )}
          </label>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-6 md:w-1/2 w-full">
          {[
            "title",
            "description",
            "price",
            "location",
            "bedrooms",
            "contactPhone",
            "contactEmail",
          ].map((field) => (
            <div key={field} className="relative">
              <input
                name={field}
                type={
                  field === "price" || field === "bedrooms"
                    ? "number"
                    : field === "contactEmail"
                    ? "email"
                    : "text"
                }
                placeholder=" "
                value={formData[field]}
                onChange={handleChange}
                required={["title", "price", "location", "contactPhone", "contactEmail"].includes(field)}
                className="peer block w-full rounded-lg border-b-2 border-gray-300 bg-transparent px-3 pt-8 pb-2 text-2xl text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none focus:ring-0 transition-all"
              />
              <label className="absolute peer-focus:underline left-3 top-2 text-gray-400 text-lg transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-blue-500 peer-focus:text-sm">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center md:items-start w-full md:w-auto mt-4 md:mt-0">
          <button
            type="submit"
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300"
          >
            <lord-icon
              src="https://cdn.lordicon.com/vjgknpfx.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#545454"
              className="w-10 h-10 mr-2"
            ></lord-icon>
            <span className="text-xl md:text-2xl">Add Property</span>
          </button>
        </div>
      </form>

      {/* Show added properties */}
      {properties.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Your Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((p) => (
              <div key={p.id} className="border rounded-xl p-4">
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-cover rounded-lg mb-2"
                  />
                )}
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-gray-600">{p.location}</p>
                <p className="text-sm mt-1">Price: ৳{p.price}</p>
                <p className="text-sm">Bedrooms: {p.bedrooms}</p>
                <p className="text-sm">Contact: {p.contactPhone}</p>
                <p className="text-sm">Email: {p.contactEmail}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
