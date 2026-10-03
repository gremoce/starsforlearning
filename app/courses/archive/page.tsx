import Image from "next/image";
import Link from "next/link";

const archive = [
  {
    year: "2026",
    courses: [
      {
        name: "Basics of Java",
        category: "Programming",
        date: "Jul. 14 - Jul. 16",
        color: "#A999B8",
        materials: "https://starsforlearning.com/index.php/courses/all-courses/",
        youtube: "https://www.youtube.com/playlist?list=PLNIDaFcOt3U4",
      },
      {
        name: "Introduction to Python",
        category: "Programming",
        date: "Jul. 07 - Jul. 09",
        color: "#F1C84B",
        materials: "#",
        youtube: "https://www.youtube.com/playlist?list=PLTwOvjEYZ58E",
      },
    ],
  },
  {
    year: "2025",
    courses: [
      {
        name: "Basics of Java",
        category: "Programming",
        date: "Jul. 21 - Jul. 23",
        color: "#A999B8",
        materials: "#",
        youtube: "https://www.youtube.com/playlist?list=PLccq9hBZzq3tAaCSvMXxZbwNtnTBPQVlB",
      },
      {
        name: "Introduction to Python",
        category: "Programming",
        date: "Jul. 14 - Jul. 16",
        color: "#F1C84B",
        materials: "#",
        youtube: "https://www.youtube.com/playlist?list=PLccq9hBZzq3uoyHmugSC0SgrqwBdnsMSQ",
      },
      {
        name: "Basics of Java",
        category: "Programming",
        date: "Mar. 10 - Mar. 12",
        color: "#A999B8",
        materials: "#",
        youtube: "https://www.youtube.com/playlist?list=PLccq9hBZzq3vCguJsYYzPdXVdq4Ju_lM7",
      },
    ],
  },
  {
    year: "2024",
    courses: [
      {
        name: "Scratch for Beginners",
        category: "Creative Coding",
        date: "Jul. 29 - Jul. 31",
        color: "#8EACC4",
        materials: "#",
        youtube: "https://www.youtube.com/playlist?list=PLccq9hBZzq3vQUI981e9Dlvt6qa0p6nmd",
      },
      {
        name: "Scratch for Beginners",
        category: "Creative Coding",
        date: "Jul. 22 - Jul. 24",
        color: "#8EACC4",
        materials: "#",
        youtube: "https://www.youtube.com/playlist?list=PLccq9hBZzq3vfikd6NJx9VhcIO0eFcvAC",
      },
    ],
  },
];

