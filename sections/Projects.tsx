'use client'
import { ProjectInfo } from "@/components"
import ProjectSlides from "@/components/ProjectSlides"
import { projects } from "@/content"
import {AnimatePresence, MotionValue, motion, useScroll} from "framer-motion"
import { CSSProperties, MutableRefObject, createRef, useEffect, useRef, useState } from "react"


export default function Projects({sectionRef, containerRef, sectionScroll}:{
    sectionRef: MutableRefObject<null>,
    containerRef: MutableRefObject<null>,
    sectionScroll: MotionValue<number>,
}) {

    const fixedStyle: CSSProperties = {
    position: 'fixed',
    }
    const regularStyle: CSSProperties = {
    position: 'static',
    }

    const [hidden, setHidden] = useState(true);
    const [key, setKey] = useState(0);
    const shows = projects.map((val, index) => {
        const [show, setShow] = useState(false);
        return {show, setShow};
    })

    useEffect(() => {
    const us = sectionScroll.on("change", (latest) => {
        if (latest == 0 || latest == 1){
            setHidden(true);
        }else {
            setHidden(false);
        }
    })

    return () => {
        us();
    }
    })
  return (
    <section ref={sectionRef} className="h-fit w-screen flex flex-col items-center">
        <div className="lg:max-w-[2000px] md:flex hidden justify-between md:p-10 p-5">
            <AnimatePresence>
                {
                    !hidden &&
                    <motion.div 
                            key={key}
                            className="h-screen w-screen xl:pl-[150px] inset-0 pointer-events-none"
                            initial={{opacity: 0, x: "-50vw"}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                            exit={{opacity: 0, x: "-50vw"}}
                            style={fixedStyle}
                        >
                            <ProjectInfo data={projects[key]} id={key}/>
                        </motion.div>
                }
            </AnimatePresence>
            <div className="block h-screen max-w-[30%] min-w-[30%] bg-transparent"/>
            <motion.div 
                className="flex flex-col items-center h-fit flex-grow-[100%] ml-10"
                initial={{opacity: 0, y: "30vw"}}
                whileInView={{opacity: 1, y: "10vw"}}
                transition={{duration: 0.5}}    
                viewport={{once: false, amount: 0.0}}
                >
                {
                    projects.map((project, index) => {
                        return (
                            <div key={index}>
                                <div className="h-fit w-full min-h-screen bg-transparent">
                                    <ProjectSlides index={index} slides={project.slides} setKey={setKey} containerRef={containerRef}/>
                                </div>
                                <div className="h-screen w-full bg-transparent"/>
                            </div>
                        )
                    })
                }
            </motion.div>
        </div>
        <div className="md:hidden flex flex-col justify-between md:p-10 p-5">
            {
                projects.map((project, index) => {
                    return (
                        <motion.div 
                            key={index}
                            className="flex flex-col h-fit min-h-screen w-full"
                            initial={{opacity: 0, x: "-50vw"}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5}}
                            exit={{opacity: 0, x: "-50vw"}}
                        >
                            <ProjectInfo data={project} id={index}/>
                            {
                                shows[index].show? 
                                <div className="h-fit hover:animate-bounce group w-full underline text-center font-mono text-secondary-white bg-transparent" onClick={() =>{shows[index].setShow(false)}}>
                                    Hide<div className="inline-block rotate-[90deg] transition-transform">{`\u00A0->`}</div>
                                </div>:
                                <div className="h-fit hover:animate-bounce group w-full underline text-center font-mono text-secondary-white bg-transparent" onClick={() =>{shows[index].setShow(true)}}>
                                    Learn More<div className="inline-block group-hover:rotate-[90deg] transition-transform">{`\u00A0->`}</div>
                                </div>
                            }
                            {
                                shows[index].show &&
                                <div className="h-fit w-full min-h-screen bg-transparent">
                                    <ProjectSlides index={index} slides={project.slides} setKey={setKey} containerRef={containerRef}/>
                                </div> 
                            }
                        </motion.div>
                    )
                })
            }
 
        </div>
    </section>
  )
}
