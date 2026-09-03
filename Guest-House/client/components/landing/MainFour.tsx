"use client";

import { FormEvent, useMemo, useState } from "react";

const rooms = ["Double Room 1", "Double Room 2", "Deluxe Room", "Budget Room"];
const roomPrices: Record<string, string> = {
  "Double Room 1": "$39 / night",
  "Double Room 2": "$39 / night",
  "Deluxe Room": "$31 / night",
  "Budget Room": "$23 / night",
};

type SubmitState = "idle" | "sending" | "success" | "error";

const localDate = (date: Date) => {
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60_000)
    .toISOString()
    .slice(0, 10);
};

const nextDay = (dateString: string) => {
  const date = new Date(`${dateString}T00:00:00`);
  date.setDate(date.getDate() + 1);
  return localDate(date);
};

export const MainFour = () => {
  const today = localDate(new Date());
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [room, setRoom] = useState(rooms[0]);
  const [adults, setAdults] = useState("1");
  const [children, setChildren] = useState("0");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(`${checkIn}T00:00:00`);
    const end = new Date(`${checkOut}T00:00:00`);
    return Math.max(0, Math.round((end.getTime() - start.getTime()) / 86_400_000));
  }, [checkIn, checkOut]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    setSubmitState("sending");
    setErrorMessage("");

    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Booking request could not be sent.");
      }

      setSubmitState("success");
      formElement.reset();
      setCheckIn("");
      setCheckOut("");
      setRoom(rooms[0]);
      setAdults("1");
      setChildren("0");
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#D9CEC1] bg-white px-4 py-3 text-[#2F2A24] outline-none transition focus:border-[#8B5E3C] focus:ring-2 focus:ring-[#8B5E3C]/15";

  return (
    <section id="booking" className="w-full bg-[#F7F1E8] px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#8B5E3C]">
            Direct booking
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-[#2F2A24] md:text-5xl">
            Plan your stay in Ulaanbaatar.
          </h2>
          <p className="mb-8 leading-8 text-[#6F665D]">
            Select your room and travel dates. Your request will be sent
            directly to us, and we will confirm availability by email.
          </p>

          <div className="rounded-3xl border border-[#E8DED2] bg-white/70 p-6 text-[#2F2A24]">
            <p className="mb-4 font-semibold">Your stay</p>
            <div className="grid grid-cols-2 gap-5 text-sm">
              <div>
                <p className="text-[#8B8177]">Check-in</p>
                <p className="mt-1 font-semibold">{checkIn || "Select date"}</p>
              </div>
              <div>
                <p className="text-[#8B8177]">Check-out</p>
                <p className="mt-1 font-semibold">{checkOut || "Select date"}</p>
              </div>
              <div>
                <p className="text-[#8B8177]">Room</p>
                <p className="mt-1 font-semibold">{room}</p>
              </div>
              <div>
                <p className="text-[#8B8177]">Length</p>
                <p className="mt-1 font-semibold">
                  {nights ? `${nights} night${nights > 1 ? "s" : ""}` : "—"}
                </p>
              </div>
              <div className="col-span-2 border-t border-[#E8DED2] pt-4">
                <p className="text-[#8B8177]">Price per night</p>
                <p className="mt-1 font-semibold">{roomPrices[room]}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-2 text-sm text-[#6F665D]">
            <p>
              📍{" "}
              <a
                href="https://maps.app.goo.gl/fx9Xjq8sXRukLYvc8"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-4 hover:text-[#8B5E3C]"
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
                className="font-semibold underline underline-offset-4 hover:text-[#8B5E3C]"
              >
                +976 8000 5660 — message us directly
              </a>
            </p>
            <p>✉️ Nomadnest99@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[32px] border border-[#E8DED2] bg-white p-6 shadow-xl sm:p-8"
        >
          <h3 className="text-2xl font-bold text-[#2F2A24]">Request a room</h3>
          <p className="mb-8 mt-2 text-sm leading-6 text-[#6F665D]">
            Complete the form and we will reply to your email with confirmation.
          </p>

          <div className="hidden" aria-hidden="true">
            <label>
              Website
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-[#4B433B]">
              Check-in
              <input
                required
                type="date"
                name="checkIn"
                min={today}
                value={checkIn}
                onChange={(event) => {
                  const value = event.target.value;
                  setCheckIn(value);
                  if (checkOut && checkOut <= value) setCheckOut("");
                }}
                className={inputClass}
              />
            </label>

            <label className="text-sm font-semibold text-[#4B433B]">
              Check-out
              <input
                required
                type="date"
                name="checkOut"
                min={checkIn ? nextDay(checkIn) : nextDay(today)}
                value={checkOut}
                onChange={(event) => setCheckOut(event.target.value)}
                className={inputClass}
              />
            </label>

            <label className="text-sm font-semibold text-[#4B433B] sm:col-span-2">
              Room type
              <select
                name="room"
                value={room}
                onChange={(event) => setRoom(event.target.value)}
                className={inputClass}
              >
                {rooms.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>

            <label className="text-sm font-semibold text-[#4B433B]">
              Adults
              <select
                name="adults"
                value={adults}
                onChange={(event) => setAdults(event.target.value)}
                className={inputClass}
              >
                {[1, 2, 3, 4].map((count) => (
                  <option key={count}>{count}</option>
                ))}
              </select>
            </label>

            <label className="text-sm font-semibold text-[#4B433B]">
              Children
              <select
                name="children"
                value={children}
                onChange={(event) => setChildren(event.target.value)}
                className={inputClass}
              >
                {[0, 1, 2, 3].map((count) => (
                  <option key={count}>{count}</option>
                ))}
              </select>
            </label>

            <label className="text-sm font-semibold text-[#4B433B] sm:col-span-2">
              Full name
              <input required name="name" autoComplete="name" className={inputClass} />
            </label>

            <label className="text-sm font-semibold text-[#4B433B]">
              Email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={inputClass}
              />
            </label>

            <label className="text-sm font-semibold text-[#4B433B]">
              Phone / WhatsApp
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="+976 ..."
                className={inputClass}
              />
            </label>

            <label className="text-sm font-semibold text-[#4B433B] sm:col-span-2">
              Special requests (optional)
              <textarea
                name="message"
                rows={4}
                maxLength={1000}
                placeholder="Arrival time, airport transfer, or anything else..."
                className={`${inputClass} resize-none`}
              />
            </label>
          </div>

          {submitState === "success" && (
            <div role="status" className="mt-6 rounded-xl bg-green-50 p-4 text-sm text-green-800">
              Your booking request was sent. We will confirm it by email shortly.
            </div>
          )}

          {submitState === "error" && (
            <div role="alert" className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-800">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={submitState === "sending"}
            className="mt-7 w-full rounded-xl bg-[#8B5E3C] px-6 py-4 font-semibold text-white transition hover:bg-[#75492C] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitState === "sending" ? "Sending..." : "Send booking request"}
          </button>
          <p className="mt-4 text-center text-xs leading-5 text-[#8B8177]">
            Your booking is confirmed only after you receive our reply.
          </p>
        </form>
      </div>
    </section>
  );
};
