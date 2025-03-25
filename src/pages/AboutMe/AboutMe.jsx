import React, { useEffect, useState } from 'react';
import profile from '../../assets/images/profile.jpg';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

function AboutMe() {
  const [text, setText] = useState('');
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  const fullText = [
    "",
    "[INITIALIZING CORE MODULES…]",
    "",
    "🟢 Frontend Manipulation – React.js, Angular, Vue.js, Tailwind CSS ",
    "🟢 Backend Architectonics – Node.js, Python, PHP, MERN & MEAN stacks ",
    "🟢 Cloud Synchronization – AWS, Firebase, Docker, Kubernetes, CI/CD",
    "🟢 AI & IoT Nexus – Neural Networks, Automation, Real-time Processing",
    "",
    "[PROJECTS LOADED…]",
    "",
    "Currently engineering a scalable Learning Management System (LMS) designed for seamless education in a hyper-connected world. Optimizing workflows, deploying real-time solutions, and enhancing experiences with intelligent automation.",
    "",
    "[IEEE CORE LINK ESTABLISHED]",
    "",
    "Collaborating with brilliant minds, pushing boundaries in technology, and evolving through innovation.",
    "",
    "[FINAL PROTOCOL INITIATED…]",
    "",
    "Are you ready to disrupt the future?",
    "🚀 Happy Hacking. "
  ];

  useEffect(() => {
    let letterIndex = 0;
    let lineIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (lineIndex < fullText.length) {
        if (letterIndex < fullText[lineIndex]?.length) {
          setText((prevText) => prevText + fullText[lineIndex][letterIndex-1]);
          letterIndex++;
        } else {
          lineIndex++;
          if (lineIndex < fullText.length) {
            setText((prevText) => prevText + '\n'); 
          }
          letterIndex = 0;
        }
      } else {
        clearInterval(typingInterval);
      }
    }, 65);
  
    const cursorBlinkInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, 500);
  
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorBlinkInterval);
    };
  }, []);
  

  return (
    <div className="relative w-full min-h-screen text-white font-chakra p-8 flex flex-col items-center bg-black">
      <motion.div 
        className="absolute top-20 left-8 md:left-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center space-x-3">
          <div className="p-2 flex justify-center items-center w-10 h-10 border border-myYellow animate-pulse">
            <div className="w-8 h-5 bg-myYellow"></div>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-myYellow tracking-widest neon-text">
            ABOUT ME ZONE
          </h2>
        </div>
      </motion.div>

      <div className="relative w-full h-full max-w-7xl mt-32 flex flex-col lg:flex-row items-center lg:items-start">
        <div className='flex flex-col justify-center items-center md:items-start w-11/12 lg:w-5/12 mb-6'>
          <motion.div 
            className='flex justify-center items-center w-full'
            {...fadeInUp}
          >
            <div className='w-12 h-12 flex justify-center items-center border border-myYellow animate-pulse'>
              <div className='w-6 h-6 bg-myYellow animate-pulse'></div>
            </div>
            <p className='text-lg md:text-2xl py-1 w-full text-center md:text-left ml-3'>Captain of the Ship</p>
          </motion.div>

          <div className='flex flex-col justify-center items-center md:items-center ml-0 md:ml-10 border-l-0 md:border-l-2 border-t-2 border-myYellow'>
            <motion.div 
              className='w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full mx-8 my-6'
              whileHover={{ scale: 1.1 }}
            >
              <img className='transform transition duration-300 ease-in-out hover:scale-125' src={profile} alt='Profile' />
            </motion.div>

            <motion.div 
              className='flex flex-col justify-center items-center text-center md:text-left mx-8 my-4'
              {...fadeInUp}
            >
              <p className='text-sm'>CYBERSTATION: SYSTEM ONLINE</p>
              <p className='text-myYellow'>[BOOTING UP…]</p>
            </motion.div>
            <motion.div 
              className='flex flex-col justify-center items-center text-center md:text-left mx-8 my-4'
              {...fadeInUp}
              transition={{ duration: 1 , delay: 2 }}
            >
              <p className='text-xl text-center mt-2'>
                Welcome, traveler. You’ve just stepped into <span className='text-myYellow'>Cyberstation, Nova 9.01</span>, where code, innovation, and futuristic engineering collide. I am <span className='text-myYellow'>Thathsara Bandara</span>, a digital architect sculpting the future, one algorithm at a time.
              </p>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 1 , delay: 3 }}
            >
              <p className='text-sm'>MORE ABOUT CAPTIAN</p>
            </motion.div>
            <motion.div className="mt-4 w-10/12 h-1 bg-myYellow"
              initial={{ width: "0%" }}
              animate={{ width: "75%" }}
              transition={{ duration: 1.2, ease: "easeInOut" ,delay: 4}}
            />
            <div className='flex flex-col justify-center items-start text-lg sm:text-xl mt-4'>
              <motion.div 
                className='flex justify-center items-center mt-2'
                {...fadeInUp}
                transition={{ duration: 1 , delay: 5 }}
              > 
                <FaLocationDot className='text-myYellow' />
                <p className='ml-3'>Galle, Sri Lanka</p>
              </motion.div>
              <motion.div 
                className='flex justify-start items-center mt-2'
                {...fadeInUp}
                transition={{ duration: 1 , delay: 6 }}
              > 
                <FaUserGraduate className='text-myYellow' />
                <div className='flex flex-col justify-center items-start ml-3'>
                  <p className=''>Faculty of Computing</p>
                  <p className=''>University Of Sri Jayewardenepura</p>
                </div>
              </motion.div>
              <motion.div 
                className='flex justify-center items-center mt-2'
                {...fadeInUp}
                transition={{ duration: 1 , delay: 7 }}
              > 
                <MdEmail className='text-myYellow' />
                <p className='ml-3'>shadowsara21@gmail.com</p>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div 
          className="flex flex-col p-6  text-white border-t-2 border-l-2 border-myYellow relative overflow-hidden w-11/12 lg:w-7/12 lg:mt-12 sm:ml-12 animate-pulse"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 , delay: 8 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-myYellow opacity-10 blur-3xl"></div>
          <motion.div className="relative w-full  text-white font-mono p-8">
            <motion.div 
              className="text-sm sm:text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="text-myYellow">[ SYSTEM ONLINE ]</span>
            </motion.div>

            <motion.div 
              className="text-sm sm:text-xl mt-4 text-white text-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.pre
                className="whitespace-pre-wrap overflow-hidden mb-24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
              >
                {text}
                {isCursorVisible && <span className="cursor">|</span>}
              </motion.pre>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
