'use client';
import { motion, stagger } from 'framer-motion';
import {Steps} from '@/components';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles';
import { slideIn, staggerContainer, textContainer, textVariant, textVariant2 } from '../utils/motion';

const data = [
    {
        date: "2017.1-2017.4", 
        title: "Frontend Intern", 
        org: "QingPath Technologies",
        bg: "/qingpath.jpg"
    },
    {
        date: "2017.9-2017.12", 
        title: "Engineering Intern", 
        org: "South Fontenac",
        bg: "/sf.jpg",
    },
    {
        date: "2018.5-2018.8",
        title: "Data Analyst Intern",
        org: "Environment Canada",
        bg: "/environcan.jpg"
    },
    {
        date: "2020.1-2020.4",
        title: "Data Engineering Intern",
        org: "Wayfair",
        bg: "/wayfair.jpg"
    },
    {
        date: "2020.9-2020.12",
        title: "Software Engineering Intern",
        org: "AWS",
        bg: "/aws.jpg"
    },
    {
        date: "2021.9-2021.12",
        title: "ML Research Intern",
        org: "Huawei 2012 Labs",
        bg: "/huawei.jpg"
    },
    {
        date: "2022.1-2022.8",
        title: "ML Research Part-time",
        org: "Huawei 2012 Labs",
        bg: "/huawei.jpg"
    },
    {   
        date: "2016.9-2022.6", 
        title: "B.ASC. Comp.Eng.", 
        org: "University of Waterloo", 
        bg: "/qnc.jpg"
    },
    {
        date: "2022.9-2024.8",
        title: "M.ASC Comp.Eng.",
        org: "University of Toronto",
        bg: "/uoft.jpg"
    },
    {
        date: "2024.8 - Future",
        title: "Engineer",
        org: "Your Company",
        bg: "/tbd.jpg"
    }

].reverse();


export default function Journey() {
    const [translateX, setTranslateX] = useState('0rem');
    return (
    <>
    <section id="journey" className="h-screen relative snap-start p-3">
        <motion.div
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: false, amount: 0.75 }}
            transition={{duration: 0.5, delay: 0.5 }}
            className="relative top-[20%] left-[15%] h-[70%] w-[70%] object-cover rounded-[7rem]"
        >
            <Image
                src="/bg1.jpg"
                alt="background"
                fill={true}
                style={{objectFit: 'cover'}}
                className="rounded-[7rem]"
            />
        </motion.div>
        <div className="absolute inset-0 rounded-[7rem] backdrop-blur-lg backdrop-brightness-50 bg-slate-700 bg-opacity-10"> 
            <h1
                className = "absolute w-full top-[5rem] text-9xl text-center font-mon drop-shadow-[0_0_3rem_#ffffff70] text-secondary-white"
            >
                Journey
            </h1>

            {/* For medium and large displays */}
            <div className="md:flex hidden relative max-w-[80rem] mx-auto top-[15rem] flex-col items-center overflow-x-scroll">
                <motion.div
                    initial={{opacity:0, scaleX: 0}}
                    whileInView={{ opacity:1, scaleX:1}}
                    viewport={{once: true, amount: 0.75}}
                    transition={{
                        duration: 0.5, 
                        delay: 0.3,
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                    }}
                    className="relative hover:z-10 z-1 flex justify-start w-full mb-2 p-2">
                    <Steps props={{data: data.slice(0,5), height: 19, width: 13, type: 0}}/>
                </motion.div>
                <motion.div 
                    initial={{opacity:0, scaleX:0}}
                    whileInView={{opacity:1, scaleX:1}}
                    viewport={{once: true, amount: 0.75}}
                    transition={{
                        duration: 0.5, 
                        delay: 0.3,
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                    }}
                    className="relative hover:z-10 z-1 flex w-full justify-end p-2">
                    <Steps props ={{data: data.slice(5,), height: 19, width: 13, type: 1}}/>
                </motion.div>
            </div>

            {/* For Small Displays */}
            <div className="md:hidden flex absolute w-screen mx-auto top-[15rem] flex-col items-center h-[40rem] p-2">
                <motion.div
                    initial={{scaleX: 0}}
                    whileInView={{ scaleX:1}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{
                        duration: 0.5, 
                        delay: 0.3,
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                    }}
                    className="relative hover:z-10 z-1 flex justify-center flex-wrap mx-auto p-2 overflow-scroll">
                    <Steps props={{data: data, height: 12, width: 10, type: 0}}/>
                </motion.div>
            </div>
            
        </div>
    </section>
      
    </>
  )
}