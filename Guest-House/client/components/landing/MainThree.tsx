"use client";

import { motion } from "framer-motion";

const rooms = [
  {
    id: 1,
    image: "/room1.jpg",
    name: "Double Room",
    beds: "1 double bed",
  },
  {
    id: 2,
    image: "/room2.jpg",
    name: "Budget Twin Room",
    beds: "4 single beds",
  },
  {
    id: 3,
    image: "/room3.jpg",
    name: "Deluxe Single Room",
    beds: "1 single bed",
  },
];

export const MainThree = () => {
  return (
    <section
      id="gallery"
      className="w-full overflow-hidden bg-white py-24"
    >
      <div className="flex flex-col items-center space-y-4 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937]">
          Our Rooms
        </h2>

        <p className="text-[#6B7280] max-w-2xl">
          Choose from clean, comfortable, and affordable rooms designed for
          solo travelers, couples, and groups.
        </p>
      </div>

      <div className="flex justify-center mt-16">
        <div className="relative overflow-hidden w-full max-w-7xl">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {[...rooms, ...rooms].map((room, index) => (
              <div
                key={index}
                className="min-w-[320px] rounded-3xl overflow-hidden shadow-xl bg-white"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-[320px] h-[240px] object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1F2937]">
                    {room.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#6B7280]">🛏️ {room.beds}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
