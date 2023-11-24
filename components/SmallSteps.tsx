import React, { use, useEffect, useRef, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion';
import Image from 'next/image';
import { type } from 'os';
type Journey =  {
    date: string,
    title: string,
    org: string,
    bg: string,
    bullets?: string[],
    skills?: string,
}
function Step({props}:{
    props:{
        data: Journey,
        h: number,
        w: number,
        index: number,
        rotation: number,
        expansion: number
        type: 1 | 0,
    }
}){
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const ref1 = useRef(null);
    const variants = {
        open:{
            zIndex: 20, 
            maxWidth: `${props.w+props.expansion}rem`, 
            maxHeight: `${props.h}rem`, 
            rotate: 0, 
            scale:3,
        },
        hover:{
            zIndex: 20, 
            maxWidth: `${props.w+props.expansion}rem`, 
            maxHeight: `${props.h}rem`, 
            rotate: 0, 
            scale:1.1,
            transition:{
                duration: 0.1,
            }
        },
        exit:{
            zIndex: 20, 
            maxWidth: `100Vw`, 
            maxHeight: `100Vh`,
            height: `200Vh`,
            width: `70Vw`,
            opacity: 0.3,
            // rotate: `360deg`, 
            rotate:"0deg",
            flexShrink: 0.01,
            y:0,
            scale: 1.3,
            transition: {
                duration: 0.3,
            }
        }
    }
    return (
        <>
            <AnimatePresence>
            {!isOpen ? (<motion.a
                key={0}
                style={{
                    maxWidth: `${props.w}rem`,
                    maxHeight: `${props.h}rem`,
                    height: `${props.h}rem`,
                    width: `${props.w}rem`,
                    marginBottom: `1rem`,
                    position: 'relative',
                    rotate: `${props.rotation}deg`,
                    flexGrow: 1,
                    flexShrink: 1,
                    zIndex: 10,
                }}
                variants={variants}
                href="#journey"
                onClick={() => {setIsOpen(!isOpen);}}
                whileHover={"hover"}
                transition={{duration: 0.1}}
                className={`shadow-2xl border-8 border-slate-300 m-1 z-2`}
            >   
                <Image
                    src={props.data.bg}
                    alt="background"
                    sizes={`${props.w+props.expansion}rem, ${props.w}rem`}
                    fill={true}
                    style={{objectFit: 'cover'}}
                />
                
                <div className="flex flex-col justify-between items-center h-full w-full z-3">
                    <div className="h-fit w-full flex-col justify-center items-between z-4 bg-slate-700 bg-opacity-60 backdrop-blur-md p-2">
                        <h1 className="text-md font-bold text-secondary-white text-center">{props.data.org}</h1>
                        <h1 className="text-lg font-thin text-secondary-white text-center">{props.data.title}</h1>
                    </div>
                    <h1 className="relative text-md font-mono text-secondary-white text-center">{props.data.date}</h1>
                </div>  

            </motion.a>)
            :(
            <motion.div
                key={1}
                style={{
                    position: "fixed",
                    inset:0,
                    width: "100vw",
                    height: "100vh",
                    maxWidth: "100vw",
                    maxHeight: "100vh",
                    zIndex: 100,}
                }
                initial={{scale:0.5, opacity: 0.1}}
                animate={{scale: 1, opacity:1}}
                onClick={() => {setIsOpen(!isOpen);}}
                transition={{duration: 0.2, delay:0.1}}
                exit={{scale: 0.2, opacity: 0}}
                className={`border-[20px] border-slate-300 m-1 z-2`}
                >   
                <Image
                    src={props.data.bg}
                    alt="background"
                    sizes={`${props.w+props.expansion}rem, ${props.w}rem`}
                    fill={true}
                    style={{objectFit: 'cover'}}
                />
                <div className="h-full w-full bg-slate-700 bg-opacity-0 backdrop-blur-md">
                    <motion.div
                        className="h-full w-full"
                        initial={{opacity:0, y:-20}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:0.4, delay:0.4}}
                    >
                        <JourneyContent data={props.data}/>
                    </motion.div>
                </div>
            </motion.div>)
            }
            </AnimatePresence>
        </>
    )
}

const textVariant1={
    initial:{
        y: "-10rem",
        opacity: 0,
    },
    animate:{
        opacity: 1,
        y: 0,
        transition:{
            duration: 1.0,
            spring:{
                stiffness: 100,
                damping: 30,
                restDelta: 0.001
            }
        }
    }
}
function JourneyContent({data}:{data:Journey}){
    return (
        <div className="flex flex-col justify-between items-center h-full w-full p-2 overflow-scroll">
            <div className='mx-auto w-fit p-10 mt-10'>
                <motion.h1 variants={textVariant1} initial={"initial"} animate={"animate"} className="text-xl font-mono text-secondary-white text-center">{data.org}</motion.h1>
                <h1 className="text-lg font-thin text-secondary-white text-center mt-8">{data.title}</h1>
            </div>
            <div className="flex-grow flex flex-col w-full max-w-[70rem] rounded-lg justify-center items-start bg-slate-700 bg-opacity-0 backdrop-blur-xl drop-shadow-2xl px-16">
            {
                data.bullets && data.bullets.map((item:string, index:number) =>(
                    <p key={index} className="font-mono text-sm text-secondary-white my-2">{`> ${item}`}</p>
                ))
            }
            {data.skills && <p className='font-mono text-md text-secondary-white'>{`Skills: ${data.skills}`}</p>}
            </div>
            <div className="flex flex-row w-full justify-end">
                <h1 className="text-lg text-md font-mono text-secondary-white text-right mt-8">{data.date}</h1>
            </div>
        </div>
    )
}

export default function Steps({props}:{
    props:{
        data: Journey[],
        type: 1 | 0,
        height: number,
        width: number,
        rotation?: number,
        expansion?: number,
    }
}) {
    const width = props.width;
    const rotation = props.rotation || 0;
    const expansion = props.expansion || 7;
    return (
        <>
        {
            props.data.map((item, index) => {
                    const pp = {
                        data: item,
                        w: width,
                        h: props.height,
                        index: index,
                        rotation: rotation,
                        expansion: expansion,
                        type:props.type,
                    };
                    return <Step key={index} props={pp}/>
                })
        }
        </>

      ) 
}
