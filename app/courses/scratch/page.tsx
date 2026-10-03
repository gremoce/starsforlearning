import Image from "next/image";
import Link from "next/link";

const days = [
  {
    number: "01",
    title: "Basics",
    color: "#F1C84B",
    lessons: [
      "Sprites",
      "Backdrops",
      "Simple movements",
      "Loops",
    ],
  },
  {
    number: "02",
    title: "Controls, Costumes, and Sound",
    color: "#A999B8",
    lessons: [
      "Controlling using arrow keys",
      "Costumes",
      "Sounds",
      "Broadcasting",
    ],
  },
  {
    number: "03",
    title: "Variables & Projects",
    color: "#8EACC4",
    lessons: [
      "Variables",
      "More complex use of loops",
      "Fruit Catch Game",
    ],
  },
];

export default function ScratchCourse() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF8F1]">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="relative z-20">
        {/* Add your Header component here */}
      </header>


      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative px-6 pb-24 pt-32 sm:pb-28 sm:pt-40">
        <div className="mx-auto max-w-5xl">

          <Link
            href="/courses"
            className="
              fade-up
              inline-flex
              items-center
              gap-2
              text-xs
              uppercase
              tracking-[0.16em]
              text-[#99948A]
              transition-colors
              duration-300
              hover:text-[#292822]
            "
          >
            ← all courses
          </Link>

          <div className="mt-12 grid items-end gap-12 md:grid-cols-[1fr_auto]">

            <div>
              <p
                className="
                  fade-up
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[#99948A]
                "
              >
                Creative Coding
              </p>

              <h1
                className="
                  fade-up
                  fade-up-delay-1
                  mt-5
                  max-w-3xl
                  text-5xl
                  font-semibold
                  tracking-[-0.055em]
                  text-[#292822]
                  sm:text-6xl
                  md:text-7xl
                "
              >
                Scratch for Beginners
              </h1>

              <p
                className="
                  fade-up
                  fade-up-delay-2
                  mt-6
                  max-w-xl
                  text-sm
                  leading-7
                  text-[#77736A]
                "
              >
                A three-day introduction to programming for
                beginners who want to learn through creative,
                interactive projects and games.
              </p>

              <div
                className="
                  fade-up
                  fade-up-delay-3
                  mt-8
                  flex
                  flex-wrap
                  gap-3
                "
              >
                <span
                  className="
                    rounded-full
                    border
                    border-[#E1DDD4]
                    bg-[#FFFDF8]
                    px-4
                    py-2
                    text-xs
                    text-[#77736A]
                  "
                >
                  Recommended for Grades 3–8
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-[#E1DDD4]
                    bg-[#FFFDF8]
                    px-4
                    py-2
                    text-xs
                    text-[#77736A]
                  "
                >
                  3-day course
                </span>
              </div>
            </div>

            {/* Star */}
            <div className="hidden md:block">
              <Image
                src="/images/logo-4.png"
                alt="Starsforlearning"
                width={140}
                height={140}
                className="star-float w-28 lg:w-32"
              />
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          ABOUT THE COURSE
      ===================================================== */}
      <section className="relative px-6 pb-28">
        <div className="mx-auto max-w-5xl">

          <div
            className="
              grid
              gap-10
              rounded-[2rem]
              border
              border-[#E1DDD4]
              bg-[#FFFDF8]
              p-7
              sm:p-10
              md:grid-cols-[0.7fr_1.5fr]
              md:p-12
            "
          >

            {/* Section label */}
            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[#99948A]
                "
              >
                about the course
              </p>

              <div className="mt-6 hidden h-px w-16 bg-[#8EACC4] md:block" />
            </div>

            {/* Description */}
            <div>
              <p
                className="
                  text-base
                  leading-8
                  text-[#555249]
                  sm:text-lg
                  sm:leading-9
                "
              >
                This course is designed to expose students who
                have little to no experience to the world of
                programming. Students will learn the basics of
                block coding using Scratch by making fun and
                interactive projects and games.
              </p>

              <p
                className="
                  mt-6
                  text-base
                  leading-8
                  text-[#555249]
                  sm:text-lg
                  sm:leading-9
                "
              >
                This will be a 3-day course. Each session will
                start off with warmups of concepts that will be
                used in the final project of the class.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          COURSE OVERVIEW
      ===================================================== */}
      <section className="relative px-6 pb-32">
        <div className="mx-auto max-w-5xl">

          <div className="mb-12">
            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-[#99948A]
              "
            >
              course overview
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-semibold
                tracking-[-0.045em]
                text-[#292822]
                sm:text-5xl
              "
            >
              three days of Scratch.
            </h2>
          </div>


          {/* Timeline */}
          <div className="relative">

            {/* Vertical line */}
            <div
              className="
                absolute
                bottom-8
                left-6
                top-8
                w-px
                bg-[#DDD9D0]
                sm:left-8
              "
            />

            <div className="space-y-6">

              {days.map((day) => (
                <div
                  key={day.number}
                  className="relative pl-16 sm:pl-20"
                >

                  {/* Timeline dot */}
                  <div
                    className="
                      absolute
                      left-3
                      top-7
                      z-10
                      h-6
                      w-6
                      rounded-full
                      border-[5px]
                      border-[#FAF8F1]
                      sm:left-5
                    "
                    style={{
                      backgroundColor: day.color,
                    }}
                  />

                  {/* Day card */}
                  <div
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[1.75rem]
                      border
                      border-[#E1DDD4]
                      bg-[#FFFDF8]
                      p-7
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:shadow-[0_20px_50px_rgba(50,45,35,0.06)]
                      sm:p-9
                    "
                  >

                    {/* Accent */}
                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-1
                        w-0
                        transition-all
                        duration-700
                        ease-out
                        group-hover:w-full
                      "
                      style={{
                        backgroundColor: day.color,
                      }}
                    />

                    <div className="flex items-start gap-5">

                      {/* Number */}
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#E1DDD4]
                          text-xs
                          text-[#77736A]
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      >
                        {day.number}
                      </div>

                      <div className="min-w-0 flex-1">

                        <p
                          className="
                            text-[10px]
                            uppercase
                            tracking-[0.2em]
                            text-[#99948A]
                          "
                        >
                          day {day.number}
                        </p>

                        <h3
                          className="
                            mt-2
                            text-2xl
                            font-medium
                            tracking-[-0.035em]
                            text-[#292822]
                            sm:text-3xl
                          "
                        >
                          {day.title}
                        </h3>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">

                          {day.lessons.map((lesson) => (
                            <div
                              key={lesson}
                              className="
                                flex
                                items-start
                                gap-3
                                text-sm
                                leading-6
                                text-[#77736A]
                              "
                            >
                              <span
                                className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{
                                  backgroundColor: day.color,
                                }}
                              />

                              <span>{lesson}</span>
                            </div>
                          ))}

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          COURSE MATERIALS
      ===================================================== */}
      <section className="relative px-6 pb-32">
        <div className="mx-auto max-w-5xl">

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-[#E1DDD4]
              bg-[#DCE8EF]
              px-7
              py-10
              sm:px-10
              sm:py-12
            "
          >

            {/* Decorative circle */}
            <div
              className="
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                border
                border-[#8EACC4]
                opacity-50
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                gap-8
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-[#607F95]
                  "
                >
                  course resources
                </p>

                <h2
                  className="
                    mt-3
                    text-3xl
                    font-semibold
                    tracking-[-0.04em]
                    text-[#292822]
                  "
                >
                  keep learning.
                </h2>

                <p
                  className="
                    mt-3
                    max-w-md
                    text-sm
                    leading-6
                    text-[#77736A]
                  "
                >
                  Access the materials used throughout the
                  course and continue practicing Scratch.
                </p>
              </div>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#292822]
                  px-6
                  py-3.5
                  text-xs
                  font-medium
                  text-[#FFFDF8]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_10px_25px_rgba(41,40,34,0.15)]
                "
              >
                view course materials
              </a>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          BOTTOM NAVIGATION
      ===================================================== */}
      <section className="border-t border-[#E1DDD4] px-6 py-10">
        <div
          className="
            mx-auto
            flex
            max-w-5xl
            flex-col
            gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <Link
            href="/courses"
            className="
              text-sm
              text-[#77736A]
              transition-colors
              duration-300
              hover:text-[#292822]
            "
          >
            ← back to all courses
          </Link>

          <Link
            href="/archive"
            className="
              text-sm
              text-[#77736A]
              transition-colors
              duration-300
              hover:text-[#292822]
            "
          >
            view course archive →
          </Link>

        </div>
      </section>

    </main>
  );
}