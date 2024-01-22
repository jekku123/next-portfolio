'use client';

import { motion } from 'framer-motion';

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
      y: 10,
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
      x: '-220%',
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 30,
      },
    },
  };

  return (
    <div className="overflow-hidden relative h-[calc(100vh-75px)]">
      <div className="max-w-6xl px-6 m-auto h-full ">
        <motion.div
          className="flex flex-col justify-center h-full w-2/3 gap-9"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="text-3xl text-purple-600 tracking-[10px]" variants={textVariants}>
            Jesse Manninen
          </motion.h2>
          <motion.h1 className="font-bold text-7xl" variants={textVariants}>
            Full-Stack Web Developer
          </motion.h1>

          <motion.div className="z-20" variants={textVariants}>
            <motion.button
              className="p-5 mr-5 font-light bg-transparent border border-solid cursor-pointer rounded-xl"
              variants={textVariants}
            >
              See the latest works
            </motion.button>
            <motion.button
              className="p-5 mr-5 font-light bg-transparent border border-solid cursor-pointer rounded-xl"
              variants={textVariants}
            >
              Contact me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-[#e6e4e4d9] dark:text-[#ffffff0a] w-1/2 font-bold z-0"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer, Creator, Consult
      </motion.div>
    </div>
  );
}
