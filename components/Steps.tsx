import React, {useRef, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion';
import Image from 'next/image';
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
        orientation: string,
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
        }
    }
    return (
        <>
        {  
            props.orientation == "up" ? (
            <motion.a
                key={0}
                style={{
                    maxWidth: `${props.w}rem`,
                    maxHeight: `${props.h}rem`,
                    height: `${props.h}rem`,
                    width: `${props.w}rem`,
                    marginBottom: `1rem`,
                    position: 'relative',
                    flexGrow: 1,
                    flexShrink: 1,
                    zIndex: 10,
                }}
                variants={variants}
                href="#journey"
                onClick={() => {setIsOpen(!isOpen);}}
                whileHover={"hover"}
                transition={{duration: 0.1}}
                exit={"exit"}
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
                    <h1 className="relative text-md font-mono text-secondary-white text-center">{props.data.date}</h1>
                    <div className="h-fit w-full flex-col justify-center items-between z-4 bg-slate-700 bg-opacity-60 backdrop-blur-md p-2">
                        <h1 className="text-lg font-thin text-secondary-white text-center">{props.data.title}</h1>
                        <h1 className="text-md font-bold text-secondary-white text-center">{props.data.org}</h1>
                    </div>
                </div>  

            </motion.a>
            ) : (
            <motion.a
                key={0}
                style={{
                    maxWidth: `${props.w}rem`,
                    maxHeight: `${props.h}rem`,
                    height: `${props.h}rem`,
                    width: `${props.w}rem`,
                    marginBottom: `1rem`,
                    position: 'relative',
                    flexGrow: 1,
                    flexShrink: 1,
                    zIndex: 10,
                }}
                variants={variants}
                whileHover={"hover"}
                transition={{duration: 0.1}}
                exit={"exit"}
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
            </motion.a>
            ) 
        }
        </>
    )
}

// const textVariant1={
//     initial:{
//         y: "-10rem",
//         opacity: 0,
//     },
//     animate:{
//         opacity: 1,
//         y: 0,
//         transition:{
//             duration: 1.0,
//             spring:{
//                 stiffness: 100,
//                 damping: 30,
//                 restDelta: 0.001
//             }
//         }
//     }
// }
// function JourneyContent({data}:{data:Journey}){
//     return (
//         <div className="flex flex-col justify-between items-center h-full w-full p-2 overflow-scroll">
//             <div className="flex flex-row w-full justify-start pl-3">
//                 <h1 className="text-4xl text-md font-mono text-secondary-white text-right">{data.date}</h1>
//             </div>
//             <div className='mx-auto w-fit p-10 mt-10'>
//                 <motion.h1 variants={textVariant1} initial={"initial"} animate={"animate"} className="text-7xl font-mono text-secondary-white text-center">{data.org}</motion.h1>
//                 <h1 className="text-3xl font-thin text-secondary-white text-center mt-8">{data.title}</h1>
//             </div>
//             <div className="flex-grow flex flex-col w-full max-w-[70rem] rounded-lg justify-center items-start bg-slate-700 bg-opacity-0 backdrop-blur-xl drop-shadow-2xl p-16">
//             {
//                 data.bullets && data.bullets.map((item:string, index:number) =>(
//                     <p key={index} className="font-mono text-xl text-secondary-white my-5">{`> ${item}`}</p>
//                 ))
//             }
//             {data.skills && <p className='font-mono text-2xl text-secondary-white'><span className="font-bold">Skills: </span>{`${data.skills}`}</p>}
//             </div>
//         </div>
//     )
// }

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
                        orientation: (index+props.type)%2 == 0 ? "up":"down",
                        expansion: expansion,
                        type:props.type,
                    };
                    return <Step key={index} props={pp}/>
                })
        }
        </>

      ) 
}
