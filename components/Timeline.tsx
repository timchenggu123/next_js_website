import React, { useState } from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
type Journey =  {
    date: string,
    title: string,
    org: string,
    bg: string,
    bullets?: string[],
    skills?: string,
}
export default function Timeline({journey}:{journey: Journey[]}) {
  const numberOfDots = 3;
  const dots = Array.from({ length: numberOfDots }, (_, index) => index);
  return (
    <ul className="w-full h-fit timeline timeline-vertical">
        {journey.map((data, index) => {
        return index%2 == 0 ?
        (<li key={index}>
            <hr/>
            <motion.div 
                whileHover={{height: "40rem"}}
                transition={{duration: 0.3}}
                className="group timeline-start relative h-[10rem] w-full max-w-[30rem] min-w-[20rem]">
                <Image
                    src={data.bg}
                    alt="background"
                    className='rounded-xl relative'
                    sizes={`40rem`}
                    priority
                    fill={true}
                    style={{objectFit: 'cover'}}
                />
                <div className='h-full w-full flex flex-col justify-end items-end p-3 relative z-1'>
                    <div className="flex transition-all scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 h-full flex-col justify-start items-center">
                        <div className="text-secondary-white text-3xl font-mono font-bold w-full text-justify-left px-10 py-5">
                            {`${data.title}`}
                        </div>
                        {data.skills && <div className="text-secondary-white text-sm font-mono font-semibold w-full text-justify-left px-10">
                            {`Skills:${data.skills}`}
                        </div>}
                        <ul className="p-8">
                            {data.bullets && data.bullets.map((item, index) => {
                                return (
                                    <li key={index} className="text-secondary-white text-sm font-mono p-2">{`> ${item}`}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className=" text-secondary-white text-2xl font-mono font-bold"> {`${data.org}`}</div>
                </div>
            </motion.div>
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end timeline-box">{`${data.date}`}</div>
            <hr/>
        </li>):(
        <li key={index}>
            <hr/>
           <div className="timeline-start timeline-box">{`${data.date}`}</div>
           <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
           </div>
           <motion.div whileHover={{height: "40rem"}} 
           className="group timeline-end relative h-[10rem] w-full max-w-[30rem] min-w-[20rem]">
                <Image
                    src={data.bg}
                    alt="background"
                    className='rounded-xl relative'
                    sizes={`40rem`}
                    priority
                    fill={true}
                    style={{objectFit: 'cover'}}
                />
                <div className='h-full w-full flex flex-col justify-end items-end p-3 relative z-1'>
                    <div className="flex transition-all scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 h-full flex-col justify-start items-center">
                        <div className="text-secondary-white text-3xl font-mono font-bold w-full text-justify-left px-10 py-5">
                            {`${data.title}`}
                        </div>
                        <div className="text-secondary-white text-sm font-mono font-semibold w-full text-justify-left px-10">
                            {data.skills && `Skills:${data.skills}`}
                        </div>
                        <ul className="p-8">
                            {data.bullets && data.bullets.map((item, index) => {
                                return (
                                    <li key={index} className="text-secondary-white text-sm font-mono p-2">{`> ${item}`}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className=" text-secondary-white text-2xl font-mono font-bold"> {`${data.org}`}</div>
                </div>
            </motion.div>
           <hr/>
       </li>)
        })}
    </ul>
  );
};

