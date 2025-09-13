import React from "react";
import { useNavigate } from "react-router-dom";

export default function Inputs() {
  const navigate = useNavigate()
  return (
    <main className="w-full h-max heroMain flex flex-col  pt-16 pb-20 md:px-10 px-2">
      <div className="space-y-2">
        <h1 className="md:text-7xl text-6xl font-bold text-white">Dream it.</h1>
        <h1 className="md:text-7xl text-5xl font-bold text-white">See it. Rent it.</h1>
      </div>

      <div className="relative mt-6 w-full md:w-135">
        <input
        onClick={() => navigate('/properties')}
          type="text"
          placeholder="Search homes by location..."
          className=" bg-white/30 backdrop-blur-[2px] text-white w-full h-13 rounded-full outline-0 text-2xl px-4 pr-12"
        />
        <button
          type="button"
          className="absolute top-1/2 right-4 -translate-y-1/2"
        >
          <lord-icon
            src="https://cdn.lordicon.com/wjyqkiew.json"
            trigger="hover"
            colors="primary:#121331,secondary:#66a1ee"
            className="h-8 w-8"
          ></lord-icon>
        </button>
      </div>
    </main>
  );
}
