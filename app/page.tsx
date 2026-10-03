import Image from "next/image";
import Link from "next/link";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedNumber from "./components/AnimatedNumber";


const courses = [
  {
    number: "01",
    name: "Python",
    category: "Programming",
    accent: "#F1C84B",
  },
  {
    number: "02",
    name: "Mathematics",
    category: "Mathematics",
    accent: "#A999B8",
  },
  {
    number: "03",
    name: "Java",
    category: "Programming",
    accent: "#8EACC4",
  },
];


export default function Home() {

  return (

    <main className="homepage">

      <Header />


      {/* =====================================================
          CONTINUOUS BACKGROUND
      ===================================================== */}

      <div className="page-decoration page-decoration-one" />
      <div className="page-decoration page-decoration-two" />

      <span className="background-star background-star-one">
        ✦
      </span>

      <span className="background-star background-star-two">
        ✧
      </span>

      <span className="background-star background-star-three">
        +
      </span>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

        {/* orbiting lines */}

        <div className="hero-ring hero-ring-one" />
        <div className="hero-ring hero-ring-two" />


        {/* small dots */}

        <span className="hero-dot hero-dot-one" />
        <span className="hero-dot hero-dot-two" />
        <span className="hero-dot hero-dot-three" />
        <span className="hero-dot hero-dot-four" />


        <div className="relative z-10 flex flex-col items-center text-center">


          {/* =================================================
              STAR LOGO
          ================================================= */}

          <div className="fade-up relative">

            <div className="logo-orbit">
              <span className="logo-orbit-dot" />
            </div>

            <div className="star-logo-wrap">
              <Image
                src="/images/logo-4.png"
                alt="Starsforlearning"
                width={180}
                height={180}
                priority
                className="star-logo relative h-auto w-40 sm:w-48"
              />
            </div>

          </div>


          <h1
            className="
              fade-up
              fade-up-delay-1
              mt-8
              text-4xl
              font-semibold
              tracking-[-0.03em]
              text-[#292822]
              sm:text-5xl
            "
          >
            starsforlearning
          </h1>


          <p
            className="
              fade-up
              fade-up-delay-2
              mt-3
              text-base
              text-[#77736A]
            "
          >
            learn. create. share.
          </p>


          <Link
            href="/courses"
            className="
              fade-up
              fade-up-delay-3
              mt-9
              border-b
              border-[#292822]
              pb-1
              text-sm
              text-[#292822]
              transition
              duration-300
              hover:border-[#F1C84B]
              hover:text-[#665A31]
            "
          >
            explore courses →
          </Link>


          <div className="mt-10 flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-[#F1C84B]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#A999B8]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#8EACC4]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#D59D88]" />

          </div>

        </div>


        <div
          className="
            absolute bottom-8
            left-1/2
            -translate-x-1/2
            text-xs
            text-[#AAA59A]
          "
        >
          scroll
        </div>

      </section>



      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="relative px-6 pb-28 pt-10 sm:pb-36">

        <div className="mx-auto max-w-5xl">

          <div
            className="
              stats-container
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-[#E3DDD1]
              bg-[#FFFDF8]
              px-6
              py-12
              shadow-[0_20px_60px_rgba(50,45,35,0.04)]
              sm:px-12
              sm:py-14
            "
          >

            {/* tiny decorative details */}

            <span className="absolute right-8 top-7 text-[#A999B8]">
              ✦
            </span>

            <span className="absolute bottom-7 left-8 text-[#8EACC4]">
              ·
            </span>


            <div className="grid gap-10 sm:grid-cols-3">

              {/* Students */}
              <div className="text-center">
                <div
                  className="
                    text-5xl
                    font-semibold
                    tracking-[-0.05em]
                    text-[#292822]
                    sm:text-6xl
                  "
                >
                  <AnimatedNumber
                    value={70}
                    suffix="+"
                  />
                </div>

                <p className="mt-3 text-sm text-[#77736A]">
                  students taught
                </p>
              </div>


              {/* Courses */}
              <div className="text-center">
                <div
                  className="
                    text-5xl
                    font-semibold
                    tracking-[-0.05em]
                    text-[#292822]
                    sm:text-6xl
                  "
                >
                  <AnimatedNumber
                    value={7}
                    suffix=""
                  />
                </div>

                <p className="mt-3 text-sm text-[#77736A]">
                  course series run
                </p>
              </div>


              {/* Student Hours */}
              <div className="text-center">
                <div
                  className="
                    text-5xl
                    font-semibold
                    tracking-[-0.05em]
                    text-[#292822]
                    sm:text-6xl
                  "
                >
                  <AnimatedNumber
                    value={90}
                    suffix="+"
                  />
                </div>

                <p className="mt-3 text-sm text-[#77736A]">
                  student-hours
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT / PHILOSOPHY
      ===================================================== */}

      <section className="relative px-6 py-32 sm:py-40">

        {/* soft lavender wash */}

        <div className="absolute inset-x-0 top-1/2 h-[70%] -translate-y-1/2 bg-[#E8DEF0] opacity-70" />


        {/* decorative line */}

        <div className="absolute left-[8%] top-[15%] h-20 w-20 rounded-full border border-[#CFC0D9]" />


        <div className="relative mx-auto max-w-4xl text-center">


          <Image
            src="/images/logo-4.png"
            alt=""
            width={120}
            height={120}
            className="
              star-float
              mx-auto
              w-20
              sm:w-24
            "
          />


          <p
            className="
              mt-7
              text-xs
              uppercase
              tracking-[0.2em]
              text-[#81718D]
            "
          >
            about
          </p>


          <h2
            className="
              mt-5
              text-4xl
              font-semibold
              tracking-[-0.03em]
              sm:text-5xl
              md:text-6xl
            "
          >
            curious minds,
            <br />
            learning together.
          </h2>


          <Link
            href="/about"
            className="
              mt-8
              inline-block
              text-sm
              text-[#68757D]
              underline
              decoration-[#AFC0C9]
              underline-offset-8
              transition
              hover:text-[#292822]
            "
          >
            our story →
          </Link>

        </div>

      </section>



      {/* =====================================================
          LEARN / CREATE / SHARE
      ===================================================== */}

      <section className="relative px-6 py-28 sm:py-36">

        <div className="mx-auto max-w-5xl">

          <div
            className="
              grid
              overflow-hidden
              rounded-[30px]
              border
              border-[#DDD9D0]
              sm:grid-cols-3
            "
          >

            {/* Learn */}

            <div
              className="
                value-block
                border-b
                border-[#DDD9D0]
                bg-[#FFF1B8]
                p-8
                sm:border-b-0
                sm:border-r
                sm:p-10
              "
            >

              <span className="text-sm text-[#9C8331]">
                01
              </span>

              <h3 className="mt-16 text-2xl font-semibold">
                learn
              </h3>

            </div>


            {/* Create */}

            <div
              className="
                value-block
                border-b
                border-[#DDD9D0]
                bg-[#E8DEF0]
                p-8
                sm:border-b-0
                sm:border-r
                sm:p-10
              "
            >

              <span className="text-sm text-[#8C789A]">
                02
              </span>

              <h3 className="mt-16 text-2xl font-semibold">
                create
              </h3>

            </div>


            {/* Share */}

            <div
              className="
                value-block
                bg-[#DCECF3]
                p-8
                sm:p-10
              "
            >

              <span className="text-sm text-[#718F9F]">
                03
              </span>

              <h3 className="mt-16 text-2xl font-semibold">
                share
              </h3>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}