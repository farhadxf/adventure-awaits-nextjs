// pages/index.tsx
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import BookingCalendar from "../components/BookingCalendar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Wanderlust Travel Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <Destinations />
        <BookingCalendar />
      </main>

      <Footer />
    </div>
  );
}
