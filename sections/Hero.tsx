'use client';

import { motion, stagger } from 'framer-motion';

import styles from '../styles';
import {staggerContainer, textContainer, textVariant, textVariant2 } from '../utils/motion';
import { Cursor } from '@/components';

export default function Hero() {
  return (
    <>
     <section className={`${styles.yPaddings} h-full w-full`}>
      <motion.div
        variants={staggerContainer(0.3, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.xPaddings} mx-auto flex flex-col justify-center items-center h-full w-full`}
      >
          <h1
            className="lg:text-9xl md:text-8xl text-6xl font-mono text-secondary-white -translate-y-8"
          >
          <motion.span
          variants={textContainer}
          initial="hidden"
          viewport={{ once: true, amount: 0.25 }}
          whileInView="show">
          {
            Array.from(">").map((char, index) => (
              <motion.span
                key={index}
                variants={textVariant2}
                className="inline-block font-mono shadow-white drop-shadow-[0_0_0.3rem_#ffffff70]"
              >
                {char}
              </motion.span>
            ))
          }
          {
            Array.from("tim@gu").map((char, index) => (
              <motion.span
                key={index}
                variants={textVariant2}
                className="inline-block font-mono text-yellow-300 shadow-white drop-shadow-[0_0_0.3rem_#ffffff70]"
              >
                {char}
              </motion.span>
            ))
          }
          {
            Array.from(":").map((char, index) => (
              <motion.span
                key={index}
                variants={textVariant2}
                className="inline-block font-mono text-secondary-white drop-shadow-[0_0_0.3rem_#ffffff70]"
              >
                {char}
              </motion.span>
            ))
          }
          {
            Array.from("~").map((char, index) => (
              <motion.span
                key={index}
                variants={textVariant2}
                className="inline-block font-mono text-blue-700 drop-shadow-[0_0_0.3rem_#ffffff70]"
              >
                {char}
              </motion.span>
            ))
          }
          {
            Array.from("$").map((char, index) => (
              <motion.span
                key={index}
                variants={textVariant2}
                className="inline-block font-mono text-secondary-white drop-shadow-[0_0_0.3rem_#ffffff70]"
              >
                {char}
              </motion.span>
            ))
          }
          <Cursor/></motion.span>
          <motion.div className="absolute inset-0 gradient-02 z-[-1]" 
              initial={{opacity:0}} 
              whileInView={{opacity:100}}
              viewport={{ once: true, amount: 0.25 }} 
              transition={{delay: 1.2}}/>
          </h1>

          <motion.h1
            variants={textVariant(1.2)}
            className="lg:text-3xl md:text-xl text-lg font-mono text-secondary-white mt-8 drop-shadow-[0_0_0.8rem_#ffffff]"
          >
          ML Researcher | Software Engineer
          </motion.h1>

          <motion.h1
            variants={textVariant(1.2)}
            className="lg:text-xl md:text-lg text-md font-mono text-secondary-white mt-16"
          >
          visit my blog at <a href="https://blog.timgu.me" className="text-blue-500">blog.timgu.me</a>
          </motion.h1>

      </motion.div>
      </section> 
    </>
  )
}
