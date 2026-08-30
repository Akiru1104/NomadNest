interface DesktopNavProps {
  onNavigate: (id: string) => void;
}

export function DesktopNav({ onNavigate }: DesktopNavProps) {
  return (
    <nav className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
      <button onClick={() => onNavigate("about")} className="hover:text-sky-500">
        About
      </button>
      <button onClick={() => onNavigate("gallery")} className="hover:text-sky-500">
        Rooms
      </button>
      <button onClick={() => onNavigate("booking")} className="hover:text-sky-500">
        Booking
      </button>
      <button onClick={() => onNavigate("contact")} className="hover:text-sky-500">
        Contact
      </button>
    </nav>
  );
}
