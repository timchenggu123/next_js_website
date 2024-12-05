'use client'
import { useScroll } from 'framer-motion';
import { Navbar } from '../components';
import { Hero, About, Journey, Skills, Contact, Projects} from '../sections';
import React, { useRef } from 'react'

export default function Home() {
  const refContainer = useRef(null);
  const refAbout = useRef(null);
  const refSkills= useRef(null);
  const refProjects = useRef(null);

  const {scrollYProgress: scrollAbout } = useScroll({container: refContainer, target: refAbout,  offset: ["0.5 1", "1 0.5"]});
  const {scrollYProgress: scrollSkills } = useScroll({container: refContainer, target: refSkills,  offset: ["0 0.1", "1 1"]});
  const {scrollYProgress: scrollProjects}= useScroll({container: refContainer, target: refProjects, offset: ["0 0.1", "1 1"]});

  return (
    <div ref={refContainer} className=" h-screen overflow-y-scroll overflow-x-hidden bg-primary-black -z-10">
      <div className="snap-start h-screen flex flex-col">
        <div>
          <Navbar/>
        </div>  
        <div className="flex-grow">
          <Hero/>
        </div>
      </div>

      <div ref={refAbout}>
        <About scroll={scrollAbout}/>
      </div>

      <div id={"journey"} className='h-fit'>
        <Journey/>
      </div>

      {/* Section pad */}
      <div className="block w-screen h-[10rem] bg-transparent"/>

      <div ref={refSkills} className="h-[400rem] -z-9">
        <div className="relative -z-8">
          <Skills scroll={scrollSkills}/>
          <div className="absolute top-0 w-screen h-[400rem] bg-transparent z-10">
            <div id={"skills"} className="relative w-screen h-screen bg-transparent z-10 top-[320rem]"/>
          </div>
          
        </div>
      </div>

      {/* Section pad */}
      <div className="block w-screen h-[10rem] bg-transparent"/>

      <div id={"projects"} className='h-fit'>
        <Projects sectionRef={refProjects} containerRef={refContainer} sectionScroll={scrollProjects}/>
      </div>

      {/* Section pad */}
      <div className="block w-screen h-[10rem] bg-transparent"/>

      <div id={"contact"}>
        <Contact/>
      </div>
    </div>
  )
}
