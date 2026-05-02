"use client";

import Image from "next/image";

interface Teacher {
  name: string;
  description: string;
  imageSrc: string;
  alt: string;
}

const teachers: Teacher[] = [
  {
    name: "Max L.",
    description: "Certified Vinyasa Flow and meditation instructor.",
    imageSrc: "/Max L.png",
    alt: "Portrait of Max L., yoga instructor",
  },
  {
    name: "Maya R.",
    description: "Certified Hatha yoga and stretching instructor.",
    imageSrc: "/Maya R.png",
    alt: "Portrait of Maya R., yoga instructor",
  },
  {
    name: "Lisa P.",
    description:
      "Certified Beginner yoga, Hatha yoga and meditation instructor",
    imageSrc: "/Lisa P.png",
    alt: "Portrait of Lisa P., yoga instructor",
  },
];

export default function TimeSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black font-['Syncopate',sans-serif] tracking-normal">
            Our Teachers
          </h2>
          <p className="text-gray-500 text-base md:text-lg mt-4 font-['Inter',sans-serif]">
            Experienced and inspiring instructors with years of practice.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-18 justify-items-center">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="bg-white rounded-lg shadow-md w-full max-w-89 flex flex-col items-center pt-8 pb-6 px-4 text-center transition-transform hover:shadow-lg"
            >
              <div className="relative w-72 h-72">
                <Image
                  src={teacher.imageSrc}
                  alt={teacher.alt}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-black font-['Lato',sans-serif]">
                {teacher.name}
              </h3>
              <p className="mt-2 text-gray-500 text-base font-['Inter',sans-serif] max-w-62 mx-auto">
                {teacher.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
