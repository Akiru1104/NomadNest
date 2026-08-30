"use client";

import { navLinks } from "./nav-links";

interface MenuProps {
  open: boolean;
  onNavigate: (id: string) => void;
  onClose: () => void;
}

export function Menu({ open, onNavigate, onClose }: MenuProps) {
  if (!open) return null;

  return (
    <div className="flex flex-col gap-5 bg-[#051F25] px-6 pb-6 font-medium text-slate-300 md:hidden">
      {navLinks.map((link) => (
        <button
          key={link.id}
          className="border-b border-white/5 py-2 text-left"
          onClick={() => {
            onNavigate(link.id);
            onClose();
          }}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
}
