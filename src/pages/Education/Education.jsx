import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hologram from "../../component/Hologram/Hologram";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" },
};


const timelineData = [
  { 
    year: "2007-2021", 
    title: "STORY BEGINS HERE ........",
    subhead: 'ROOT OF THE STORY',
    institute: 'ST. ALOYSIUS COLLEAGE - GALLE',
    para: 'Hey Cheif, Story Begins Here ......',
    para1: 'I am a passionate and dedicated individual with a strong foundation in science and technology.',
    para2: 'I completed my secondary education at St. Aloysius College, achieving outstanding results with 9 As in my O/L examination.',
    para3: 'In my A/L examination, I obtained A in Physics, B in Mathematics, and B in Chemistry, demonstrating my analytical skills and problem-solving abilities.',
    vision: 'Strive manFully',
    image: "https://th.bing.com/th/id/R.0aedd1a664e6a9d50b6421fb1d9a64ba?rik=m7iJlxwdtCOLEQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-5WUio_MI4nM%2fTf1vzkEID7I%2fAAAAAAAAABc%2fG8OXgokExMQ%2fs1600%2f160px-Al_crest001.png&ehk=2nizzmSorTfXontZ8yhtypLKqckcjBENtKV7flmVVUk%3d&risl=&pid=ImgRaw&r=0"
  },
  { 
    year: "2022-2027", 
    title: "TECH ENGINE STARTS HERE ........",
    subhead: 'ROOT OF THE METAVERSE',
    institute: 'University of sri- Jayewardenepura',
    para: 'Hey Cheif, Tech Path Begins Here ......',
    para1: 'I am a passionate and dedicated individual with a strong foundation in science and technology.',
    para2: 'Currently, I am pursuing a Bachelor of Computing (Hons) in Software Engineering at the Faculty of Computing, University of Sri Jayewardenepura.',
    para3: 'With a deep interest in programming, problem-solving, and emerging technologies, I aim to innovate and contribute to the ever-evolving world of technology..',
    vision: 'MOTHER JPURA',
    image: "https://edurank.org/assets/img/uni-logos/university-of-sri-jayewardenepura-logo.png"
  },
];

export default function Education() {
  const [selected, setSelected] = useState(0);
  const scrollRef = useRef(null);

  const handleSelect = (index) => {
    setSelected(index);
    scrollRef.current?.scrollTo({
      left: index * 150,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full min-h-screen text-white font-chakra p-8 flex flex-col items-center ">
      <div className="absolute top-20 left-16">
        <div className="flex items-center space-x-3">
          <div className="p-2 flex justify-center items-center w-10 h-10 border border-myYellow animate-pulse">
            <div className="w-8 h-5 bg-myYellow"></div>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-myYellow tracking-widest neon-text">
            EDUCATION ZONE
          </h2>
        </div>
      </div>

      <div className="relative w-11/12 max-w-7xl mt-24">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide items-center space-x-8 py-6 border-b border-myYellow transition-all justify-center"
        >
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col items-center cursor-pointer transition-all transform ${
                selected === index ? "scale-125" : "scale-100"
              }`}
              whileHover={{ scale: 1.1 }}
              onClick={() => handleSelect(index)}
            >
              <div className="w-10 h-10 bg-myYellow rounded-full shadow-lg border-4 border-black transition-all duration-300 hover:shadow-myYellow"></div>
              <p className={`mt-2 text-sm font-semibold transition-all duration-300 ${
                selected === index ? "text-myYellow" : "text-gray-400"
              }`}>
                {item.year}
              </p>
              <p className={`mt-2 text-xs font-semibold transition-all duration-300 ${
                selected === index ? "text-myYellow" : "text-gray-400"
              }`}>
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col xl:flex-row justify-center items-start mt-8 p-8 w-full max-w-[2000px] transition-all text-center"
          >
            <div className="flex justify-center items-center gap-0 w-full lg:w-10/12 xl:w-6/12">
              <motion.div 
                {...fadeInUp}
                transition={{ duration: 1 , delay: 3 }}
              >
                <p
                  className="transform -rotate-90 w-full -mr-20 lg:-mr-6 md:w-auto glitch-text hidden md:flex"
                  data-text={timelineData[selected].title}
                >
                  {timelineData[selected].subhead}
                </p>
              </motion.div>
              <div className="flex flex-col justify-center items-start border-l-2 border-myYellow pb-32">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease:"easeInOut" , delay: 2 }}
              >
                <div className="mx-2 bg-myYellow text-black text-lg md:text-xl lg:text-2xl px-5 xl:px-10 xl:pr-32 font-bold" data-text={timelineData[selected].institute}>
                  {timelineData[selected].institute}
                </div>
              </motion.div>  
                <div className="flex flex-col justify-center items-start ml-4 mt-4 text-white">
                  <motion.div 
                    {...fadeInUp}
                    transition={{ duration: 1 , delay: 4 }}
                  >
                    <p className="text-xl mb-4">
                    {timelineData[selected].para}
                  </p>
                  </motion.div>
                  <motion.div 
                    {...fadeInUp}
                    transition={{ duration: 1 , delay: 5 }}
                  >
                    <div className="ml-5 text-start text-sm sm:text-xl">
                      <p className="mb-4">{timelineData[selected].para1}</p>
                      <p className="mb-4">{timelineData[selected].para2}</p>
                      <p className="mb-4">{timelineData[selected].para3}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            <motion.div
              {...fadeInUp}
              transition={{ duration: 1 , delay: 7 }}
            >
              <div className="flex flex-col justify-center items-start mt-6 w-10/12 md:w-6/12 sm:ml-32 lg:mt-40 mb-16">
                <p className="text-start mb-4 font-bold text-myYellow">Year: {timelineData[selected].year}</p>
                <div className="border-b-2 border-l-2 border-myYellow px-20 sm:px-32">
                  <Hologram imageUrl={timelineData[selected].image} />
                </div>
                <p className="text-lg mt-4 font-bold text-myYellow">{timelineData[selected].vision}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
