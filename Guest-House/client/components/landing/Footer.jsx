export const Footer = () => {
  return (
    <footer className="w-full bg-[#1F2A24] border-t border-[#344238] px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-bold text-white">
            NomadNest Guest House
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-7 text-[#C9D1C4]">
            Comfortable stay in the heart of Ulaanbaatar, Mongolia.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9CAF88]">
            Contact
          </p>
          <div className="space-y-3 text-sm text-[#C9D1C4]">
            <p>
              📍{" "}
              <a
                href="https://maps.app.goo.gl/fx9Xjq8sXRukLYvc8"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white"
              >
                View our location on Google Maps
              </a>
            </p>
            <p>
              💬 WhatsApp:{" "}
              <a
                href="https://wa.me/97680005660"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-white"
              >
                +976 8000 5660 — message us directly
              </a>
            </p>
            <p>✉️ Nomadnest99@gmail.com</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9CAF88]">
            Quick Links
          </p>
          <div className="flex flex-col gap-3 text-sm text-[#C9D1C4]">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#gallery" className="hover:text-white transition">
              Rooms
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-[#344238] pt-6 text-center text-xs text-[#9CA79A]">
        © 2026 NomadNest Guest House. All rights reserved.
      </div>
    </footer>
  );
};
