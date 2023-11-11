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
        orientation: string,
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
                whileHover={{zIndex: 20, maxWidth: `${props.w+8}rem`, rotate: 0, scale:1.1}}
                transition={{duration: 0.1}}
                className={`flex-grow felx-shrink-1 relative z-10 shadow-2xl border-8 border-slate-300 m-1 z-2`}
            >   
                <Image
                    src={props.data.bg}
                    alt="background"
                    fill={true}
                    style={{objectFit: 'cover'}}
                />
                <div className="flex flex-col justify-start items-center h-full w-full z-3">
                    <div className="h-fit w-full flex-col justify-center items-between z-4 bg-slate-700 bg-opacity-60 backdrop-blur-md p-2">
                        <h1 className="text-lg font-thin text-secondary-white text-center">{props.data.title}</h1>
                        <h1 className="text-md font-bold text-secondary-white text-center">{props.data.org}</h1>
                        <h1 className="text-sm font-mono text-secondary-white text-center">{props.data.date}</h1>
                    </div>
                </div>
            </motion.div>) 
            : (
            <motion.div style={{
                    maxWidth: `${props.w}rem`,
                    rotate: 6,
                    height: `${props.h}rem`,
                    marginBottom: `1rem`,
                }} 
                whileHover={{zIndex: 20, maxWidth: `${props.w+8}rem`, rotate: 0, scale:1.1}}
                transition={{duration: 0.1}}
                className={`flex-grow flex-shrink-1 relative z-10 shadow-2xl border-8 border-slate-300 m-1 z-1`}
            > 
                <Image
                    src={props.data.bg}
                    alt="background"
                    fill={true}
                    style={{objectFit: 'cover'}}
                />
                <div className="flex flex-col justify-end items-center h-full w-full">
                    <div className="h-fit w-full flex-col justify-center items-between z-2 bg-slate-700 bg-opacity-60 backdrop-blur-md p-2">
                        <h1 className="text-sm font-mono text-secondary-white text-center">{props.data.date}</h1>
                        <h1 className="text-md font-bold text-secondary-white text-center">{props.data.org}</h1>
                        <h1 className="text-lg font-thin text-secondary-white text-center">{props.data.title}</h1>
                    </div>
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
        width: number
    }
}) {
    const width = props.width;

    return (
        <>
        {
            props.data.map((item, index) => {
                    const pp = {
                        data: item,
                        w: width,
                        h: props.height,
                        index: index,
                        orientation: (index+props.type)%2 == 0 ? "up":"down"
                    };
                    return <Step key={index} props={pp}/>
                })
        }
        </>

      ) 
}
