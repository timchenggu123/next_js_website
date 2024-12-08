'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import {useState} from 'react';
import { navVariants, staggerContainer } from '../utils/motion';
import CursorBlinker from './Cursor';

const Items = [
  {
    name: 'About',
    link: '#about',
  },
  {
    name: 'Journey',
    link: '#journey',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Projects',
    link: '#projects',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
];

export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);
  return(
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.xPaddings} py-3 relative`}
    onMouseLeave={() => setIsHovering(false)}
  >
    <div className="flex justify-start h-[3rem]">
      <AnimatePresence>
        {!isHovering && <motion.div
          className="w-[7rem] text-2xl p-3 backdrop-blur-lg rounded-xl border-b-zinc-700 border-b-1"
          onMouseEnter={() => setIsHovering(true)}
          exit={{ opacity: 0, fontSize: 0, padding: 0, width: 0}}
        >{'> $ cd '}</motion.div>}
      </AnimatePresence>
      <div className="flex-grow flex flex-col items-center">
        <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, x: "-10%"}}
            animate={{ opacity: 1, x: 0, margin: "auto"}}
          className={`${styles.innerWidth} flex flex-col md:flex-row items-center justify-around backdrop-blur-xl border-b-zinc-700 border-b-2 rounded-3xl`}
            exit={{ opacity: 0, x: "-10%"}}
          >
            {Items.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="font-mono text-xl text-secondary-white hover:scale-110 hover:drop-shadow-[0_0_0.5rem_#ffffff]"
                >
                  {item.name}
                </a>
              ))
            }
          </motion.div>
          )
        }
        </AnimatePresence>
      </div>
    </div>
  </motion.nav>)
};