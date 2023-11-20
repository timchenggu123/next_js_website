import Image from 'next/image'
export default function ProjectSlides({slides}:{
    slides: {
        img: string,
        title: string,
        description: string,
    }[]
}) {
  return (
    <div className='h-fit w-full flex flex-col items-center p-10 pl-20'>
        {
            slides.map((item, index) => {
                return (
                    <div key={index} className={`w-full h-fit flex flex-col items-center`}>
                        <div className='flex flex-row items-between h-fit w-full'>
                            {
                                index %2 == 0 ? <p className='flex-grow-[50%] text-lg font-mono text-secondary-white p-10'><span className="font-semibold">{`> ${item.title}: `}</span>{`${item.description}`}</p> :<></>
                            }
                            <div className="w-[50%] min-w-[50%] h-fit rounded-2xl my-10 bg-secondary-white p-2">
                                <Image
                                    src={item.img}
                                    alt="img"
                                    height={1200}
                                    width={1200}
                                    style={{objectFit: 'contain'}}
                                />
                            </div>
                            {
                                index %2 == 1 ? <p className='flex-grow-[50%] text-lg font-mono text-secondary-white p-10'><span className="font-semibold">{`> ${item.title}: `}</span>{`${item.description}`}</p> :<></>
                            }
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
