
"use client";

import { motion } from "framer-motion";

const AboutMeandTitle = () => {
  const paragraphs = [
    "I am a motivated and curious individual who is always eager to learn, grow, and explore new ideas.",
    "For me, programming is more than just writing code; it is a way to express creativity, solve problems, and turn ideas into real-world experiences.",
    "As an aspiring Front-End Developer, I enjoy learning new technologies and building modern, interactive, and user-friendly websites.",
    "I believe that patience, dedication, and continuous practice are essential to achieving long-term goals.",
    "I also find inspiration in art, nature, and the world around me, which help me approach challenges with creativity and a fresh perspective.",
    "My goal is to keep improving my skills, gain practical experience, and contribute to meaningful projects that make a difference.",
    "I value teamwork and collaboration because sharing ideas, learning from others, and supporting one another are important parts of personal and professional growth.",
  ];

  return (
    <section
      id="about"
      className="px-4 sm:px-6 py-12 md:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          relative isolate mx-auto max-w-6xl
          overflow-hidden rounded-[2rem]
          border border-orange-100
          bg-gradient-to-br from-white via-orange-50/80 to-amber-100/60
          p-6 sm:p-8 md:p-12 lg:p-14
          shadow-[0_20px_70px_-25px_rgba(124,45,18,0.18)]
        "
      >
        {/* Background decorations */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -right-24 -top-24
            -z-10 h-72 w-72 rounded-full
            bg-orange-300/20 blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -bottom-28 -left-20
            -z-10 h-72 w-72 rounded-full
            bg-amber-300/20 blur-3xl
          "
        />

        <div className="grid items-center gap-10 md:grid-cols-5 md:gap-12 lg:gap-16">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm md:col-span-2"
          >
            <div
              aria-hidden="true"
              className="
                absolute -inset-3 rounded-[1.7rem]
                bg-gradient-to-br from-orange-400
                via-amber-300 to-red-400
                opacity-30 blur-xl
              "
            />

            <div className="
              relative overflow-hidden rounded-[1.5rem]
              border border-white/80 bg-white p-2
              shadow-xl
            ">
              <img
                src="/image/AboutMe/shervin.png"
                alt="Shervin Mohebi"
                loading="lazy"
                className="
                  aspect-[4/5] w-full rounded-[1.1rem]
                  object-cover object-center
                  transition-transform duration-700
                  hover:scale-[1.035]
                "
              />
            </div>

            <div className="
              absolute -bottom-4 left-1/2
              w-max -translate-x-1/2
              rounded-full border border-orange-100
              bg-white/95 px-5 py-2.5
              text-sm font-semibold tracking-wide
              text-stone-700 shadow-lg backdrop-blur
            ">
              Aspiring Front-End Developer
            </div>
          </motion.div>

          {/* About content */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="
                mb-3 block text-center
                text-xs font-bold uppercase
                tracking-[0.25em] text-orange-700
                sm:text-sm md:text-left
              ">
                Get to know me
              </span>

              <h2 className="
                text-center text-4xl font-extrabold
                tracking-tight text-stone-900
                sm:text-5xl md:text-left
                lg:text-6xl
              ">
                About{" "}
                <span className="
                  bg-gradient-to-r from-orange-600
                  to-red-500 bg-clip-text text-transparent
                ">
                  Me
                </span>
              </h2>

              <div className="
                mx-auto mt-5 h-1.5 w-16
                rounded-full bg-gradient-to-r
                from-orange-500 to-red-500
                md:mx-0
              " />

              <p className="
                mt-7 text-center text-base
                font-normal leading-8 text-stone-600
                sm:text-[17px] md:text-left
              ">
                {paragraphs[0]}
              </p>
            </motion.div>

            <div className="mt-5 space-y-4">
              {paragraphs.slice(1).map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(index * 0.08, 0.3),
                  }}
                  className="
                    text-center text-base
                    leading-8 text-stone-600
                    sm:text-[17px] md:text-left
                  "
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Skills tags */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="
                mt-8 flex flex-wrap justify-center
                gap-2 md:justify-start
              "
            >
              {["HTML", "CSS", "JavaScript", "Learning & Growing"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full border border-orange-200/80
                      bg-white/80 px-4 py-2
                      text-xs font-semibold text-stone-700
                      shadow-sm transition-all duration-300
                      hover:-translate-y-0.5
                      hover:border-orange-400
                      hover:bg-orange-50
                      sm:text-sm
                    "
                  >
                    {skill}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMeandTitle;
