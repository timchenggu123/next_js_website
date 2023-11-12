'use client'
import { useScroll } from 'framer-motion';
import { Navbar } from '../components';
import { Hero, About, Journey, Skills, Contact} from '../sections';
import React, { useRef } from 'react'

export default function Home() {
  const container = useRef(null);
  const targetAbout = useRef(null);
  const targetSkills= useRef(null);
  const { scrollYProgress: scrollAbout } = useScroll({container: container, target: targetAbout,  offset: ["0.5 1", "1 0.5"]});
  const { scrollYProgress: scrollSkills } = useScroll({container: container, target: targetSkills,  offset: ["0 0.1", "1 1"]});

  return (
    <div ref={container} className=" h-screen overflow-y-scroll overflow-x-hidden bg-primary-black -z-10">
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

      <div ref={targetSkills} className="h-[200rem] -z-9">
        <div className="relative -z-8">
          <Skills scroll={scrollSkills}/>
          <div className="absolute top-0 w-screen h-[200rem] bg-transparent z-10">
            <div id={"skills"} className="relative w-screen h-screen bg-transparent z-10 top-[120rem]"/>
          </div>
          
        </div>
      </div>

      <div id={"journey"} className='h-fit'>
        <Journey/>
      </div>

      {/* Section pad */}
      <div className="block w-screen h-[10rem] bg-transparent"/>

      <div id={"contact"}>
        <Contact/>
      </div>
    </div>
  )
};
