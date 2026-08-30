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
      className="w-full bg-[#F8F5EF] flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-4xl md:text-5xl font-bold text-[#1F2937]">
            Why Stay With Us?
          </p>

          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto mt-5">
            Everything you need for a comfortable, relaxing, and memorable stay
            in downtown Ulaanbaatar.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>

              <h3 className="text-2xl font-bold text-[#1F2937] mb-4">
                {feature.title}
              </h3>

              <p className="text-[#6B7280] leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};