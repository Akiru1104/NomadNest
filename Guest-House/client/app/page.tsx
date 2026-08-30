"use client";

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { MainOne } from "@/components/landing/MainOne";
import { MainTwo } from "@/components/landing/MainTwo";
import { MainThree } from "@/components/landing/MainThree";
import { MainFour } from "@/components/landing/MainFour";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <MainOne />

        {/* About */}
        <section id="about">
          <MainTwo />
        </section>

        {/* Gallery */}
        <section id="gallery">
          <MainThree />
        </section>

        {/* Booking */}
        <MainFour />

        {/* Contact */}
        <section id="contact">
          <Footer />
        </section>
      </main>
    </div>
  );
}
