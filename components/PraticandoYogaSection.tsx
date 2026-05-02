"use client";

import Image from "next/image";

interface Practice {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

const practices: Practice[] = [
  {
    title: "Hatha Yoga",
    description: "Gentle pace, focus on posture and breath control.",
    imageSrc: "/PraticandoYoga_image_0.png",
    alt: "Woman doing Hatha yoga pose",
  },
  {
    title: "Vinyasa Flow",
    description: "Dynamic sequences linking breath with movement.",
    imageSrc: "/PraticandoYoga_image_01.png",
    alt: "Person in Vinyasa flow pose",
  },
  {
    title: "Yin Yoga",
    description: "Deep stretches, long holds for connective tissues.",
    imageSrc: "/PraticandoYoga_image_03.png",
    alt: "Person practicing Yin yoga",
  },
  {
    title: "Ashtanga Yoga",
    description: "Physically demanding, set series of poses.",
    imageSrc: "/PraticandoYoga_image_04.png",
    alt: "Person doing Ashtanga yoga",
  },
];

export default function PracticeSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black font-['Syncopate',sans-serif] tracking-normal">
            Choose Your Practice
          </h2>
          <p className="text-gray-500 text-base md:text-lg mt-4 font-['Inter',sans-serif]">
            We offer different yoga styles for your growth and comfort.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {practices.map((practice) => (
            <div
              key={practice.title}
              className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
              style={{ minHeight: "476px" }}
            >
              {/* Image with gradient overlay */}
              <div className="relative w-full h-full min-h-[476px]">
                <Image
                  src={practice.imageSrc}
                  alt={practice.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Text content (bottom aligned) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-xl font-bold font-['Lato',sans-serif] mb-2">
                  {practice.title}
                </h3>
                <p className="text-sm font-['Inter',sans-serif] text-gray-100 leading-relaxed">
                  {practice.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
