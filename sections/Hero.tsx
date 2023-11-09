'use client';

import { motion, stagger } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textContainer, textVariant, textVariant2 } from '../utils/motion';
import { Cursor } from '@/components';

export default function Hero() {
  return (
    <>
     <section className={`${styles.yPaddings} h-full w-full`}>
      <motion.div
        variants={staggerContainer(0.3, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.xPaddings} mx-auto flex flex-col justify-center items-center h-full w-full`}
      >

          <h1
            className="lg:text-9xl md:text-8xl text-7xl font-mono text-secondary-white -translate-y-8"
          >
          <motion.span
          variants={textContainer}
          initial="hidden"
          whileInView="show">
          {
            Array.from(">").map((char, index) => (
              <motion.span
                key={index}
                variants={textVariant2}
                className="inline-block font-mono"
              >
                {char}
              </motion.span>
            ))
          }
          {
            Array.from("tim").map((char, index) => (
              <motion.span
                key={index}
                variants={textVariant2}
                className="inline-block font-mono text-yellow-300"
              >
                {char}
              </motion.span>
            ))
          }
          {
            Array.from("@gu").map((char, index) => (
              <motion.span
                key={index}
                variants={textVariant2}
                className="inline-block font-mono text-yellow-300"
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
                className="inline-block font-mono text-secondary-white"
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
                className="inline-block font-mono text-blue-700"
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
                className="inline-block font-mono text-secondary-white"
              >
                {char}
              </motion.span>
            ))
          }
          <Cursor/></motion.span>
          </h1>

          <motion.h1
            variants={textVariant(1.2)}
            className="lg:text-3xl md:text-2xl text-xl font-mono text-secondary-white mt-8"
          >
          Full Stack Developer | Software Engineer
          </motion.h1>

      </motion.div>
      </section> 
    </>
  )
}
