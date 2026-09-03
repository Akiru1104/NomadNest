"use client";

const rooms = [
  {
    images: ["/Double1-1.jpg", "/Double1-2.jpg"],
    name: "Double Room 1",
    description: "A bright private room for couples or solo travelers.",
    detail: "Comfortable double bed",
    price: "$39 / night",
  },
  {
    images: ["/Double2-1.jpg", "/Double2-2.jpg", "/Double2-3.jpg", "/Double2-4.jpg"],
    name: "Double Room 2",
    description: "A welcoming private room with room to settle in.",
    detail: "Comfortable double bed",
    price: "$39 / night",
  },
  {
    images: ["/Deluxe1.jpg", "/Deluxe2.jpg"],
    name: "Deluxe Room",
    description: "A polished, quiet room for a more relaxed city stay.",
    detail: "Extra comfort and space",
    price: "$31 / night",
  },
  {
    images: ["/Budjet1.jpg", "/Budjet2.jpg", "/Budjet3.jpg", "/Budjet4.jpg", "/Budjet5.jpg"],
    name: "Budget Room",
    description: "A simple, comfortable choice for practical travelers.",
    detail: "Good value for your stay",
    price: "$23 / night",
  },
];

const facilities = [
  ["01", "Shared spaces", "Relax and connect with other guests in our welcoming common areas."],
  ["02", "Fast Wi-Fi", "Stay connected in your room and throughout the guest house."],
  ["03", "Central location", "Walk easily to restaurants, shops, Sukhbaatar Square, and transport."],
  ["04", "Warm hospitality", "Local recommendations and thoughtful help whenever you need it."],
];

const allGalleryImages = [
  "/Double1-1.jpg",
  "/Share1.jpg",
  "/Deluxe1.jpg",
  "/Share10.jpg",
  "/Budjet1.jpg",
  "/Double2-1.jpg",
  "/Share3.jpg",
  "/Deluxe2.jpg",
  "/Share12.jpg",
  "/Budjet2.jpg",
  "/Double1-2.jpg",
  "/Share5.jpg",
  "/Double2-2.jpg",
  "/Share14.jpg",
  "/Budjet3.jpg",
  "/Share6.jpg",
  "/Double2-3.jpg",
  "/Share16.jpg",
  "/Budjet4.jpg",
  "/Share7.jpg",
  "/Double2-4.jpg",
  "/Share9.jpg",
  "/Budjet5.jpg",
  "/Share8.jpg",
  "/Share11.jpg",
  "/Share13.jpg",
  "/Share15.jpg",
];

const galleryRows = [allGalleryImages.slice(0, 14), allGalleryImages.slice(14)];

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

        <div className="scrollbar-hide mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
          {rooms.map((room) => (
            <article key={room.name} className="w-[86%] shrink-0 snap-center overflow-hidden rounded-2xl bg-[#F8F5EF] shadow-sm ring-1 ring-[#E8DED2] sm:w-auto sm:shrink sm:snap-none">
              <div className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto">
                {room.images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${room.name} photo ${index + 1}`}
                    className="h-56 w-full min-w-full snap-center object-cover sm:h-64"
                  />
                ))}
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-[#1F2937]">{room.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{room.description}</p>
                <p className="mt-4 text-sm font-semibold text-[#9A6A3A]">{room.detail}</p>
                <p className="mt-3 text-lg font-bold text-[#1F2937]">{room.price}</p>
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

        <div className="relative mt-16 overflow-hidden space-y-4">
          {galleryRows.map((row, rowIndex) => {
            const repeatedRow = [...row, ...row];

            return (
              <div key={rowIndex} className="overflow-hidden">
                <div className={`gallery-track${rowIndex === 1 ? "-reverse" : ""} flex w-max gap-4 sm:gap-5`}>
                  {repeatedRow.map((image, imageIndex) => (
                    <figure
                      key={`${image}-${imageIndex}`}
                      className="h-40 w-56 shrink-0 overflow-hidden rounded-2xl bg-[#F8F5EF] p-1.5 shadow-sm ring-1 ring-[#E8DED2] sm:h-52 sm:w-72"
                    >
                      <img
                        src={image}
                        alt={`NomadNest shared space ${imageIndex + 1}`}
                        className="h-full w-full rounded-xl object-cover"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
