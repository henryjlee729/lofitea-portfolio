import { motion } from 'framer-motion'
import Image from "next/image";
import Link from 'next/link'
import Head from 'next/head'

const Home = () => {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            variants={{
                hidden: {
                    scale: 0.8,
                    opacity: 0,
                },
                visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.6,
                    },
                },
            }}
        >
            <Head>
                <link rel='icon' href='./images/beanie.jpg' />
            </Head>
            <div className='flex px-4 md:py-32 mx-auto h-screen items-center'>
                <div className='text-center mx-auto'>
                    <h1 className='text-4xl text-black font-extrabold md:text-6xl'>
                        Henry Lee
                    </h1>
                    <h1 className='text-4xl text-blue-500 font-extrabold md:text-6xl'>
                        Software Developer
                    </h1>
                    <p className='text-sm mt-4 sm:leading-relaxed md:text-xl text-black'>
                        Programmer, Storyteller, Part-Time Artist
                    </p>
                    <div className="aspect-w-2 aspect-h-1">
                        <Image
                        src="/images/lofitea-friends/poyo.gif"
                        layout="fill"
                        objectFit="contain"
                        alt=""
                        />
                      </div>
                    <div className='flex flex-wrap justify-center gap-4 mt-8 grid-cols-2'>
                        <Link href='/contact'>
                            <a
                                className='px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring'
                            >
                                Contact Me
                            </a>
                        </Link>
                        <Link href='/resume.pdf'>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                className='px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring'
                            >
                                Resume
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Home
