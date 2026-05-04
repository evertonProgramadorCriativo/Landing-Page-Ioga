"use client";

// Importa React e hook de estado
import React, { useState } from "react";

// Ícones usados nos cards das aulas
import { Wind, Sun, Flower2, Brain } from "lucide-react";

// Lista de filtros das aulas
const FILTERS = [
  "All Classes",
  "Vinyasa Flow",
  "Hatha Yoga",
  "Beginner Yoga",
  "Meditation",
];

// Dias da semana
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Horários disponíveis
const TIME_SLOTS = ["7:00 AM", "9:00 AM", "5:00 PM", "7:00 PM"];

// Tipos permitidos de aulas
type ClassType = "Meditation" | "Hatha Yoga" | "Beginner Yoga" | "Vinyasa Flow";

// Estrutura de cada aula
interface YogaClass {
  type: ClassType;
  instructor: string;
  day: string;
  time: string;
}

// Cores dos cards por tipo de aula
const CLASS_COLORS: Record<ClassType, string> = {
  Meditation: "bg-purple-100 border-purple-200 text-purple-700",
  "Hatha Yoga": "bg-blue-100 border-blue-200 text-blue-700",
  "Beginner Yoga": "bg-yellow-100 border-yellow-200 text-yellow-700",
  "Vinyasa Flow": "bg-green-100 border-green-200 text-green-700",
};

// Cor do nome do instrutor
const INSTRUCTOR_COLORS: Record<ClassType, string> = {
  Meditation: "text-purple-500",
  "Hatha Yoga": "text-blue-500",
  "Beginner Yoga": "text-yellow-600",
  "Vinyasa Flow": "text-green-600",
};

// Informações extras das aulas
const CLASS_DESCRIPTIONS: Record<
  ClassType,
  { icon: React.ReactNode; desc: string }
> = {
  "Vinyasa Flow": {
    icon: <Wind size={18} />,
    desc: "Dynamic sequence of poses synchronized with breath, building strength and flexibility.",
  },

  "Hatha Yoga": {
    icon: <Sun size={18} />,
    desc: "Traditional approach focusing on basic postures and breathing techniques.",
  },

  "Beginner Yoga": {
    icon: <Flower2 size={18} />,
    desc: "Perfect introduction to yoga with fundamental poses and gentle movements.",
  },

  Meditation: {
    icon: <Brain size={18} />,
    desc: "Guided sessions for mental clarity, stress relief, and inner peace.",
  },
};

// Agenda semanal das aulas
const SCHEDULE: YogaClass[] = [
  // 7:00 AM
  {
    type: "Meditation",
    instructor: "John D.",
    day: "Mon",
    time: "7:00 AM",
  },

  {
    type: "Hatha Yoga",
    instructor: "Maya R.",
    day: "Tue",
    time: "7:00 AM",
  },

  {
    type: "Beginner Yoga",
    instructor: "Lisa P.",
    day: "Wed",
    time: "7:00 AM",
  },

  {
    type: "Meditation",
    instructor: "John D.",
    day: "Thu",
    time: "7:00 AM",
  },

  {
    type: "Hatha Yoga",
    instructor: "Maya R.",
    day: "Fri",
    time: "7:00 AM",
  },

  {
    type: "Hatha Yoga",
    instructor: "Maya R.",
    day: "Sat",
    time: "7:00 AM",
  },

  {
    type: "Beginner Yoga",
    instructor: "Lisa P.",
    day: "Sun",
    time: "7:00 AM",
  },

  // 9:00 AM
  {
    type: "Beginner Yoga",
    instructor: "Lisa P.",
    day: "Mon",
    time: "9:00 AM",
  },

  {
    type: "Beginner Yoga",
    instructor: "Lisa P.",
    day: "Tue",
    time: "9:00 AM",
  },

  {
    type: "Vinyasa Flow",
    instructor: "Sarah M.",
    day: "Wed",
    time: "9:00 AM",
  },

  {
    type: "Hatha Yoga",
    instructor: "Maya R.",
    day: "Thu",
    time: "9:00 AM",
  },

  {
    type: "Vinyasa Flow",
    instructor: "Sarah M.",
    day: "Fri",
    time: "9:00 AM",
  },

  {
    type: "Beginner Yoga",
    instructor: "Lisa P.",
    day: "Sat",
    time: "9:00 AM",
  },

  // 5:00 PM
  {
    type: "Hatha Yoga",
    instructor: "Maya R.",
    day: "Mon",
    time: "5:00 PM",
  },

  {
    type: "Hatha Yoga",
    instructor: "Maya R.",
    day: "Sat",
    time: "5:00 PM",
  },

  {
    type: "Meditation",
    instructor: "John D.",
    day: "Sun",
    time: "5:00 PM",
  },

  // 7:00 PM
  {
    type: "Vinyasa Flow",
    instructor: "Sarah M.",
    day: "Wed",
    time: "7:00 PM",
  },

  {
    type: "Meditation",
    instructor: "John D.",
    day: "Thu",
    time: "7:00 PM",
  },
];

