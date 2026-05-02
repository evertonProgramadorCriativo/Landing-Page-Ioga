import Image from "next/image";
const cards = [
  {
    id: 1,
    image: "/uil-flower.png",
    title: "Certified Instructors",
    description: "Expert guidance for your practice",
  },
  {
    id: 2,
    image: "/uil-award.png",
    title: "Eco-friendly Materials",
    description: "Sustainable and natural",
  },
  {
    id: 3,
    image: "/Frame-33.png",
    title: "Multiple Yoga Styles",
    description: "Find your perfect practice",
  },
  {
    id: 4,
    image: "/chicara-cafe.png",
    title: "Relaxation Zone",
    description: "Tea and community space",
  },
];

export default function CertificadosSection() {
  return (
    <section className="h-370 lg:h-238.25 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-3xl  lg:text-6xl flex text-center leading-18  font-semibold text-black  font-syncopate">
          The Santosha <br /> Yoga Space{" "}
        </h2>
        <p className="text-black   text-2xl   lg:text-3xl mt-12 mb-4 text-black-600 line-height-6 p-0 lg:px-74.25 px-0 text-center">
          santosha is a modern yoga studio where everyone can find their perfect
          practice. We&apos;ve created a welcoming space with professional
          instructors to help you achieve harmony, strength, and flexibility.
          Our classes suit all levels ,from beginners to advanced practitioners.
        </p>

        <div
          className="flex  items-center flex-col justify-between lg:flex-row lg:justify-around "
          style={{ width: "80%", marginTop: "5%" }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center justify-center mb-14 last:mb-0 lg:mb-0"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={80}
                height={80}
                className="rounded-lg"
              />

              <h3 className="text-xl font-semibold mt-4 text-center">
                {card.title}
              </h3>

              <span className="text-gray-400 text-center">
                {card.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
