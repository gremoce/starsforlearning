import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#DDD9D0] bg-[#292822] text-[#FAF8F1]">

      <div className="mx-auto max-w-6xl px-6 py-14">

        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">

          {/* Brand */}

          <div>

            <Link
              href="/"
              className="group flex items-center gap-3"
            >

              <Image
                src="/images/logo.png"
                alt=""
                width={45}
                height={45}
                className="h-10 w-10 object-contain transition-transform duration-500 group-hover:rotate-6"
              />

              <span className="font-semibold">
                starsforlearning
              </span>

            </Link>

            <p className="mt-4 text-sm text-[#AAA69C]">
              learn. create. share.
            </p>

          </div>


          {/* Links */}

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#AAA69C]">

            <Link
              href="/about"
              className="footer-link"
            >
              about
            </Link>

            <Link
              href="/courses"
              className="footer-link"
            >
              courses
            </Link>

            <Link
              href="/contact"
              className="footer-link"
            >
              contact
            </Link>

          </div>

        </div>


        {/* Bottom */}

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[#77746C] sm:flex-row sm:justify-between">

          <p>
            © {new Date().getFullYear()} Starsforlearning
          </p>
        </div>

      </div>

    </footer>
  );
}