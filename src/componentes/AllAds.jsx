import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchTerm, setFilterLocation, setFilterPriceRange, setFilterBedrooms, clearFilters } from "../data/propertySlice";

export default function AllAds() {
  const dispatch = useDispatch();
  const { filteredProperties } = useSelector(state => state.property);

  return (
    <div className=" bg-gray-50 mt-10">
      <div className="bg-white shadow-lg -mt-8 rounded-2xl p-6 relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <input type="text" placeholder="Search..." className="w-full px-4 py-3 border rounded-lg" onChange={(e)=>dispatch(setSearchTerm(e.target.value))}/>
        <select className="px-4 py-3 border rounded-lg" onChange={(e)=>dispatch(setFilterLocation(e.target.value))}>
          <option value="">All Locations</option>
          <option value="dhaka">Dhaka</option>
          <option value="chittagong">Chittagong</option>
          <option value="sylhet">Sylhet</option>
          <option value="rajshahi">Rajshahi</option>
          <option value="khulna">Khulna</option>
        </select>
        <select className="px-4 py-3 border rounded-lg" onChange={(e)=>dispatch(setFilterPriceRange(e.target.value))}>
          <option value="">All Prices</option>
          <option value="0-5000">Under ৳5,000</option>
          <option value="5000-10000">৳5,000 - ৳10,000</option>
          <option value="10000-20000">৳10,000 - ৳20,000</option>
          <option value="20000+">Above ৳20,000</option>
        </select>
        <select className="px-4 py-3 border rounded-lg" onChange={(e)=>dispatch(setFilterBedrooms(e.target.value))}>
          <option value="">All Bedrooms</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4">4+ Bedrooms</option>
        </select>
      </div>

      <div className="flex justify-between items-center mb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gray-600">Showing {filteredProperties.length} properties</p>
        <button onClick={()=>dispatch(clearFilters())} className="text-blue-500 font-semibold">Clear Filters</button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-wrap gap-6 justify-center">
        {filteredProperties.map(p => (
          <div key={p.id} className="border-2 border-blue-300 bg-white rounded-3xl p-3 hover:scale-105 transition-all duration-300">
            <img className="h-[12rem] w-[18rem] object-cover rounded-xl" src={p.image} alt={p.title}/>
            <h1 className="text-2xl font-bold mt-3">{p.title}</h1>
            <p className="w-[18rem]">{p.description}</p>
            <p>Location: {p.location}</p>
            <Link to={`/property/${p.id}`} className="inline-block bg-blue-400 text-white px-2 py-1 rounded-md mt-3 mb-1">VIEW DETAILS</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
