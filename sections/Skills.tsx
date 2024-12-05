import { ScrollTypingText } from "@/components"
import CursorBlinker from "@/components/Cursor"
import { motion, AnimatePresence, MotionValue, useMotionValueEvent, useScroll } from "framer-motion"
import { CSSProperties, useEffect, useRef, useState } from "react"

// const frontend = [
//   "[frontend]",
//   "\n",
//   "Next.js",
//   "React",
//   "Node.js",
//   "TailwindCSS",
//   "Framer Motion",
//   "TypeScript",
//   "Html/CSS",
// ]
const frontend = "Next.js React Node.js TailwindCSS FramerMotion TypeScript Html/CSS"

// const backend=[
//   "C++",
//   "Rust",
//   "Java/Kotlin",
//   "Ruby on Rails",
//   "Docker/Kubernetes",
//   "PostgresSQL/MySQL",
//   "MangoDB",
//   "AWS Suite",
// ]

const backend = "C++ Rust Java/Kotlin RubyOnRails Docker/Kubernetes PostgresSQL/MySQL MangoDB AWS Suite"

// const machinelearning=[
//   "Python",
//   "PyTorch",
//   "CUDA",
//   "ROCm/HIP",
//   "SK-Learn",
//   "HuggingFace",
//   "Ollama",
//   "DeepSpeed",
// ]

const machinelearning = "Python PyTorch CUDA ROCm/HIP SK-Learn HuggingFace Ollama DeepSpeed"

export default function Skills({scroll: scrollParent}:{scroll: MotionValue<number>}) {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    const unsubscribe = scrollParent.on("change", (latest) => {
      if (latest == 0 || latest == 1){
        setHidden(true);
      }else {
        setHidden(false);
      }
    })
    return () => {
      unsubscribe();
    }
  })
  
  const [cursorHidden1, setCursorHidden1] = useState(true);
  const [cursorHidden2, setCursorHidden2] = useState(true);
  const [cursorHidden3, setCursorHidden3] = useState(true);
  const [cursorHidden4, setCursorHidden4] = useState(true);
  useEffect(() => {
    const cursorUnsubscribe = scrollParent.on("change", (latest) => {
      if (latest > 0.35){
        setCursorHidden1(true);
      }else {
        setCursorHidden1(false);
      }

      if (latest < 0.4 || latest > 0.6){
        setCursorHidden2(true);
      }else {
        setCursorHidden2(false);
      }

      if (latest < 0.6 || latest > 0.8){
        setCursorHidden3(true);
      }
      else {
        setCursorHidden3(false);
      }

      if (latest < 0.8){
        setCursorHidden4(true);
      } 
      else {
        setCursorHidden4(false);
      }
    })
    return () => {
      cursorUnsubscribe();
    }
  })

  return (
      <AnimatePresence>
      {!hidden && (
        <motion.section className="fixed flex flex-col items-left justify-center w-screen h-screen bg-primary-black top-0 z-1" initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.2}}>
            <h2 className="text-xl md:text-2xl lg:text-5xl text-secondary-white font-mono mb-4 md:px-[5rem] px-[3rem]">
                <span className="text-yellow-300">{`tim@gu`}</span><span className="text-blue-700">{`~`}</span>:$
                <ScrollTypingText text=" ls ~/Skills" start={0.2} end={0.3} scroll={scrollParent} />
                {!cursorHidden1 && <CursorBlinker/>}
            </h2>
            <div className="flex flex-col justify-start w-full md:px-[5rem] px-[3rem]">
                <div className="flex w-full flex-row justify-start items-center">
                    <div className="flex flex-col flex-wrap justify-start w-full items-start md:mb-10 mb-[3rem] mt-[1rem]">
                      <div className="block text-secondary-white font-mono lg:text-3xl md:text-lg sm:text-md mb-4">
                          <ScrollTypingText text={`[Front End]`} start={0.35} end={0.4} scroll={scrollParent} />
                      </div>
                      <div className="block text-secondary-white font-mono lg:text-3xl md:text-lg sm:text-md mb-8">
                          <ScrollTypingText text={frontend} start={0.4} end={0.5} scroll={scrollParent} />{!cursorHidden2 && <CursorBlinker/>}
                      </div>
                      <div className="block text-secondary-white font-mono lg:text-3xl md:text-lg sm:text-md mb-4">
                          <ScrollTypingText text={`[Back End]`} start={0.55} end={0.6} scroll={scrollParent} />
                      </div>
                      <div className="block text-secondary-white font-mono lg:text-3xl md:text-lg sm:text-md mb-8">
                          <ScrollTypingText text={backend} start={0.6} end={0.7} scroll={scrollParent} />{!cursorHidden3 && <CursorBlinker/>}
                      </div>
                      <div className="block text-secondary-white font-mono lg:text-3xl md:text-lg sm:text-md mb-4">
                          <ScrollTypingText text={`[Machine Learning]`} start={0.75} end={0.8} scroll={scrollParent} />
                      </div>
                      <div className="block text-secondary-white font-mono lg:text-3xl md:text-lg sm:text-md mb-4">
                          <ScrollTypingText text={machinelearning} start={0.8} end={0.9} scroll={scrollParent} />{!cursorHidden4 && <CursorBlinker/>}
                      </div>
                    </div>
                </div>
            </div>
        </motion.section>
      )}
      </AnimatePresence>
  )
}
