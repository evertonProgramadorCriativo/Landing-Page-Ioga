import React from "react";
import Image from "next/image";

const AtmosphereSection: React.FC = () => {
  // Lista de imagens para os cards, com src e alt para acessibilidade
  const cardImages = [
    {
      src: "/AtmosferaSection.png",
      alt: "Yoga pose in nature",
    },
    {
      src: "/AtmosferaSection1.png",
      alt: "Woman meditating in zen pose",
    },
    {
      src: "/AtmosferaSection2.png",
      alt: "Yoga studio with candles",
    },
  ];

  return (
    <section
      className="relative w-full min-h-[970px] bg-cover bg-center bg-no-repeat py-16 md:py-24"
      style={{
        backgroundImage: "url('/PraticandoYoga_image_03.png')",
      }}
    >
      {/* Background overlay  */}
      <div className="absolute inset-0 bg-black/40 z-0" aria-hidden="true" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Syncopate', sans-serif" }}
          >
            atmosphere
          </h2>
          <p
            className="text-base md:text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            santosha is a modern yoga studio where everyone can find their
            perfect practice. We&apos;ve created a welcoming space with
            professional instructors to help you achieve harmony, strength, and
            flexibility. Our classes suit all levels, from beginners to advanced
            practitioners.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {cardImages.map((image, index) => (
            <div
              key={index}
              className="w-full max-w-[467px] overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full h-[300px] md:h-[480px] lg:h-[550px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`
                    object-cover rounded-2xl
                    ${index === 1 ? "transform rotate-0" : ""}
                  `}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtmosphereSection;
