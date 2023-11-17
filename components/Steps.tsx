import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion';
import Image from 'next/image';
function Step({props}:{
    props:{
        data: {
            date: string,
            title: string,
            org: string,
            bg: string
        },
        h: number,
        w: number,
        index: number,
        rotation: number,
        orientation: string,
        expansion: number
    }
}){
    return (
        <>
        {  
            props.orientation == "up" ? (
            <motion.div style={{
                    maxWidth: `${props.w}rem`,
                    height: `${props.h}rem`,
                    marginBottom: `1rem`,
                }} 
                whileHover={{zIndex: 20, maxWidth: `${props.w+props.expansion}rem`, rotate: 0, scale:1.1}}
                transition={{duration: 0.1}}
                className={`flex-grow felx-shrink-1 relative z-10 shadow-2xl border-8 border-slate-300 m-1 z-2`}
            >   
                <Image
                    src={props.data.bg}
                    alt="background"
                    sizes={`${props.w+props.expansion}rem, ${props.w}rem`}
                    fill={true}
                    style={{objectFit: 'cover'}}
                />
                <div className="flex flex-col justify-between items-center h-full w-full z-3">
                    <h1 className="relative text-md font-mono text-secondary-white text-center">{props.data.date}</h1>
                    <div className="h-fit w-full flex-col justify-center items-between z-4 bg-slate-700 bg-opacity-60 backdrop-blur-md p-2">
                        <h1 className="text-lg font-thin text-secondary-white text-center">{props.data.title}</h1>
                        <h1 className="text-md font-bold text-secondary-white text-center">{props.data.org}</h1>
                    </div>
                </div>
            </motion.div>) 
            : (
            <motion.div style={{
                    maxWidth: `${props.w}rem`,
                    rotate: props.rotation,
                    height: `${props.h}rem`,
                    marginBottom: `1rem`,
                }} 
                whileHover={{zIndex: 20, maxWidth: `${props.w+props.expansion}rem`, rotate: 0, scale:1.1}}
                transition={{duration: 0.1}}
                className={`flex-grow flex-shrink-1 relative z-10 shadow-2xl border-8 border-slate-300 m-1 z-1`}
            > 
                <Image
                    src={props.data.bg}
                    alt="background"
                    sizes={`${props.w+props.expansion}rem, ${props.w}rem`}
                    fill={true}
                    priority={true}
                    style={{objectFit: 'cover'}}
                />
                <div className="flex flex-col justify-between items-center h-full w-full">
                    <div className="relative h-fit w-full flex-col justify-center items-between z-2 bg-slate-700 bg-opacity-60 backdrop-blur-md p-2">
                        <h1 className="text-md font-bold text-secondary-white text-center">{props.data.org}</h1>
                        <h1 className="text-lg font-thin text-secondary-white text-center">{props.data.title}</h1>
                    </div>
                    <h1 className="relative text-md font-mono text-secondary-white text-center">{props.data.date}</h1>
                </div>
            </motion.div> 
            )
        }
        </>
    )
}

export default function Steps({props}:{
    props:{
        data: {
            date: string,
            title: string,
            org: string,
            bg: string
        }[],
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
                        orientation: (index+props.type)%2 == 0 ? "up":"down",
                        expansion: expansion,
                    };
                    return <Step key={index} props={pp}/>
                })
        }
        </>

      ) 
}
