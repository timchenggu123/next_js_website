'use client';

import { Aboutimg } from '@/components';
import { MotionValue, useMotionValueEvent, useScroll } from 'framer-motion';
import { MutableRefObject, useRef } from 'react';

export default function About({scroll}:{scroll: MotionValue<number>}) {
  return (
    <>
      <section className="h-screen relative snap-start" id="about">
        <Aboutimg scroll={scroll}/>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className = "block font-serif text-3xl md:text-5xl lg:text-6xl text-center md:-translate-x-20 -translate-x-10 -translate-y-16 text-secondary-white"
          >Nothing excites me more </h1>
          <h1 className = "block font-serif text-3xl md:text-5xl lg:text-6xl text-center md:translate-x-20 translate-x-10 -translate-y-16 text-secondary-white"
          >than solving novel problems </h1>
          <h1 className = "block font-serif text-3xl md:text-5xl lg:text-6xl text-center md:-translate-x-20 -translate-x-10 -translate-y-16 text-secondary-white"
          >with innovative solutions.</h1>
        </div>
        
      </section>
      
    </>
  )
}
