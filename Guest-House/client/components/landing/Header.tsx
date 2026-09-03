"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { DesktopNav } from "./header/DesktopNav";
import { Menu } from "./header/Menu";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navigate = (id: string) => {
    if (id === "home") {
      router.push("/");
      setOpen(false);
      return;
    }

    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-3 sm:top-5 sm:px-5">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 rounded-3xl border border-[#E8E2D8] bg-[#F8F6F2]/95 px-4 py-3 shadow-xl backdrop-blur-lg sm:h-20 sm:rounded-full sm:px-8 sm:py-0">

        {/* Logo */}
        <button
          onClick={() => navigate("home")}
          className="text-left"
        >
          <h1 className="text-sm font-bold leading-tight tracking-wide text-[#1F2A24] sm:text-xl md:text-2xl">
            NomadNest Guest House
          </h1>

          <p className="text-[8px] uppercase tracking-[0.18em] text-[#6F7D5C] sm:text-[11px] sm:tracking-[0.3em]">
            Ulaanbaatar · Mongolia
          </p>
        </button>

        {/* Desktop Menu */}
        <DesktopNav onNavigate={navigate} />

        {/* Book Button */}
        <a
          href="#booking"
          className="hidden rounded-full bg-[#6F7D5C] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#59694B] hover:shadow-lg md:block"
        >
          Book Now
        </a>

        {/* Responsive menu */}
        <button
          onClick={() => setOpen(!open)}
          className="shrink-0 rounded-full bg-[#6F7D5C] px-4 py-2 text-sm text-white md:hidden"
        >
          Menu
        </button>
      </div>

      <Menu
        open={open}
        onNavigate={navigate}
        onClose={() => setOpen(false)}
      />
    </header>
  );
};