export default function Archive() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF8F1]">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="relative z-20">
        {/* Add your Header component here */}
      </header>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="relative px-6 pb-20 pt-32 sm:pb-24 sm:pt-40">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-end gap-12 md:grid-cols-[1fr_auto]">
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
                course archive
              </p>

              <h1
                className="
                  fade-up
                  fade-up-delay-1
                  mt-5
                  text-5xl
                  font-semibold
                  tracking-[-0.055em]
                  text-[#292822]
                  sm:text-6xl
                  md:text-7xl
                "
              >
                past courses.
              </h1>

              <p
                className="
                  fade-up
                  fade-up-delay-2
                  mt-5
                  max-w-md
                  text-sm
                  leading-7
                  text-[#77736A]
                "
              >
                Explore courses I've taught over the years.
              </p>
            </div>

            {/* Star */}
            <div className="hidden md:block">
              <Image
                src="/images/logo.png"
                alt="Starsforlearning"
                width={130}
                height={130}
                className="star-float w-24 lg:w-28"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHIVE TIMELINE
      ===================================================== */}
      <section className="relative px-6 pb-36">
        <div className="mx-auto max-w-5xl">
          <div className="relative">

            {/* Main vertical timeline */}
            <div
              className="
                absolute
                bottom-0
                left-[23px]
                top-0
                w-px
                bg-[#DDD9D0]
                sm:left-[31px]
              "
            />

            {archive.map((yearGroup) => (
              <div
                key={`year-${yearGroup.year}`}
                className="relative mb-24 last:mb-0"
              >
                {/* =================================================
                    YEAR
                ================================================= */}
                <div className="relative mb-10 flex items-center gap-6 sm:gap-8">
                  {/* Timeline year circle */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D8D2C7]
                      bg-[#FAF8F1]
                      text-xs
                      font-medium
                      text-[#77736A]
                      sm:h-16
                      sm:w-16
                    "
                  >
                    {yearGroup.year}
                  </div>

                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.18em]
                        text-[#AAA59A]
                      "
                    >
                      year
                    </p>

                    <h2
                      className="
                        mt-1
                        text-3xl
                        font-semibold
                        tracking-[-0.04em]
                        text-[#292822]
                        sm:text-4xl
                      "
                    >
                      {yearGroup.year}
                    </h2>
                  </div>
                </div>

                {/* =================================================
                    COURSE CARDS
                ================================================= */}
                <div className="ml-16 flex flex-col gap-5 sm:ml-24">
                  {yearGroup.courses.map((course, courseIndex) => (
                    <div
                      key={`${yearGroup.year}-${course.name}-${course.date}-${courseIndex}`}
                      className="group relative"
                    >
                      {/* Connector from timeline to card */}
                      <div
                        className="
                          absolute
                          -left-10
                          top-10
                          hidden
                          h-px
                          w-10
                          bg-[#DDD9D0]
                          sm:block
                        "
                      />

                      {/* =================================================
                          COURSE CARD
                      ================================================= */}
                      <div
                        className="
                          relative
                          overflow-hidden
                          rounded-[1.5rem]
                          border
                          border-[#E1DDD4]
                          bg-[#FFFDF8]
                          p-6
                          transition-all
                          duration-500
                          ease-out
                          group-hover:-translate-y-1
                          group-hover:border-[#D6D0C4]
                          group-hover:shadow-[0_20px_50px_rgba(50,45,35,0.07)]
                          sm:p-8
                        "
                      >
                        {/* Accent glow */}
                        <div
                          className="
                            pointer-events-none
                            absolute
                            -right-16
                            -top-16
                            h-40
                            w-40
                            rounded-full
                            opacity-0
                            blur-3xl
                            transition-opacity
                            duration-700
                            group-hover:opacity-20
                          "
                          style={{
                            backgroundColor: course.color,
                          }}
                        />

                        {/* Accent line */}
                        <div
                          className="
                            pointer-events-none
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
                            backgroundColor: course.color,
                          }}
                        />

                        <div className="relative">
                          {/* =================================================
                              TOP ROW
                          ================================================= */}
                          <div className="flex items-start justify-between gap-6">
                            {/* Course information */}
                            <a
                              href={course.youtube}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="min-w-0 flex-1"
                            >
                              <p
                                className="
                                  text-[10px]
                                  uppercase
                                  tracking-[0.2em]
                                  text-[#99948A]
                                "
                              >
                                {course.category}
                              </p>

                              <h3
                                className="
                                  mt-2
                                  text-2xl
                                  font-medium
                                  tracking-[-0.035em]
                                  text-[#292822]
                                  transition-transform
                                  duration-500
                                  group-hover:translate-x-1
                                  sm:text-3xl
                                "
                              >
                                {course.name}
                              </h3>

                              <p className="mt-2 text-sm text-[#77736A]">
                                {course.date}
                              </p>
                            </a>

                            {/* =================================================
                                MATERIALS BADGE
                            ================================================= */}
                            {course.materials !== "#" ? (
                              <a
                                href={course.materials}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                  hidden
                                  shrink-0
                                  items-center
                                  gap-2
                                  rounded-full
                                  border
                                  border-[#E1DDD4]
                                  px-3
                                  py-2
                                  text-[9px]
                                  uppercase
                                  tracking-[0.12em]
                                  text-[#99948A]
                                  transition-all
                                  duration-500
                                  hover:border-[#292822]
                                  hover:text-[#292822]
                                  sm:flex
                                "
                              >
                                <span className="text-[9px]">
                                  ✎
                                </span>
                                materials
                              </a>
                            ) : (
                              <div
                                className="
                                  hidden
                                  shrink-0
                                  items-center
                                  gap-2
                                  rounded-full
                                  border
                                  border-[#E1DDD4]
                                  px-3
                                  py-2
                                  text-[9px]
                                  uppercase
                                  tracking-[0.12em]
                                  text-[#AAA59A]
                                  sm:flex
                                "
                              >
                                <span className="text-[9px]">
                                  ✎
                                </span>
                                materials
                              </div>
                            )}
                          </div>

                          {/* =================================================
                              RECORDINGS
                          ================================================= */}
                          <a
                            href={course.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              mt-8
                              flex
                              items-center
                              justify-between
                              gap-5
                              border-t
                              border-[#E8E4DC]
                              pt-6
                            "
                          >
                            <div
                              className="
                                flex
                                items-center
                                gap-3
                                transition-transform
                                duration-500
                                group-hover:translate-x-1
                              "
                            >
                              {/* Play button */}
                              <div
                                className="
                                  flex
                                  h-10
                                  w-10
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-full
                                  bg-[#292822]
                                  text-[10px]
                                  text-white
                                  transition-all
                                  duration-500
                                  group-hover:scale-110
                                  group-hover:shadow-[0_6px_20px_rgba(41,40,34,0.15)]
                                "
                              >
                                ▶︎
                              </div>

                              <div>
                                <p
                                  className="
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.16em]
                                    text-[#292822]
                                  "
                                >
                                  lesson recordings
                                </p>

                                <p className="mt-1 text-xs text-[#99948A]">
                                  Watch the lessons on YouTube →
                                </p>
                              </div>
                            </div>

                            {/* Arrow */}
                            <div
                              className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#E1DDD4]
                                text-[#AAA59A]
                                transition-all
                                duration-500
                                group-hover:rotate-[-8deg]
                                group-hover:scale-110
                                group-hover:border-[#292822]
                                group-hover:text-[#292822]
                              "
                            >
                              ↗
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}
      <section
        className="
          relative
          overflow-hidden
          bg-[#FFF1B8]
          px-6
          py-28
          sm:py-32
        "
      >
        <div className="cta-line cta-line-one" />
        <div className="cta-line cta-line-two" />

        <div
          className="
            relative
            mx-auto
            flex
            max-w-2xl
            flex-col
            items-center
            text-center
          "
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={120}
            height={120}
            className="cta-star mb-7 w-20"
          />

          <h2
            className="
              text-4xl
              font-semibold
              tracking-[-0.045em]
              text-[#292822]
              sm:text-5xl
            "
          >
            want to keep learning?
          </h2>

          <p className="mt-4 text-sm text-[#77736A]">
            Explore the courses currently being offered.
          </p>

          <Link
            href="/courses"
            className="
              mt-7
              text-sm
              text-[#665A31]
              underline
              decoration-[#A99854]
              underline-offset-8
              transition
              duration-300
              hover:text-[#292822]
            "
          >
            view current courses →
          </Link>
        </div>
      </section>
    </main>
  );
}