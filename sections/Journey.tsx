import { motion } from 'framer-motion';
import {SmallSteps, Timeline} from '@/components';
import {journey} from '@/content';
import CursorBlinker from '@/components/Cursor';

const data = journey.reverse();
export default function Journey() {
    return (
    <>
    <section className="min-h-screen relative h-fit">
        <div className="w-screen h-auto rounded-[7rem]"> 
            <motion.h1
                initial={{opacity: 0, scaleX: 0}}
                whileInView={{opacity: 1, scaleX: 1}}
                className = "w-full pt-[3rem] text-xl md:text-3xl lg:text-7xl text-center font-mono drop-shadow-[0_0_3rem_#ffffff70] text-secondary-white mb-10"
            >
                {`<Journey>`}
                <CursorBlinker/>
            </motion.h1>

            {/* For medium and large displays */}
            <motion.div 
                style={{opacity: 0}}
                whileInView={{ opacity: 1}}
                viewport={{amount: 0.1}}
                transition={{duration: 0.3}}
                className="md:flex hidden relative max-w-[80rem] pt-[2rem] mx-auto flex-col items-center">
                <Timeline journey={journey}/>
            </motion.div>

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
                    <SmallSteps props={{data: data, height: 12, width: 10, type: 0, rotation: 0, expansion: 2}}/>
                </motion.div>
            </div>
            
        </div>
    </section>
      
    </>
  )
}