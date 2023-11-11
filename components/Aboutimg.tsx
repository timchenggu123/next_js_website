'use client'
import { motion, useSpring, useTransform, MotionValue, useMotionValueEvent} from "framer-motion"

export default function Aboutimg({scroll}:{scroll: MotionValue<number>}) {
    const xpos = useTransform(scroll, [0, 0.8, 1], [-300, 400, 600]);
    const x = useSpring(xpos, 
        {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
        });
    return (
        <motion.img 
            src="/about.svg" 
            style={{x: x}}
            // className="absolute translate-y-28 w-[50%] h-[50%] object-cover invert opacity-30"
            className="object-cover invert opacity-30"
            />
    )
}
