'use client'
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { Navbar } from '../components';
import { Hero, About, Journey, Skills} from '../sections';
import React, { useRef } from 'react'

export default function Home() {
  const container = useRef(null);
  const targetAbout = useRef(null);
  const targetSkills= useRef(null);
  const { scrollYProgress: scrollAbout } = useScroll({container: container, target: targetAbout,  offset: ["0.5 1", "1 0.5"]});
  const { scrollYProgress: scrollSkills } = useScroll({container: container, target: targetSkills,  offset: ["0 0.1", "1 0"]});

  return (
    <div ref={container} className="snap-y snap-proximity h-screen overflow-y-scroll overflow-x-hidden bg-primary-black -z-10">
      <div className="snap-start h-screen flex flex-col">
        <div>
          <Navbar/>
        </div>  
        <div className="flex-grow">
          <Hero/>
        </div>
      </div>

      <div ref={targetAbout}>
        <About scroll={scrollAbout}/>
      </div>
      
      {/* Section pad */}
      <div className="block w-screen h-[10rem] bg-transparent"/>

      <div ref={targetSkills} className="snap-start h-screen -z-9">
        <Skills scroll={scrollSkills}/>
      </div>
      <Journey/>

    </div>
  )
};
