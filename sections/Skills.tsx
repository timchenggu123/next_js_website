import { ScrollTypingText } from "@/components"
import CursorBlinker from "@/components/Cursor"
import { MotionValue, useMotionValueEvent, useScroll } from "framer-motion"
import { CSSProperties, useEffect, useRef, useState } from "react"


export default function Skills({scroll: scrollParent}:{scroll: MotionValue<number>}) {
  const fixedStyle: CSSProperties = {
    position: 'sticky',
  }
  const regularStyle: CSSProperties = {
    position: 'static',
  }
  const [fixed, setFixed] = useState(regularStyle);
  const [hidden, setHidden] = useState("none");
  useEffect(() => {
    const unsubscribe = scrollParent.on("change", (latest) => {
      if (latest == 0 || latest == 1){
        setHidden("none");
        setFixed(regularStyle);
      }else {
        setHidden("block");
        setFixed(fixedStyle);
      }
    })
    return () => {
      unsubscribe();
    }
  })
  useMotionValueEvent(scrollParent, 'change', (latest) => {
    console.log(latest);
  });

  const container = useRef(null);
  const target= useRef(null);
  const { scrollYProgress: scrollSkills } = useScroll({container: container, target: target,  offset: ["0 0.1", "1 0"]});
  
  return (
    <div ref={container} className="relative h-screen -z-8 overflow-scroll">
        <section style={fixedStyle} className="flex flex-col items-center justify-start w-screen h-screen bg-primary-black top-0 z-1">
            <h1 className="text-7xl text-secondary-white font-mono top-[10rem] mb-10 mt-10">
                <ScrollTypingText text="<Skills>" start={0.05} end={0.35} scroll={scrollSkills} />
                <CursorBlinker/>
            </h1>
            <div className="flex flex-row justify-start items-start w-full h-full">
                <div className="h-full flex flex-col w-[33%] justify-start items-center">
                    <h2 className="text-4xl text-secondary-white">
                        <ScrollTypingText text={`<Front End>`} start={0.2} end={0.35} scroll={scrollSkills} />
                    </h2>
                </div>
                <div className="h-full flex flex-col w-[33%] justify-start items-center">
                    <h2 className="text-4xl text-secondary-white">
                        <ScrollTypingText text={`<Back End>`} start={0.2} end={0.35} scroll={scrollSkills} />
                    </h2>
                </div>
                <div className="h-full flex flex-col w-[33%] justify-start items-center">
                    <h2 className="text-4xl text-secondary-white">
                        <ScrollTypingText text={`<Machine Learning>`} start={0.2} end={0.35} scroll={scrollSkills} />
                    </h2>
                </div>
            </div>
      </section>
      <div ref={target} style={{display: hidden}} className="absolute top-0 w-screen h-[500rem] bg-transparent z-10"/>
    </div>
  )
}
