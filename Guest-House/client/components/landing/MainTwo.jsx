export const MainTwo = () => {
  const features = [
    {
      icon: "📍",
      title: "Prime Location",
      description:
        "Located in the heart of Ulaanbaatar, just minutes from Sukhbaatar Square, restaurants, shopping malls, and public transportation.",
    },
    {
      icon: "🛏️",
      title: "Comfortable Rooms",
      description:
        "Enjoy clean, modern, and comfortable rooms with free Wi-Fi, cozy beds, and everything you need for a relaxing stay.",
    },
    {
      icon: "❤️",
      title: "Friendly Hospitality",
      description:
        "Our welcoming team is always ready to help you experience the best of Mongolia with warm hospitality and local recommendations.",
    },
  ];

  return (
    <section
      id="about"
      className="flex w-full items-center justify-center bg-[#F8F5EF] px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="w-full max-w-7xl">
        {/* Section Title */}
        <div className="mb-10 text-center sm:mb-16">
          <p className="text-3xl font-bold text-[#1F2937] sm:text-4xl md:text-5xl">
            Why Stay With Us?
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#6B7280] sm:mt-5 sm:text-lg sm:leading-normal">
            Everything you need for a comfortable, relaxing, and memorable stay
            in downtown Ulaanbaatar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl sm:rounded-3xl sm:p-10"
            >
              <div className="mb-4 text-4xl sm:mb-6 sm:text-5xl">{feature.icon}</div>

              <h3 className="mb-3 text-xl font-bold text-[#1F2937] sm:mb-4 sm:text-2xl">
                {feature.title}
              </h3>

              <p className="text-sm leading-7 text-[#6B7280] sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};