import React from 'react';
import { useNavigate } from 'react-router-dom';

const horarios = [
  {
    title: "Football",
    start: "29/01/2024",
    plan: "2 times/week",
    today: "2 h",
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Reading",
    start: "08/12/2023",
    plan: "1 h/day",
    today: "0.5 h",
    color: "from-teal-600 to-orange-400"
  },
  {
    title: "Music",
    start: "08/12/2023",
    plan: "1.5 h/2 days",
    today: "40 min",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Cooking",
    start: "15/07/2016",
    plan: "3 times/2 days",
    today: "3.5 h",
    color: "from-indigo-600 to-orange-500"
  },
  {
    title: "Photography",
    start: "30/11/2020",
    plan: "1 time/week",
    today: "2 h",
    color: "from-yellow-400 to-gray-400"
  },
  {
    title: "Baseball",
    start: "29/01/2024",
    plan: "1 time/week",
    today: "2 h",
    color: "from-gray-400 to-teal-500"
  },
];

const LobbyEvents = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10 min-h-screen bg-[#f9fafb]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Mis Eventos.</h2>
        <button
          onClick={() => navigate("/horarios/nuevo")}
          className="text-indigo-700 hover:underline text-sm font-medium"
        >
          CREAR NUEVO
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {horarios.map((h, i) => (
          <div
            key={i}
            className={`rounded-2xl p-5 text-white shadow-lg bg-gradient-to-br ${h.color}`}
          >
            <h3 className="text-lg font-bold">{h.title}</h3>
            <p className="text-xs mt-2">Doing since</p>
            <p className="text-sm font-semibold">{h.start}</p>
            <p className="text-xs mt-2">Current plan</p>
            <p className="text-sm font-semibold">{h.plan}</p>
            <p className="mt-4 font-medium">Today : <span className="font-bold">{h.today}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LobbyEvents;