export default function WeeklySchedule() {
  // Estado do filtro ativo
  const [activeFilter, setActiveFilter] = useState("All Classes");

  // Busca aula por dia e horário
  const getClass = (day: string, time: string): YogaClass | undefined =>
    SCHEDULE.find(
      (c) =>
        c.day === day &&
        c.time === time &&
        // Filtra pelo botão selecionado
        (activeFilter === "All Classes" || c.type === activeFilter),
    );

  return (
    <section
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      style={{
        // Imagem de fundo
        backgroundImage: "url('/bgh.png')",

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Camada escura sobre o fundo */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <h2
            className="text-4xl font-normal text-gray-900 mb-4"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Weekly Class Schedule
          </h2>

          <p
            className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Quicksand', sans-serif" }}
          >
            Join our expert-led yoga classes designed for all levels. Find your
            perfect practice time and enhance your mind-body connection.
          </p>
        </div>

        {/* Botões de filtro */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              // Atualiza filtro
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm border transition-all duration-200 cursor-pointer ${
                activeFilter === f
                  ? // Estilo do botão ativo
                    "bg-amber-600 text-white border-amber-600 shadow"
                  : // Estilo padrão
                    "bg-white text-gray-600 border-gray-200 hover:border-amber-400"
              }`}
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Tabela de horários */}
        <div className="bg-white/90 rounded-2xl shadow-lg overflow-x-auto mb-10">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr>
                <th className="w-24 p-4" />

                {/* Dias da semana */}
                {DAYS.map((d) => (
                  <th
                    key={d}
                    className="text-center py-4 px-2 text-gray-700 font-normal text-base"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {d}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {/* Linhas por horário */}
              {TIME_SLOTS.map((time) => (
                <tr key={time} className="border-t border-gray-100">
                  {/* Horário lateral */}
                  <td
                    className="text-right pr-4 py-4 text-sm text-gray-400 whitespace-nowrap align-top pt-5"
                    style={{ fontFamily: "'Quicksand', sans-serif" }}
                  >
                    {time}
                  </td>

                  {/* Colunas dos dias */}
                  {DAYS.map((day) => {
                    // Busca aula atual
                    const cls = getClass(day, time);

                    return (
                      <td key={day} className="p-1.5 align-top">
                        {cls ? (
                          // Card da aula
                          <div
                            className={`rounded-xl border p-3 min-h-[70px] ${CLASS_COLORS[cls.type]}`}
                          >
                            <p
                              className="text-sm font-semibold leading-tight"
                              style={{ fontFamily: "'Quicksand', sans-serif" }}
                            >
                              {cls.type}
                            </p>

                            <p
                              className={`text-xs mt-1 ${INSTRUCTOR_COLORS[cls.type]}`}
                              style={{ fontFamily: "'Quicksand', sans-serif" }}
                            >
                              {cls.instructor}
                            </p>
                          </div>
                        ) : (
                          // Espaço vazio sem aula
                          <div className="min-h-[70px]" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards informativos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(
            Object.entries(CLASS_DESCRIPTIONS) as [
              ClassType,
              { icon: React.ReactNode; desc: string },
            ][]
          ).map(([type, { icon, desc }]) => (
            <div
              key={type}
              className="bg-white/90 rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Título do card */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-amber-500">{icon}</span>

                <h3
                  className="text-base font-semibold text-gray-800"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {type}
                </h3>
              </div>

              {/* Descrição da aula */}
              <p
                className="text-sm text-gray-500 leading-relaxed"
                style={{ fontFamily: "'Quicksand', sans-serif" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
