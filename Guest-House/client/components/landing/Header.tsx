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
    <header className="fixed top-5 left-0 right-0 z-50 px-5">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-full border border-[#E8E2D8] bg-[#F8F6F2]/95 px-8 shadow-xl backdrop-blur-lg">

        {/* Logo */}
        <button
          onClick={() => navigate("home")}
          className="text-left"
        >
          <h1 className="text-xl md:text-2xl font-bold tracking-wide text-[#1F2A24]">
            NomadNest Guest House
          </h1>

          <p className="text-[11px] uppercase tracking-[0.3em] text-[#6F7D5C]">
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
          className="rounded-full bg-[#6F7D5C] px-5 py-2 text-white md:hidden"
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
