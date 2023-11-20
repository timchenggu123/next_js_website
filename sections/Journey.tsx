'use client';
import { motion, stagger } from 'framer-motion';
import {Steps} from '@/components';
import {journey} from '@/content';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles';
import { slideIn, staggerContainer, textContainer, textVariant, textVariant2 } from '../utils/motion';
import CursorBlinker from '@/components/Cursor';

const data = journey.reverse();
export default function Journey() {
    const [translateX, setTranslateX] = useState('0rem');
    return (
    <>
    <section className="min-h-screen relative h-fit">
        <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true, amount: 0.25 }}
            transition={{duration: 0.5, delay: 0.5 }}
            className="absolute inset-0 flex flex-col justify-center items-center rounded-[7rem]"
        > 
            <Image
                src="/bg1.jpg"
                alt="background"
                width={1280}
                height={720}
                style={{objectFit: 'cover'}}
                className="rounded-[7rem] h-[70%] w-[70%] py-11"
            />

        </motion.div>
        <div className="w-screen h-auto rounded-[7rem] backdrop-blur-lg backdrop-brightness-50 bg-slate-700 bg-opacity-10"> 
            <h1
                className = "w-full pt-[3rem] text-xl md:text-3xl lg:text-7xl text-center font-mono drop-shadow-[0_0_3rem_#ffffff70] text-secondary-white"
            >
                {`<Journey>`}
                <CursorBlinker/>
            </h1>

            {/* For medium and large displays */}
            <div className="md:flex hidden relative max-w-[80rem] pt-[2rem] mx-auto flex-col items-center">
                <motion.div
                    initial={{opacity:0}}
                    whileInView={{ opacity:1}}
                    viewport={{once: true, amount: 0.25}}
                    transition={{
                        duration: 0.1, 
                    }}
                    className="relative hover:z-10 z-1 flex justify-start w-full mb-2 p-2">
                    <Steps props={{data: data.slice(0,5), height: 19, width: 13, type: 0, rotation:6}}/>
                </motion.div>
                <motion.div 
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    viewport={{once: true, amount: 0.25}}
                    transition={{
                        duration: 0.1, 
                    }}
                    className="relative hover:z-10 z-1 flex w-full justify-end p-2">
                    <Steps props ={{data: data.slice(5,), height: 19, width: 13, type: 1, rotation: 6}}/>
                </motion.div>
            </div>

            {/* For Small Displays */}
            <div className="md:hidden flex w-[screen] mx-auto pt-[5rem] flex-col items-center">
                <motion.div
                    initial={{scaleX: 0}}
                    whileInView={{ scaleX:1}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{
                        duration: 0.2, 
                    }}
                    className="relative hover:z-10 z-1 flex justify-center flex-wrap mx-auto p-2 h-auto">
                    <Steps props={{data: data, height: 12, width: 10, type: 0, rotation: 0, expansion: 2}}/>
                </motion.div>
            </div>
            
        </div>
    </section>
      
    </>
  )
}