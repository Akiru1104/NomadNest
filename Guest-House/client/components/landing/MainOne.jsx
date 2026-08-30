import React from "react";

export const MainOne = () => {
  return (
    <section className="relative w-full min-h-[920] flex items-center justify-center px-6 md:px-12 py-20 overflow-hidden bg-[#F8F5EF]">
      {/* Small-screen background */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="/guesthouse-hero.jpg"
          alt="NomadNest Guest House"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Desktop background */}
      <div className="absolute inset-0 -z-10 hidden md:block bg-[#F8F5EF]"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16 max-w-7xl w-full">
        {/* Text */}
        <div className="w-full md:max-w-2xl space-y-8 text-center md:text-left">
          <div className="space-y-5">
            <p className="text-sm text-[#9A6A3A] font-semibold tracking-[0.25em] uppercase">
              Downtown Ulaanbaatar
            </p>

            <h1 className="text-4xl md:text-7xl text-white md:text-[#1F2937] font-extrabold leading-[1.1] tracking-tight">
              Comfortable Stay <br className="hidden md:block" />
              in the Heart of Mongolia
            </h1>

            <p className="text-base md:text-lg text-white/85 md:text-[#4B5563] leading-relaxed max-w-xl mx-auto md:mx-0">
              Welcome to NomadNest Guest House, a clean and cozy place to stay in
              central Ulaanbaatar. Enjoy friendly service, comfortable rooms,
              and easy access to the city’s main attractions.
            </p>
          </div>

          {/* Points */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm">
            <span className="rounded-full bg-white/20 md:bg-white px-4 py-2 text-white md:text-[#374151] shadow-sm">
              Free Wi-Fi
            </span>
            <span className="rounded-full bg-white/20 md:bg-white px-4 py-2 text-white md:text-[#374151] shadow-sm">
              City Center
            </span>
            <span className="rounded-full bg-white/20 md:bg-white px-4 py-2 text-white md:text-[#374151] shadow-sm">
              Airport Transfer
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#booking"
              className="rounded-full bg-[#9A6A3A] px-8 py-4 text-white font-semibold shadow-lg hover:bg-[#7C522C] transition"
            >
              Book Now
            </a>

            <a
              href="#gallery"
              className="rounded-full border border-white/70 md:border-[#9A6A3A] px-8 py-4 text-white md:text-[#9A6A3A] font-semibold hover:bg-white/10 md:hover:bg-[#9A6A3A] md:hover:text-white transition"
            >
              View Gallery
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block w-full md:max-w-xl h-[600] relative group">
          <div className="absolute -inset-1 bg-[#D6B98C]/40 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

          <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden border border-white shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
            <img
              src="/guesthouse-hero.jpg"
              alt="NomadNest Guest House Room"
              className="w-full h-full object-cover transition-all duration-700 scale-105 hover:scale-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
