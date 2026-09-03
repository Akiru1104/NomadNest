import React from "react";

export const MainOne = () => {
  return (
    <section className="relative flex min-h-[760px] w-full items-center justify-center overflow-hidden bg-[#F8F5EF] px-4 py-28 sm:min-h-[820px] sm:px-6 md:min-h-[920px] md:px-12 md:py-20">
      {/* Small-screen background */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="/test1.png"
          alt="NomadNest Guest House"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Desktop background */}
      <div className="absolute inset-0 -z-10 hidden md:block bg-[#F8F5EF]"></div>

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Text */}
        <div className="w-full space-y-6 text-center md:max-w-2xl md:space-y-8 md:text-left">
          <div className="space-y-4 md:space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6B98C] md:text-sm md:tracking-[0.25em] md:text-[#9A6A3A]">
              Downtown Ulaanbaatar
            </p>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-7xl md:text-[#1F2937]">
              Comfortable Stay <br className="hidden md:block" />
              in the Heart of Mongolia
            </h1>

            <p className="mx-auto max-w-xl text-sm leading-7 text-white/85 sm:text-base md:mx-0 md:text-lg md:text-[#4B5563] md:leading-relaxed">
              Welcome to NomadNest Guest House, a clean and cozy place to stay in
              central Ulaanbaatar. Enjoy friendly service, comfortable rooms,
              and easy access to the city’s main attractions.
            </p>
          </div>

          {/* Points */}
          <div className="flex flex-wrap justify-center gap-2 text-xs sm:gap-3 sm:text-sm md:justify-start">
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
              className="rounded-full bg-[#9A6A3A] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#7C522C] sm:px-8 sm:py-4 sm:text-base"
            >
              Book Now
            </a>

            <a
              href="#gallery"
              className="rounded-full border border-white/70 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base md:border-[#9A6A3A] md:text-[#9A6A3A] md:hover:bg-[#9A6A3A] md:hover:text-white"
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
              src="/test1.png"
              alt="NomadNest Guest House Room"
              className="w-full h-full object-cover transition-all duration-700 scale-105 hover:scale-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
