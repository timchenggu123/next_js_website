'use client';

import { MotionValue} from 'framer-motion';
import { useEffect, useState } from 'react'

export default function ScrollTypingText({
    text,
    start,
    end,
    scroll,
}:{text: string, 
    start: number,
    end: number,
    scroll: MotionValue<number>}) {
    
  return (
    <>
    {
        Array.from(text).map((char, index) => (
            <TypingChar 
            key={index}
            char={char}
            index={index}
            len={text.length}
            start={start}
            end={end}
            scroll={scroll}
            />
        ))
    }
    </>
  )
}

function TypingChar({char, index, len, start, end, scroll}:
    {char: string, index:number, len: number, start:number, end:number, scroll: MotionValue<number>}) {
    const [show, setShow] = useState("none");
    useEffect(() => {
        const unsubscribe = scroll.on("change", (latest) => {
            if (latest > index/len*(end-start)+start) {
                setShow("inline-block");
            }else{
                setShow("none");
            }
        })
        return () => {
            unsubscribe();
        }
    })
    return (
        <>
        {show && (
            <span
            style={{display: show}}
            className={`inline-block`}
            >
            {char}
            </span>
        )}
        </>

    )
}