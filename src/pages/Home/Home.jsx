import { Environment, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import WarShip from '../../component/3d_component/WarShip'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaStackOverflow } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { MdFacebook } from 'react-icons/md'
import { motion } from 'framer-motion';

const roles = ["Frontend Developer", "Backend Developer","AI Enthusiast" , "IOT Enthusiast" ];

function AnimatedText({ text, speed = 100 }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, index));
            index++;
            if (index > text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    return (
        <motion.div
            className="flex text-2xl sm:text-3xl md:text-4xl font-bold text-myYellow mt-5 font-chakra"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {displayedText}
        </motion.div>
    );
}



function Home() {
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 4000);
        return () => clearInterval(interval);
      }, []);

  return (
    <div className='relative w-full h-screen'>
        <div className='absolute w-full h-full mt-96 lg:mt-0 lg:ml-56'>
            <Canvas>
                <PerspectiveCamera makeDefault position={[-3, 3, 6]} fov={85} />
                <Suspense fallback={
                    <Html>
                        <p className="text-white text-xl animate-pulse w-full">Loading Model...</p>
                    </Html>
                    }>
                    <ambientLight intensity={0.6} color="#FFFF00" />
                    <directionalLight
                        intensity={1}
                        color="#FFFF00"
                        position={[-5, 5, 150]}
                        castShadow
                    />
                    <OrbitControls
                        enableZoom={true}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 4}
                    />
                    <WarShip />
                </Suspense>
                <Environment preset="sunset" />
            </Canvas>
        </div>
        <div className='absolute top-28 sm:top-32 lg:top-72  left-12 sm:left-32 lg:left-44  text-white z-10 font-chakra w-10/12 2xl:w-full'>
            <div className='flex flex-col justify-center items-start'>
                <p className='text-lg md:text-lg text-white'>Hello,</p>
                <div className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl space-x-4">
                    <p className='text-white'>I</p>
                    <p className='text-myYellow'>Am</p>
                    <div className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl">
                        <p className='text-white'>T</p>
                        <p className='text-myYellow'>hathsara</p>
                    </div>
                    <div className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl">
                        <p className='text-white'>B</p>
                        <p className='text-myYellow'>andara</p>
                    </div>
                </div>
                <div className="flex justify-center items-center text-xs sm:text-sm md:text-lg space-x-2">
                    <div className="flex justify-center items-center">
                        <p className='text-white'>P</p>
                        <p className='text-myYellow'>ioneering</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className='text-white'>T</p>
                        <p className='text-myYellow'>he</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className='text-white'>F</p>
                        <p className='text-myYellow'>uture</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className='text-white'>O</p>
                        <p className='text-myYellow'>f</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className='text-white'>C</p>
                        <p className='text-myYellow'>omputing</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className='text-white'>A</p>
                        <p className='text-myYellow'>s</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className='text-white'>A</p>
                        <p className='text-myYellow'>n</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className='text-white'>I</p>
                        <p className='text-myYellow'>novator</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className='text-white'>A</p>
                        <p className='text-myYellow'>t</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className='text-white'>T</p>
                        <p className='text-myYellow'>he</p>
                    </div>
                </div>
                <div className='flex justify-center items-center text-xs sm:text-sm md:text-lg space-x-3'>
                    <div className="flex justify-center items-center">
                        <p className='text-white'>U</p>
                        <p className='text-myYellow'>niversity</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className='text-white'>O</p>
                        <p className='text-myYellow'>f</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className='text-white'>S</p>
                        <p className='text-myYellow'>ri</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className='text-white'>J</p>
                        <p className='text-myYellow'>ayewardenepura</p>
                    </div>
                </div>
                <div className='h-12 sm:h-12 md:h-16'>
                    <motion.div
                        key={roles[currentRole]}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                    >
                        <AnimatedText text={roles[currentRole]} />
                    </motion.div>
                </div>
                <div className='flex justify-center items-center mt-8 space-x-6'>
                    <button className='bg-myYellow text-xs md:text-sm text-black font-bold px-3 md:px-5 py-2 md:py-3 rounded-lg hover:animate-bounce'>
                        HIRE ME
                    </button>
                    <button className='bg-myYellow text-xs md:text-sm text-black font-bold px-3 md:px-5 py-2 md:py-3 rounded-lg hover:animate-bounce'>
                        DOWNLOAD CV
                    </button>
                </div>
                <div className='flex justify-center items-center text-lg md:text-xl mt-10 text-myYellow space-x-5 sm:space-x-7 md:space-x-8'>
                    <a href=''>
                        <FaGithub />
                    </a>
                    <a href=''>
                        <FaStackOverflow />
                    </a>
                    <a href=''>
                        <FaLinkedin />
                    </a>
                    <a href=''>
                        <FaDiscord />
                    </a>
                    <a href=''>
                        <FaXTwitter />
                    </a>
                    <a href=''>
                        <IoMdMail />
                    </a>
                    <a href=''>
                        <MdFacebook />
                    </a>
                    <a href=''>
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home