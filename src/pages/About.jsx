import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="bg-base-100">
      {/* HERO */}
      <section className="border-b border-base-content/10">
        <div
          className="
            mx-auto
            flex
            min-h-[60vh]
            w-[90%]
            items-end
            pb-14

            md:w-[80%]
            md:pb-20

            lg:min-h-[70vh]
            lg:pb-60
          "
        >
          <div className="max-w-3xl">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-primary

                md:text-[10px]
              "
            >
              About Us
            </p>

            <h1
              className="
                mt-4
                font-serif
                text-5xl
                leading-[0.95]
                tracking-tight

                md:text-6xl

                lg:text-8xl
              "
            >
              Designed with intention.
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-7
                text-base-content/55

                md:text-base
              "
            >
              We create considered pieces with a focus on simplicity, enduring
              design and the details that make everyday essentials feel
              distinctive.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 md:py-24 lg:py-32">
        <div
          className="
            mx-auto
            grid
            w-[90%]
            grid-cols-1
            gap-12

            md:w-[80%]
            md:grid-cols-2
            md:gap-16

            lg:gap-24
          "
        >
          {/* IMAGE */}
          <div className="overflow-hidden bg-base-200">
            <div className="aspect-4/5">
              <img
                src="/models/model-1.jpg"
                alt="Our story"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-primary
              "
            >
              Our Philosophy
            </p>

            <h2
              className="
                mt-4
                font-serif
                text-3xl
                leading-tight
                tracking-tight

                md:text-4xl

                lg:text-5xl
              "
            >
              Less, but better.
            </h2>

            <div className="mt-7 max-w-lg space-y-5">
              <p className="text-sm leading-7 text-base-content/55">
                Our approach is rooted in restraint. We believe great design
                does not need to compete for attention.
              </p>

              <p className="text-sm leading-7 text-base-content/55">
                Every silhouette, material and detail is considered to create
                pieces that remain relevant beyond a single season.
              </p>
            </div>

            <Link
              to="/collection"
              className="
                mt-8
                w-fit
                border-b
                border-base-content/40
                pb-1
                text-[9px]
                uppercase
                tracking-[0.2em]
                transition-colors
                hover:border-primary
                hover:text-primary
              "
            >
              Explore Collection →
            </Link>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="bg-[#211E1A] text-[#F3EEE4]">
        <div
          className="
            mx-auto
            flex
            min-h-70
            w-[90%]
            items-center
            justify-center
            text-center

            md:w-[80%]
            md:min-h-80
          "
        >
          <div className="max-w-2xl">
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.35em]
                text-[#A88A5A]
              "
            >
              Our World
            </p>

            <h2
              className="
                mt-4
                font-serif
                text-3xl
                leading-tight

                md:text-4xl

                lg:text-5xl
              "
            >
              Made to be seen.
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
