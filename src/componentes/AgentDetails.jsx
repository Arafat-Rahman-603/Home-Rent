import React from "react";
import { useParams, Link } from "react-router-dom";
import { useUser, SignIn } from "@clerk/clerk-react";

// --- Static agent data (same as Agent page) ---
const agents = [
  {
    id: 1,
    name: "John Smith",
    experienceYears: 8,
    totalClients: 120,
    rating: 4.7,
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sophia Johnson",
    experienceYears: 5,
    totalClients: 95,
    rating: 4.5,
    avatar:
      "https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=612x612&w=0&k=20&c=n9yulMNKdIYIQC-Qns8agFj6GBDbiKyPRruaUTh4MKs=",
  },
  {
    id: 3,
    name: "Michael Brown",
    experienceYears: 10,
    totalClients: 200,
    rating: 4.9,
    avatar:
      "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?cs=srgb&dl=pexels-teddyjmodel-2955376.jpg&fm=jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    experienceYears: 6,
    totalClients: 110,
    rating: 4.6,
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop",
  },
];

export default function AgentDetails() {
  const { user } = useUser();
  const { id } = useParams();
  const agent = agents.find((a) => a.id === parseInt(id));

  // --- Check if user is logged in ---
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Please login to view agent details
          </h2>
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </div>
      </div>
    );
  }

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Agent Not Found
          </h2>
          <Link
            to="/agents"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Back to Agents
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-300 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">Agent Profile</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <img
              src={agent.avatar}
              alt={agent.name}
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800">{agent.name}</h2>
            <p className="text-gray-600 mb-4">Real Estate Agent</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-500 text-sm">Experience</p>
                <p className="text-xl font-semibold">
                  {agent.experienceYears} years
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-500 text-sm">Clients</p>
                <p className="text-xl font-semibold">{agent.totalClients}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-gray-500 text-sm">Rating</p>
                <p className="text-xl font-semibold">{agent.rating}/5</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <a
                href={`tel:01609611399`}
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold text-center"
              >
                Call
              </a>
              <a
                href={`mailto:arafat.rahman.6003@gmail.com`}
                className="bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold text-center"
              >
                Email
              </a>
              <button
                disabled
                className="bg-green-500 opacity-35 hover:bg-green-600 text-white py-3 rounded-lg font-semibold text-center"
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link
            to="/agents"
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            ← Back to Agents
          </Link>
        </div>
      </div>
    </div>
  );
}
