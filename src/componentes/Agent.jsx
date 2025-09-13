import { Link } from "react-router-dom";

export default function Agent() {
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

  return (
    <>
      <div className="bg-blue-300 border-t-2 border-t-white">
        <div className="max-w-5xl mx-auto px-5 py-5 flex items-center justify-between gap-4 flex-wrap">
          <h1 className="text-[3rem] font-bold text-white">Our Agents</h1>
          <Link
            to="/become-agent"
            className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-2xl hover:bg-amber-300 hover:text-white transition-all hover:scale-105"
          >
            Become an Agent
          </Link>
        </div>
      </div>
      <main className="p-5 text-blue-300 bg-blue-300 flex justify-center">
        <div className="w-[80%] sm:w-[90%]">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="flex flex-col md:flex-row gap-5 mb-6 bg-white p-3 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all"
            >
              <img
                src={agent.avatar}
                alt={agent.name}
                className="sm:h-35 h-max w-full sm:w-max rounded-lg"
              />
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <h1 className="text-[2rem] font-bold">{agent.name}</h1>
                  <Link
                    to={`/agents/${agent.id}`}
                    className="bg-blue-300 px-3 py-1 rounded-3xl hover:bg-amber-300 hover:text-white transition-all hover:scale-105 text-white font-semibold w-max h-max hidden md:block"
                  >
                    VIEW MORE
                  </Link>
                </div>
                <p className="text-[1.3rem] font-semibold flex gap-2">
                  Experience of{" "}
                  <span className="font-bold">{agent.experienceYears} years.</span>
                </p>
                <p className="text-[1.2rem] font-semibold flex gap-2">
                  Total Clients <span className="font-bold">{agent.totalClients}</span>
                </p>
                <p className="text-[1.1rem] font-semibold flex gap-2">
                  Rating <span className="font-bold">{agent.rating}/5</span>
                </p>
                <Link
                  to={`/agents/${agent.id}`}
                  className="bg-blue-300 px-3 py-1 rounded-3xl hover:bg-amber-300 hover:text-white transition-all hover:scale-105 text-white font-semibold w-max h-max block md:hidden mt-3"
                >
                  VIEW MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
