"use client";

import { Variants, motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 15,
      transition: {
        repeat: Infinity,
        duration: 2,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 30,
      },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-75px)]">
      <div className="mx-auto grid h-full w-full max-w-6xl grid-cols-1 px-6 sm:pt-0 md:grid-cols-3">
        <motion.div
          className="col-span-2 flex h-full flex-col justify-center gap-6 text-balance"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-center text-xl tracking-[10px] text-primary md:text-left md:text-3xl"
            variants={textVariants}
          >
            Jesse Manninen
          </motion.h2>
          <motion.h1
            className="scroll-m-20 text-center text-[2.5rem] font-bold tracking-tight sm:text-7xl md:text-left"
            variants={textVariants}
          >
            Full-Stack Web Developer
          </motion.h1>

          <motion.div
            className="z-20 flex flex-col items-center gap-5 md:flex-row md:items-start"
            variants={textVariants}
          >
            <div className="flex gap-5">
              <motion.button
                className="cursor-pointer rounded-xl border border-solid bg-transparent px-5 py-3 font-light"
                variants={textVariants}
              >
                About me
              </motion.button>
              <motion.button
                className="cursor-pointer rounded-xl border border-solid bg-transparent px-5 py-3 font-light"
                variants={textVariants}
              >
                Contact me
              </motion.button>
            </div>
            <motion.div
              className="flex items-center justify-center"
              variants={textVariants}
              animate="scrollButton"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="z-30 flex items-center justify-center">
          <Image
            src="/pngegg.png"
            alt="hero image"
            width={500}
            height={375}
            className="h-auto w-full rounded-full object-cover"
          />
        </div>
        <motion.div
          className="absolute bottom-[-120px] z-0 w-1/2 whitespace-nowrap text-[50vh] font-bold text-[#e6e4e4d9] dark:text-[#ffffff0a]"
          variants={sliderVariants as Variants}
          initial="initial"
          animate="animate"
        >
          Developer, Creator, Consult
        </motion.div>
      </div>
    </section>
  );
}
