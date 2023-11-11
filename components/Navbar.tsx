'use client';

import { AnimatePresence, motion } from 'framer-motion';

import styles from '../styles';
import {useState} from 'react';
import { navVariants, staggerContainer } from '../utils/motion';

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
    className={`${styles.xPaddings} py-8 relative`}
    onMouseLeave={() => setIsHovering(false)}
  >
    <div className="flex justify-end">
    {/* <div className="absolute w-[50%] inset-0 gradient-01"/> */}
      <div className="flex-grow flex flex-col, items-center">
        <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, x: "10%"}}
            animate={{ opacity: 1, x: 0, margin: "auto"}}
            className={`${styles.innerWidth} flex justify-around`}
            exit={{ opacity: 0, x: "10%" }}
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
      <div className="hover:cursor-pointer hover:scale-125 hover:drop-shadow-[0_0_0.5rem_#ffffff] padding-2 h-14 w-14 p-2">
        <img src="/menu.svg" 
            className="h-full w-full"
            onMouseEnter={() => setIsHovering(true)}
        />
      </div>
    </div>
  </motion.nav>)
};