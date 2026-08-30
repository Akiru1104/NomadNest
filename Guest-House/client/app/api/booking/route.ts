import { randomUUID } from "crypto";

const allowedRooms = new Set([
  "Double Room",
  "Budget Twin Room",
  "Deluxe Single Room",
]);

const requestsByIp = new Map<string, number[]>();
const rateLimitWindow = 10 * 60 * 1000;
const rateLimitMax = 5;

type BookingRequest = {
  name: string;
  email: string;
  phone: string;
  room: string;
  checkIn: string;
  checkOut: string;
  adults: string;
  children: string;
  message: string;
  website: string;
};

const readString = (value: unknown, maxLength = 200) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const parseBooking = (value: unknown): BookingRequest | null => {
  if (!value || typeof value !== "object") return null;
  const body = value as Record<string, unknown>;
  const booking = {
    name: readString(body.name),
    email: readString(body.email),
    phone: readString(body.phone),
    room: readString(body.room),
    checkIn: readString(body.checkIn, 10),
    checkOut: readString(body.checkOut, 10),
    adults: readString(body.adults, 2),
    children: readString(body.children, 2),
    message: readString(body.message, 1000),
    website: readString(body.website),
  };

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(booking.email);
  const dateIsValid = /^\d{4}-\d{2}-\d{2}$/;
  const today = new Date().toISOString().slice(0, 10);
  const adults = Number(booking.adults);
  const children = Number(booking.children);

  if (
    !booking.name ||
    !emailIsValid ||
    !booking.phone ||
    !allowedRooms.has(booking.room) ||
    !dateIsValid.test(booking.checkIn) ||
    !dateIsValid.test(booking.checkOut) ||
    booking.checkIn < today ||
    booking.checkOut <= booking.checkIn ||
    !Number.isInteger(adults) ||
    adults < 1 ||
    adults > 4 ||
    !Number.isInteger(children) ||
    children < 0 ||
    children > 3
  ) {
    return null;
  }

  return booking;
};

const isRateLimited = (request: Request) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recent = (requestsByIp.get(ip) || []).filter(
    (timestamp) => now - timestamp < rateLimitWindow,
  );

  if (recent.length >= rateLimitMax) return true;
  recent.push(now);
  requestsByIp.set(ip, recent);
  return false;
};

export async function POST(request: Request) {
  if (isRateLimited(request)) {
    return Response.json(
      { message: "Too many requests. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  const booking = parseBooking(body);
  if (!booking) {
    return Response.json(
      { message: "Please check the booking information and try again." },
      { status: 400 },
    );
  }

  // Honeypot field: silently accept bot submissions without sending email.
  if (booking.website) return Response.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const bookingEmail =
    process.env.BOOKING_EMAIL_TO || "Nomadnest99@gmail.com";
  const sender = process.env.BOOKING_EMAIL_FROM;

  if (!apiKey || !sender) {
    console.error("Booking email environment variables are not configured.");
    return Response.json(
      { message: "Booking email is not configured yet. Please contact us by phone." },
      { status: 503 },
    );
  }

  const start = new Date(`${booking.checkIn}T00:00:00Z`);
  const end = new Date(`${booking.checkOut}T00:00:00Z`);
  const nights = Math.round((end.getTime() - start.getTime()) / 86_400_000);
  const text = [
    "New booking request",
    "",
    `Guest: ${booking.name}`,
    `Guest email: ${booking.email}`,
    `Phone / WhatsApp: ${booking.phone}`,
    "",
    `Room: ${booking.room}`,
    `Check-in: ${booking.checkIn}`,
    `Check-out: ${booking.checkOut}`,
    `Nights: ${nights}`,
    `Guests: ${booking.adults} adult(s), ${booking.children} child(ren)`,
    `Special requests: ${booking.message || "None"}`,
    "",
    "Reply directly to this email to confirm the booking with the guest.",
  ].join("\n");

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": randomUUID(),
        "User-Agent": "NomadNest-Booking/1.0",
      },
      body: JSON.stringify({
        from: sender,
        to: [bookingEmail],
        reply_to: booking.email,
        subject: `Booking request: ${booking.room} · ${booking.checkIn}`,
        text,
      }),
    });

    if (!emailResponse.ok) {
      const error = await emailResponse.text();
      console.error("Booking email provider error:", emailResponse.status, error);
      return Response.json(
        { message: "The request could not be sent. Please try again shortly." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Booking email request failed:", error);
    return Response.json(
      { message: "The request could not be sent. Please try again shortly." },
      { status: 502 },
    );
  }
}
