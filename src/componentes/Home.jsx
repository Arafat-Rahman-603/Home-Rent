import React from "react";
import { Link } from "react-router-dom";
import Inputs from "./Inputs";
import { useSelector } from "react-redux";

export default function Home() {
  // Get properties from Redux store
  const { properties } = useSelector((state) => state.property);

  // Take first 6 properties only
  const latestProperties = properties.slice(0, 6);

  return (
    <>
      <Inputs />
      <main className="w-full h-max bg-blue-300">
        <h1 className="text-[2rem] underline font-bold p-5 text-white">
          Recently Added
        </h1>
        <div className="w-full flex text-white items-center h-max p-5 pt-0 gap-7 justify-center">
          <div className="w-max justify-center md:justify-start max-w-[86%] md:max-w-full lg:max-w-[86%] flex text-blue-400 flex-wrap h-max mx-auto pt-0 gap-7">
            {latestProperties.length === 0 ? (
              <p className="text-white">No properties yet.</p>
            ) : (
              latestProperties.map((p) => (
                <div
                  key={p.id}
                  className="border-2 border-blue-300 bg-white rounded-3xl p-3 hover:scale-105 transition-all duration-300"
                >
                  <img
                    className="h-[12rem] w-[18rem] object-cover rounded-xl"
                    src={p.image}
                    alt={p.title}
                  />
                  <h1 className="text-2xl hover:text-amber-200 transition-all duration-300 font-bold mt-3 cursor-pointer">
                    {p.title}
                  </h1>
                  <p className="text-md cursor-pointer hover:font-bold w-[18rem] hover:text-amber-200 transition-all duration-300 ">
                    {p.description}
                  </p>
                  <p className="text-md hover:font-bold hover:text-amber-200 transition-all duration-300 cursor-pointer">
                    Location: {p.location}
                  </p>
                  <p className="text-md hover:text-amber-200 transition-all duration-200 hover:font-bold cursor-pointer">
                    Available from: {p.available_from}
                  </p>
                  <Link
                    to={`/property/${p.id}`}
                    className="inline-block hover:scale-105 bg-blue-400 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition-all duration-200 mt-3 mb-1"
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </>
  );
}
