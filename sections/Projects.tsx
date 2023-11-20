import { ProjectInfo } from "@/components"
import ProjectSlides from "@/components/ProjectSlides"
import { projects } from "@/content"
import { textContainer } from "@/utils/motion"
import {AnimatePresence, MotionValue, motion, useScroll} from "framer-motion"
import { CSSProperties, MutableRefObject, useEffect, useRef, useState } from "react"


export default function Projects({sectionRef, contentRefs, sectionScroll, contentScrolls}:{
    sectionRef: MutableRefObject<null>,
    contentRefs: MutableRefObject<null>[],
    sectionScroll: MotionValue<number>,
    contentScrolls: MotionValue<number>[],
}) {
    const fixedStyle: CSSProperties = {
    position: 'fixed',
    }
    const regularStyle: CSSProperties = {
    position: 'static',
    }
    const [fixed, setFixed] = useState(regularStyle);
    const [hidden, setHidden] = useState(true);
    const [key, setKey] = useState(0);

    useEffect(() => {
    const us = sectionScroll.on("change", (latest) => {
        console.log(hidden);
        console.log(latest);
        if (latest == 0 || latest == 1){
            setFixed(regularStyle);
            setHidden(true);
        }else {
            setFixed(fixedStyle);
            setHidden(false);
        }
    })

    const uss = contentScrolls.map((val, index) => {
        const us = val.on("change", (latest) => {
            if (latest > 0 && latest < 1){
                setKey(index);
            }
        })
        return us;
    })
    return () => {
        us();
        uss.forEach((val) => {
            val();
        });
    }
    })
  return (
    <section ref={sectionRef} className="h-fit w-screen flex justify-between p-10">
        
        <AnimatePresence>
            {
                !hidden &&
                <motion.div 
                        key={key}
                        className="h-screen w-screen inset-0 pointer-events-none"
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
        <div className="h-screen max-w-[30%] min-w-[30%] bg-transparent"/>
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
                            <div ref={contentRefs[index]} className="h-fit w-full min-h-screen bg-transparent">
                                <ProjectSlides slides={project.slides}/>
                            </div>
                            <div className="h-screen w-full bg-transparent"/>
                        </div>
                    )
                })
            }
        </motion.div>

    </section>
  )
}
