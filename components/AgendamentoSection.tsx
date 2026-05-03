"use client";

import Image from "next/image";
import { useState } from "react";
interface YogaClass {
  id: string;
  type: string;
  typeColor: string;
  typeBg: string;
  duration: string;
  title: string;
  time: string;
  teacher: string;
  teacherAvatar: string;
}

const classes: YogaClass[] = [
  {
    id: "morning-flow",
    type: "Vinyasa Flow",
    typeColor: "text-emerald-800",
    typeBg: "bg-emerald-50",
    duration: "60 mins",
    title: "Morning Flow",
    time: "7:00 AM - 8:00 AM",
    teacher: "Max L.",
    teacherAvatar: "/Max L.png",
  },
  {
    id: "mindful-balance",
    type: "Hatha Yoga",
    typeColor: "text-blue-800",
    typeBg: "bg-blue-50",
    duration: "75 mins",
    title: "Mindful Balance",
    time: "10:00 AM - 11:15 AM",
    teacher: "Maya R.",
    teacherAvatar: "/Maya R.png",
  },
  {
    id: "yoga-foundations",
    type: "Beginner Yoga",
    typeColor: "text-orange-800",
    typeBg: "bg-orange-50",
    duration: "90 mins",
    title: "Yoga Foundations",
    time: "2:00 PM - 3:30 PM",
    teacher: "Lisa P.",
    teacherAvatar: "/Lisa P.png",
  },
  {
    id: "evening-meditation",
    type: "Meditation",
    typeColor: "text-indigo-800",
    typeBg: "bg-indigo-50",
    duration: "45 mins",
    title: "Evening Meditation",
    time: "6:00 PM - 6:45 PM",
    teacher: "Max L.",
    teacherAvatar: "/Max L.png",
  },
];

export default function ScheduleSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Classes");

  // filtra os cards
  const filteredClasses =
    selectedCategory === "All Classes"
      ? classes
      : classes.filter((cls) => cls.type === selectedCategory);

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 px-4 md:px-8"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(79, 70, 61, 0.9), rgba(79, 70, 61, 0.4)), url('/background-schedule.png')`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-white font-['Quicksand',sans-serif]">
            Today’s Class Schedule
          </h2>
          <p className="text-white/80 text-base mt-3 max-w-2xl mx-auto font-['Inter',sans-serif]">
            Join our expert-led yoga classes designed for all levels. Find your
            perfect practice time and enhance your mind-body connection.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory("All Classes")}
            className={`px-5 py-2 rounded-full bg-amber-700   text-sm font-medium font-['Quicksand',sans-serif] transition hover:bg-amber-800 ${
              selectedCategory === "All Classes"
                ? "bg-amber-700 text-white"
                : "bg-gray-300 text-black hover:bg-gray-200"
            }`}
          >
            All Classes
          </button>
          <button
            onClick={() => setSelectedCategory("Vinyasa Flow")}
            className={`px-5 py-2 rounded-full   text-sm font-medium font-['Quicksand',sans-serif] transition hover:bg-green-200 ${
              selectedCategory === "Vinyasa Flow"
                ? "bg-amber-700  text-white"
                : " bg-gray-200 text-black hover:bg-gray-200"
            }`}
          >
            Vinyasa Flow
          </button>
          <button
            onClick={() => setSelectedCategory("Meditation")}
            className={`px-5 py-2 rounded-full   text-sm font-medium font-['Quicksand',sans-serif] transition hover:bg-green-200 ${
              selectedCategory === "Meditation"
                ? "bg-amber-700  text-white"
                : " bg-gray-200 text-black hover:bg-gray-200"
            }`}
          >
            Meditation
          </button>
          <button
            onClick={() => setSelectedCategory("Hatha Yoga")}
            className={`px-5 py-2 rounded-full    text-sm font-medium font-['Quicksand',sans-serif] transition hover:bg-green-200 ${
              selectedCategory === "Hatha Yoga"
                ? "bg-amber-700  text-white"
                : " bg-gray-200 text-black hover:bg-gray-200"
            }`}
          >
            Hatha Yoga
          </button>
          <button
            onClick={() => setSelectedCategory("Beginner Yoga")}
            className={`px-5 py-2 rounded-full    text-sm font-medium font-['Quicksand',sans-serif] transition hover:bg-green-200 ${
              selectedCategory === "Beginner Yoga"
                ? "bg-amber-700  text-white"
                : " bg-gray-200 text-black hover:bg-gray-200"
            }`}
          >
            Beginner Yoga
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* mapeia os cards filtrados */}
          {filteredClasses.map((cls) => (
            <div
              key={cls.id}
              className="bg-white rounded-xl shadow-sm p-5 flex flex-col transition hover:shadow-md"
            >
              {/* Tag and duration */}
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`${cls.typeBg} ${cls.typeColor} text-xs font-medium px-3 py-1 rounded-full font-['Quicksand',sans-serif]`}
                >
                  {cls.type}
                </span>
                <span className="text-gray-500 text-sm font-['Quicksand',sans-serif]">
                  {cls.duration}
                </span>
              </div>

              {/* Class title */}
              <h3 className="text-xl font-medium text-gray-900 font-['Quicksand',sans-serif] mb-2">
                {cls.title}
              </h3>

              {/* Time with icon */}
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4 font-['Quicksand',sans-serif]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>{cls.time}</span>
              </div>

              {/* Teacher */}
              <div className="flex items-center gap-2 mb-5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={cls.teacherAvatar}
                    alt={cls.teacher}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-gray-500 text-sm font-['Quicksand',sans-serif]">
                  {cls.teacher}
                </span>
              </div>

              {/* Book button */}
              <button className="w-full border-2 border-gray-300 text-gray-400 text-center py-2 rounded-lg text-sm font-medium font-['Quicksand',sans-serif] transition hover:border-amber-700 hover:text-amber-700 mt-auto">
                Book Class
              </button>
            </div>
          ))}
        </div>

        {/* See all classes link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="text-white underline text-sm font-['Inter',sans-serif] hover:text-white/80 transition"
          >
            See all classes
          </a>
        </div>
      </div>
    </section>
  );
}
