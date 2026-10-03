import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    number: "01",
    name: "Introduction to Python",
    category: "Programming",
    grade: "Recommended for Grades 6+",
    color: "#F1C84B",
    href: "/courses/python",
  },
  {
    number: "02",
    name: "Basics of Java",
    category: "Programming",
    grade: "Recommended for Grades 7+",
    color: "#A999B8",
    href: "/courses/java",
  },
  {
    number: "03",
    name: "Scratch for Beginners",
    category: "Creative Coding",
    grade: "Recommended for Grades 3-8",
    color: "#8EACC4",
    href: "/courses/scratch",
  },
];

export default function Courses() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF8F1]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative z-20">
        {/* Your Header component */}
      </header>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="relative px-6 pb-20 pt-32 sm:pb-24 sm:pt-40">

        {/* subtle background details */}

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
                courses
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
                explore courses
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
                Our live courses in programming and
                creative coding.
              </p>

            </div>


            {/* Star */}

            <div className="hidden md:block">

              <Image
                src="/images/starsforlearning.png"
                alt="Starsforlearning"
                width={130}
                height={130}
                className="
                  courses-mascot
                  w-24
                  lg:w-28
                "
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
        COURSES
    ===================================================== */}

    <section className="relative px-6 pb-36">

    <div className="mx-auto max-w-5xl">

        <div className="flex flex-col gap-5">

        {courses.map((course) => (

            <Link
            key={course.name}
            href={course.href}
            className="course-card group relative block"
            >

            <div
                className="
                relative
                overflow-hidden
                rounded-[1.75rem]
                border
                border-[#E1DDD4]
                bg-[#FFFDF8]
                px-6
                py-8
                transition-all
                duration-500
                ease-out
                sm:px-9
                sm:py-10
                md:px-11
                md:py-12
                "
            >

                {/* Soft accent glow */}

                <div
                className="
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
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

                <span
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
                    backgroundColor: course.color,
                }}
                />


                <div className="relative flex items-center gap-6 sm:gap-10">

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
                    text-[#99948A]
                    transition-all
                    duration-500
                    group-hover:scale-105
                    "
                >
                    {course.number}
                </div>


                {/* Course information */}

                <div className="min-w-0 flex-1">

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

                    <h2
                    className="
                        mt-2
                        text-2xl
                        font-medium
                        tracking-[-0.035em]
                        text-[#292822]
                        transition-all
                        duration-500
                        group-hover:translate-x-1
                        sm:text-3xl
                        md:text-4xl
                    "
                    >
                    {course.name}
                    </h2>

                    <p
                    className="
                        mt-2
                        text-sm
                        text-[#77736A]
                        transition-transform
                        duration-500
                        group-hover:translate-x-1
                    "
                    >
                    {course.grade}
                    </p>

                </div>


                {/* Arrow */}

                <div
                    className="
                    flex
                    h-11
                    w-11
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

                </div>

            </div>

            </Link>

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

        <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">

          <Image
            src="/images/starsforlearning.png"
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
            ready to learn?
          </h2>

          <p className="mt-4 text-sm text-[#77736A]">
            Find a course that's right for you.
          </p>

        </div>

      </section>

    </main>
  );
}