"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav
          className="
            mx-auto flex max-w-6xl items-center justify-between
            rounded-full border border-[#E4E0D7]
            bg-[#FAF8F1]/95
            px-4 py-3
            shadow-[0_8px_30px_rgba(50,45,35,0.05)]
            backdrop-blur-md
            transition-all duration-300
          "
        >

          {/* Logo */}

          <Link
            href="/"
            className="group flex items-center gap-2.5"
          >
            <Image
              src="/images/logo.png"
              alt="Starsforlearning"
              width={44}
              height={44}
              className="
                h-9 w-9 object-contain
                transition-transform duration-500
                group-hover:-rotate-6
                group-hover:scale-110
              "
            />

            <span className="text-sm font-semibold tracking-[-0.01em]">
              starsforlearning
            </span>
          </Link>


          {/* Desktop navigation */}

          <div className="hidden items-center gap-1 sm:flex">

            <Link
              href="/about"
              className="
                rounded-full px-4 py-2
                text-sm text-[#77736A]
                transition-all duration-200
                hover:bg-[#F0ECE3]
                hover:text-[#292822]
              "
            >
              about
            </Link>

            <Link
              href="/courses"
              className="
                rounded-full px-4 py-2
                text-sm text-[#77736A]
                transition-all duration-200
                hover:bg-[#F0ECE3]
                hover:text-[#292822]
              "
            >
              courses
            </Link>

            <Link
              href="/courses/archive"
              className="
                rounded-full px-4 py-2
                text-sm text-[#77736A]
                transition-all duration-200
                hover:bg-[#F0ECE3]
                hover:text-[#292822]
              "
            >
              course archive
            </Link>

            <Link
              href="mailto:admin@starsforlearning.com"
              className="
                ml-1 rounded-full
                bg-[#FFD75A]
                px-5 py-2
                text-sm font-medium text-[#4E452C]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#F4CA45]
                hover:shadow-[0_5px_15px_rgba(220,180,60,0.2)]
              "
            >
              contact
            </Link>

          </div>


          {/* Mobile button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              border border-[#DDD9D0]
              text-[#555149]
              transition
              hover:bg-[#F0ECE3]
              sm:hidden
            "
          >
            <span
              className={`
                transition-transform duration-300
                ${menuOpen ? "rotate-90" : ""}
              `}
            >
              {menuOpen ? "×" : "☰"}
            </span>
          </button>

        </nav>


        {/* Mobile menu */}

        <div
          className={`
            mx-auto mt-2 max-w-6xl overflow-hidden
            rounded-3xl border border-[#E4E0D7]
            bg-[#FAF8F1]/98 shadow-lg
            transition-all duration-300 sm:hidden
            ${
              menuOpen
                ? "max-h-64 translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
            }
          `}
        >

          <div className="flex flex-col p-3">

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm transition hover:bg-[#F0ECE3]"
            >
              about
            </Link>

            <Link
              href="/courses"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm transition hover:bg-[#F0ECE3]"
            >
              courses
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 rounded-2xl bg-[#FFD75A] px-4 py-3 text-center text-sm font-medium"
            >
              contact
            </Link>

          </div>

        </div>

      </header>
    </>
  );
}