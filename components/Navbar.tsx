"use client";
import { useState } from "react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => setShow(!show);

  return (
    <nav className="relative flex justify-between bg-slate-500 px-4 py-2 shadow-lg">
      <div>
        <Link href="/" className="px-2 xl:py-4">
          <span className="text-xl font-semibold italic text-green-400/80 xl:text-4xl">
            Adventure Await
          </span>
        </Link>
      </div>

      {/* Desktop menu */}
      <div className="hidden items-center space-x-1 xl:flex">
        <Link
          href="/"
          className="px-2 py-4 font-semibold text-white/80 transition duration-300 hover:text-green-500"
        >
          Home
        </Link>
        <Link
          href="#destinations"
          className="px-2 py-4 font-semibold text-white/80 transition duration-300 hover:text-green-500"
        >
          Destinations
        </Link>
        <Link
          href="#booking"
          className="px-2 py-4 font-semibold text-white/80 transition duration-300 hover:text-green-500"
        >
          Book Now
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="xl:hidden">
        <button
          onClick={toggleMenu}
          className="absolute right-2 top-1 z-50 p-2 text-2xl text-white focus:outline-none"
        >
          {show ? <IoMdClose /> : <CiMenuFries />}
        </button>
      </div>
      {/* Mobile menu */}
      {show && (
        <div className="absolute left-0 top-0 z-40 w-full bg-slate-600">
          <div className="flex flex-col gap-5 px-8 py-10 pt-14 text-center">
            <Link
              href="/"
              className="border-b border-white/20 px-4 py-4 font-semibold text-white/80"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#destinations"
              className="border-b border-white/20 px-4 py-4 font-semibold text-white/80"
              onClick={toggleMenu}
            >
              Destinations
            </Link>
            <Link
              href="#booking"
              className="border-b border-white/20 px-4 py-4 font-semibold text-white/80"
              onClick={toggleMenu}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
