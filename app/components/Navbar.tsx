"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 w-full bg-transparent text-slate-300">
      {/* ----------------- navbar ------------- */}
      <nav className="mx-auto flex w-[90%] items-center justify-between py-5">
        {/* Logo */}
        <div className="z-[60]">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/Header_Logo.png"
              width={200}
              height={80}
              alt="bytespace-logo"
              className="h-auto w-[150px] md:w-[180px]"
            />
          </Link>
        </div>
        
        {/* ----------- home courses creators----- */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>

          <Link href="/courses" className="transition-colors hover:text-white">
            Courses
          </Link>

          <Link href="/creators" className="transition-colors hover:text-white">
            Creators
          </Link>
        </div>

        {/* ------signin join cart------ */}
        <div className="z-60 flex items-center gap-4 text-sm md:gap-6 md:text-base">
          <Link href="/signin" className="transition-colors hover:text-white">
            Sign In
          </Link>

          <Link href="/joinus" className="transition-colors hover:text-white">
            Join Us
          </Link>

          <Link
            href="/cart"
            className="text-lg transition-colors hover:text-white"
          >
            <i className="fa-solid fa-bag-shopping"></i>
          </Link>
        </div>

        {/* -------hamburger----- */}

        <div className="block z-60 md:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-9 w-9 items-center justify-center text-xl md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>
      </nav>

      {/* ---------drop down menu for mobile------ */}
      <div
        className={`fixed inset-0 z-40 flex h-screen w-full items-center justify-center
        bg-blue-700
        transition-transform duration-500 ease-in-out
        md:hidden
        ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Mobile navigation links */}
        <div className="flex flex-col items-center gap-10 text-4xl font-medium">
          <Link
            href="/"
            onClick={closeMenu}
            className="transition-opacity duration-300 hover:opacity-70"
          >
            Home
          </Link>

          <Link
            href="/courses"
            onClick={closeMenu}
            className="transition-opacity duration-300 hover:opacity-70"
          >
            Courses
          </Link>

          <Link
            href="/creators"
            onClick={closeMenu}
            className="transition-opacity duration-300 hover:opacity-70"
          >
            Creators
          </Link>
        </div>
      </div>
    </header>
  );
}
