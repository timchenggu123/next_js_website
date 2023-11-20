import { motion } from "framer-motion";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

export default function CursorBlinker({size}:{size?: "sm" | "md" | "lg"}) {
  size = size || "lg";
  if (size === "lg"){
    return (
      <motion.div
        variants={cursorVariants}
        animate="blinking"
        className={`inline-block lg:h-4 lg:w-8 md:h-3 md:w-6 h-2 w-4 translate-y-1 translate-x-3 bg-secondary-white`}
        transition={{delay: 0.5}}
      />
    );
  }else if (size === "md"){
    return (
      <motion.div
        variants={cursorVariants}
        animate="blinking"
        className={`inline-block lg:h-2 lg:w-4 md:h-1 md:w-2 h-1 w-2 translate-y-1 bg-secondary-white`}
        transition={{delay: 0.5}}
      />
    ); 
  }else if (size == "sm"){
    return (
      <motion.div
        variants={cursorVariants}
        animate="blinking"
        className={`inline-block lg:h-1 lg:w-2 md:h-[0.10rem] md:w-[0.20rem] h-[0.8rem] w-[0.16rem] translate-y-1 bg-secondary-white`}
        transition={{delay: 0.5}}
      />
    );  
  }

}