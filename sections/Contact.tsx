import CursorBlinker from '@/components/Cursor'
import { AiTwotoneMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const handleCopy = async () => {
        await navigator.clipboard.writeText("2013tim.g@gmail.com");
        toast("Email Copied to clipboard!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    };
  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    <section className="h-screen flex flex-col justify-start items-center">
        <div className="h-[10rem] block bg-transparent"/>
        <motion.h1 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            className="text-xl md:text-3xl lg:text-7xl text-secondary-white font-mono mb-10 mt-[5rem]">{`<Contact>`}<CursorBlinker/></motion.h1>
        <div className="flex justify-around items-center max-w-6xl w-full mt-11">
            <motion.a 
                initial={{opacity:0}}
                whileHover={{scale:1.1}}
                whileInView={{opacity:1}}
                href="https://github.com/timchenggu123"
                target="_blank"
                className="invert md:h-[10rem] md:w-[8rem] h-[4rem] w-[4rem] hover:drop-shadow-[0_0_0.3rem_#ffffff]">
                    <AiFillGithub color="black" size="auto"/>
            </motion.a>
            <motion.a 
                initial={{opacity:0}}
                whileHover={{scale:1.1}}
                whileInView={{opacity:1}}
                href="https://www.linkedin.com/in/tim-chenggu/"
                target="_blank"
                className="invert md:h-[10rem] md:w-[8rem] h-[4rem] w-[4rem] hover:drop-shadow-[0_0_0.3rem_#ffffff]">
                    <AiFillLinkedin color="black" size="auto"/>
            </motion.a>
            <motion.a   
                initial={{opacity:0}}
                whileHover={{scale:1.1}}
                whileInView={{opacity:1}}
                onClick={() => {handleCopy()}}
                className="invert md:h-[10rem] md:w-[8rem] h-[4rem] w-[4rem] hover:drop-shadow-[0_0_0.3rem_#ffffff]">
                    <AiTwotoneMail color="black" alt="Click To Copy" size="auto" />
            </motion.a>
                
            <motion.a   
                initial={{opacity:0}}
                whileHover={{scale:1.1}}
                whileInView={{opacity:1}}
                href="/cv.pdf"
                download={true}
                className="invert md:h-[10rem] md:w-[8rem] h-[4rem] w-[4rem] hover:drop-shadow-[0_0_0.3rem_#ffffff]">
                    <Image src="/cv.svg" color="black" alt="Click To Download" width={400} height={400}/>
                </motion.a>
            
        </div>
    </section>
    </>
  )
}
