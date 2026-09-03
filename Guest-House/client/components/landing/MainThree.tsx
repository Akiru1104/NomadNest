"use client";

const rooms = [
  {
    image: "/Double1-1.jpg",
    name: "Double Room 1",
    description: "A bright private room for couples or solo travelers.",
    detail: "Comfortable double bed",
  },
  {
    image: "/Double2-1.jpg",
    name: "Double Room 2",
    description: "A welcoming private room with room to settle in.",
    detail: "Comfortable double bed",
  },
  {
    image: "/Deluxe1.jpg",
    name: "Deluxe Room",
    description: "A polished, quiet room for a more relaxed city stay.",
    detail: "Extra comfort and space",
  },
  {
    image: "/Budjet1.jpg",
    name: "Budget Room",
    description: "A simple, comfortable choice for practical travelers.",
    detail: "Good value for your stay",
  },
];

const facilities = [
  ["01", "Shared spaces", "Relax and connect with other guests in our welcoming common areas."],
  ["02", "Fast Wi-Fi", "Stay connected in your room and throughout the guest house."],
  ["03", "Central location", "Walk easily to restaurants, shops, Sukhbaatar Square, and transport."],
  ["04", "Warm hospitality", "Local recommendations and thoughtful help whenever you need it."],
];

export const MainThree = () => {
  return (
    <section id="gallery" className="w-full bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#9A6A3A]">
            Stay your way
          </p>
          <h2 className="text-3xl font-bold text-[#1F2937] sm:text-5xl">
            Rooms made for easy travel.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#6B7280] sm:text-base">
            Choose a comfortable base in central Ulaanbaatar, then make the city your own.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room) => (
            <article key={room.name} className="overflow-hidden rounded-2xl bg-[#F8F5EF] shadow-sm ring-1 ring-[#E8DED2]">
              <img src={room.image} alt={room.name} className="h-56 w-full object-cover sm:h-64" />
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-[#1F2937]">{room.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{room.description}</p>
                <p className="mt-4 text-sm font-semibold text-[#9A6A3A]">{room.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-[#E8DED2] pt-12 sm:mt-24 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#9A6A3A]">
                Around the house
              </p>
              <h2 className="text-3xl font-bold leading-tight text-[#1F2937] sm:text-4xl">
                The little things make the stay feel easy.
              </h2>
            </div>
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {facilities.map(([number, title, description]) => (
                <div key={number}>
                  <p className="text-sm font-semibold text-[#9A6A3A]">{number}</p>
                  <h3 className="mt-2 text-lg font-bold text-[#1F2937]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
