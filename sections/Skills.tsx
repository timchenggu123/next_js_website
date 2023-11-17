import { ScrollTypingText } from "@/components"
import CursorBlinker from "@/components/Cursor"
import { motion, AnimatePresence, MotionValue, useMotionValueEvent, useScroll } from "framer-motion"
import { CSSProperties, useEffect, useRef, useState } from "react"

const frontend = [
  "Next.js",
  "React",
  "TailwindCSS",
  "Framer Motion",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "CSS",
]

const backend=[
  "Rust",
  "Java/Kotlin",
  "PostgresSQL",
  "MySQL",
  "Django",
  "MongoDB",
  "AWS",
  "Digital Ocean"
]

const machinelearning=[
  "Python",
  "PyTorch",
  "SK-Learn",
  "Pandas",
  "HuggingFace",
  "NCCL",
  "DeepSpeed",
  "Horovod"
]


export default function Skills({scroll: scrollParent}:{scroll: MotionValue<number>}) {
  const fixedStyle: CSSProperties = {
    position: 'fixed',
  }
  const regularStyle: CSSProperties = {
    position: 'static',
  }
  const [fixed, setFixed] = useState(regularStyle);
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    const unsubscribe = scrollParent.on("change", (latest) => {
      if (latest == 0 || latest == 1){
        setHidden(true);
        setFixed(regularStyle);
      }else {
        setHidden(false);
        setFixed(fixedStyle);
      }
    })
    return () => {
      unsubscribe();
    }
  })
  
  return (
      <AnimatePresence>
      {!hidden && (
        <motion.section className="fixed flex flex-col items-center justify-start w-screen md:inset-y-10 h-screen bg-primary-black top-0 z-1" initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.2}}>
            <h1 className="text-xl md:text-3xl lg:text-7xl text-secondary-white font-mono top-[10rem] mb-10 mt-10">
                <ScrollTypingText text="<Skills>" start={0.05} end={0.35} scroll={scrollParent} />
                <CursorBlinker/>
            </h1>
            <div className="flex flex-col md:flex-row justify-start md:items-start items-center w-full md:px-[5rem] px-[3rem]">
                <div className="h-full flex flex-col md:w-[33%] justify-start items-center">
                    <h2 className="text-lg md:text-2xl lg:text-4xl text-secondary-white">
                        <ScrollTypingText text={`<Front End>`} start={0.2} end={0.45} scroll={scrollParent} />
                    </h2>
                    <div className="flex md:flex-col flex-wrap h-full md:justify-around justify-start md:space-y-10 items-center md:mb-0 mb-[3rem] mt-[1rem]">
                      {
                        frontend.map((skill,index) => (
                          <div key={index} className="block text-secondary-white font-mono lg:text-xl md:text-lg sm:text-md px-2">
                          <ScrollTypingText text={skill} start={0.5+index*0.025} end={0.7} scroll={scrollParent} />
                          </div>))
                      }
                    </div>
                </div>
                <div className="h-full flex flex-col md:w-[33%] justify-start items-center">
                    <h2 className="text-lg md:text-2xl lg:text-4xl text-secondary-white">
                        <ScrollTypingText text={`<Back End>`} start={0.2} end={0.35} scroll={scrollParent} />
                    </h2>
                    <div className="flex md:flex-col flex-wrap h-full md:justify-around justify-start md:space-y-10 items-center md:mb-0 mb-[3rem] mt-[1rem]">
                      {
                        backend.map((skill,index) => (
                          <div key={index} className="block text-secondary-white font-mono lg:text-xl md:text-lg sm:text-md px-2">
                          <ScrollTypingText text={skill} start={0.5+index*0.025} end={0.7} scroll={scrollParent} />
                          </div>))
                      }
                    </div>
                </div>
                <div className="h-full flex flex-col md:w-[33%] justify-start items-center">
                    <h2 className="text-lg md:text-2xl lg:text-4xl text-secondary-white">
                        <ScrollTypingText text={`<Machine Learning>`} start={0.2} end={0.35} scroll={scrollParent} />
                    </h2>
                    <div className="flex md:flex-col flex-wrap h-full md:justify-around justify-start md:space-y-10 items-center md:mb-0 mb-[3rem] mt-[1rem]">
                      {
                        machinelearning.map((skill,index) => (
                          <div key={index} className="block text-secondary-white font-mono lg:text-xl md:text-lg sm:text-md px-2">
                          <ScrollTypingText text={skill} start={0.5+index*0.025} end={0.7} scroll={scrollParent} />
                          </div>))
                      }
                    </div>
                </div>
            </div>
        </motion.section>
      )}
      </AnimatePresence>
  )
}
