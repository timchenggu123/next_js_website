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

export default function CursorBlinker() {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className={`inline-block lg:h-4 lg:w-8 md:h-3 md:w-6 h-2 w-4 translate-y-1 translate-x-3 bg-secondary-white`}
      transition={{delay: 0.5}}
    />
  );
}