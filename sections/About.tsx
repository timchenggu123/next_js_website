'use client';

import { Aboutimg } from '@/components';
import CursorBlinker from '@/components/Cursor';
import { MotionValue, useMotionValueEvent, useScroll } from 'framer-motion';
import { MutableRefObject, useRef } from 'react';

export default function About({scroll}:{scroll: MotionValue<number>}) {
  return (
    <>
      <section className="h-screen relative snap-start" id="about">
        <div className="absolute inset-0 flex flex-col items-start justify-center">
          <Aboutimg scroll={scroll}/>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
          <h1 className = "block text-xl md:text-4xl lg:text-5xl text-center md:-translate-x-20 -translate-x-10  text-secondary-white"
          >Nothing excites me more </h1>
          <h1 className = "block text-xl md:text-4xl lg:text-5xl text-center md:translate-x-20 translate-x-10  text-secondary-white"
          >than solving novel problems </h1>
          <h1 className = "block text-xl md:text-4xl lg:text-5xl text-center md:-translate-x-20 -translate-x-10  text-secondary-white"
          >with innovative solutions<CursorBlinker/></h1>
        </div>
        
      </section>
      
    </>
  )
}
