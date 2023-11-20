import { useScroll } from 'framer-motion'
import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

export default function ProjectSlides({index, slides, setKey, containerRef}:{
    index: number,
    slides: {
        img: string,
        title: string,
        description: string,
    }[],
    setKey: Dispatch<SetStateAction<number>>,
    containerRef?: React.MutableRefObject<null>,
}) {
  const ref = useRef(null);
  const {scrollYProgress: contentScroll} = useScroll({layoutEffect:false, container: containerRef, target: ref, offset: ["0 0", "1 0"]})
  
  useEffect(() => {

    const unsubscribe = contentScroll.on("change", (latest) => {
        if (latest > 0 && latest < 1) {
            setKey(index);
        }

    })
    return () => {
      unsubscribe();
    }
  })
  return (
    <div ref={ref} className='h-fit w-full flex flex-col items-center md:p-10 md:pl-20'>
        {
            slides.map((item, index) => {
                return (
                    <div key={index} className={`w-full h-fit flex flex-col items-center`}>
                        <div className='flex md:flex-row flex-col items-between h-fit w-full'>
                            <p className='sm:hidden flex-grow-[50%] text-lg font-mono text-secondary-white p-10'><span className="font-semibold">{`> ${item.title}: `}</span>{`${item.description}`}</p>
                            {
                                index %2 == 0 ? <p className='md:block hidden flex-grow-[50%] text-lg font-mono text-secondary-white md:p-10'><span className="font-semibold">{`> ${item.title}: `}</span>{`${item.description}`}</p> :<></>
                            }
                            <div className="md:w-[50%] md:min-w-[50%] h-fit rounded-2xl my-10 bg-secondary-white p-2">
                                <Image
                                    src={item.img}
                                    alt="img"
                                    height={500}
                                    width={500}
                                    priority={true}
                                    style={{objectFit: 'contain'}}
                                />
                            </div>
                            {
                                index %2 == 1 ? <p className='md:block hidden flex-grow-[50%] text-lg font-mono text-secondary-white p-10'><span className="font-semibold">{`> ${item.title}: `}</span>{`${item.description}`}</p> :<></>
                            }
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
