export default function HeroSection() {
  return (
    <section className="bg-[url(/image.png)] bg-cover bg-bottom-right lg:bg-top h-238.25 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-4xl lg:text-6xl leading-15  font-semibold text-white  font-syncopate">
          Yoga for Body & Mind
        </h1>
        <span className="text-white text-3xl lg:text-2xl mt-12 mb-4 text-white-600 line-height-6">
          Find balance in the heart of the city
        </span>
        <button
          className="mt-12 bg-transparent text-white"
          style={{
            border: "2px solid white",
            padding: "20px 92px",
            borderRadius: "88px",
            fontSize: "20px",
          }}
        >
          Book class
        </button>
      </div>
    </section>
  );
}
