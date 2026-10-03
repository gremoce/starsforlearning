import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF8F1] text-[#292822]">

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-16 md:px-12 md:pb-32 md:pt-24">

        {/* Background decorations */}

        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">

            {/* TEXT */}
            <div className="relative z-10">

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E1DDD4] bg-white/60 px-4 py-2 text-sm text-[#77736A] backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#F1C84B]" />
                About Starsforlearning
              </div>

              <h1 className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                hey everyone :)
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#66635C] md:text-xl">
                I am a high school student interested in{" "}
                <span className="font-medium text-[#8EACC4]">
                  programming
                </span>
                ,{" "}
                <span className="font-medium text-[#A999B8]">
                  math
                </span>
                ,{" "}
                <span className="font-medium text-[#D59D88]">
                  music
                </span>
                , and{" "}
                <span className="font-medium text-[#D1A82E]">
                  baking
                </span>
                !
              </p>

              <p className="mt-5 max-w-xl text-lg leading-8 text-[#66635C]">
                I created Starsforlearning to share my skills and interests
                with others, while promoting knowledge sharing and
                collaboration in the community.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/courses"
                  className="rounded-full bg-[#292822] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  explore courses
                </Link>

                <Link
                  href="/courses/archive"
                  className="rounded-full border border-[#D8D3C8] bg-white/50 px-6 py-3 text-sm font-medium transition duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  course archive
                </Link>
              </div>
            </div>


            {/* STAR + INTERESTS */}
            <div className="relative flex min-h-[430px] items-center justify-center">

              {/* Orbit */}
              <div className="absolute h-[330px] w-[330px] rounded-full border border-[#E1DDD4] transition-transform duration-1000 hover:scale-105 md:h-[380px] md:w-[380px]" />

              <div className="absolute h-[245px] w-[245px] rounded-full border border-[#E1DDD4]/70 md:h-[290px] md:w-[290px]" />

              {/* Soft glow */}
              <div className="absolute h-44 w-44 rounded-full bg-[#F1C84B]/15 blur-3xl" />

              {/* Star */}
              <div className="group relative z-10">
                <div className="absolute bottom-0 left-1/2 h-5 w-28 -translate-x-1/2 rounded-full bg-[#292822]/10 blur-md transition duration-500 group-hover:scale-110" />

                <Image
                  src="/images/logo-4.png"
                  alt="Starsforlearning star"
                  width={260}
                  height={260}
                  className="relative w-52 transition duration-700 group-hover:-translate-y-3 group-hover:rotate-6 group-hover:scale-110 md:w-60"
                />
              </div>


              {/* Programming */}
              <div className="absolute left-[3%] top-[17%] animate-bounce rounded-2xl border border-[#C5D8E4] bg-[#E7F0F5] px-4 py-3 text-sm font-medium text-[#607F95] shadow-sm [animation-duration:5s] md:left-[2%]">
                <span className="mr-2">&lt;/&gt;</span>
                Programming
              </div>

              {/* Math */}
              <div className="absolute right-[2%] top-[10%] animate-bounce rounded-2xl border border-[#D8CEE0] bg-[#EEE8F1] px-4 py-3 text-sm font-medium text-[#786B86] shadow-sm [animation-duration:4s] md:right-0">
                <span className="mr-2">∑</span>
                Math
              </div>

              {/* Music */}
              <div className="absolute bottom-[12%] left-[5%] animate-bounce rounded-2xl border border-[#E5CFC6] bg-[#F4E5DF] px-4 py-3 text-sm font-medium text-[#9A6F60] shadow-sm [animation-duration:6s] md:left-[3%]">
                <span className="mr-2">♫</span>
                Music
              </div>

              {/* Baking */}
              <div className="absolute bottom-[8%] right-[4%] animate-bounce rounded-2xl border border-[#E8D79B] bg-[#FFF3C9] px-4 py-3 text-sm font-medium text-[#927A25] shadow-sm [animation-duration:5s] md:right-[1%]">
                <span className="mr-2">✦</span>
                Baking
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* FREE COURSES */}
      <section className="relative border-y border-[#E1DDD4] bg-white/40 px-6 py-20 md:px-12 md:py-24">

        <div className="pointer-events-none absolute left-[5%] top-14 h-3 w-3 animate-pulse rounded-full bg-[#A999B8]/50" />

        <div className="pointer-events-none absolute bottom-16 right-[8%] h-4 w-4 animate-pulse rounded-full bg-[#D59D88]/40 [animation-duration:4s]" />

        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-12 md:grid-cols-[0.75fr_1.25fr]">

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#77736A]">
                What I do
              </p>

              <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                learning and 
                <span className="block text-[#8EACC4]">sharing</span>
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#66635C]">
                I offer free online courses throughout the year for students
                all over the world. My courses focus on making programming
                approachable through clear explanations, hands-on activities,
                and fun projects.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="rounded-3xl border border-[#E8D79B] bg-[#FFF3C9] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-sm">
                  <p className="text-3xl font-semibold text-[#927A25]">
                    70+
                  </p>
                  <p className="mt-1 text-sm text-[#6F6540]">
                    students taught
                  </p>
                </div>

                <div className="rounded-3xl border border-[#D8CEE0] bg-[#EEE8F1] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-sm">
                  <p className="text-3xl font-semibold text-[#786B86]">
                    7
                  </p>
                  <p className="mt-1 text-sm text-[#6F6578]">
                    course series
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* STORY */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-5xl">

          <div className="relative overflow-hidden rounded-[2rem] border border-[#E1DDD4] bg-[#FFFDF8] p-8 md:p-12">

            {/* Decorative shapes */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#8EACC4]/10 transition duration-700 hover:scale-125" />


            <div className="relative">

              <h2 className="mt-8 max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Founded in 2024,
                <span className="text-[#F1C84B]"> Starsforlearning </span>
                started as a way to turn a love of learning into something
                that could be shared with others.
              </h2>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}