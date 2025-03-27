import React, { Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { TbWorldWww } from 'react-icons/tb';
import { FaBrain, FaHtml5, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMysql } from 'react-icons/si';
import frontCourse1 from '../../assets/images/certificates/meta-frontend/course1.png';
import { Canvas } from '@react-three/fiber';
import { Environment, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Laptop } from '../../component/3d_component/Laptop';
import { FaMobileScreen } from 'react-icons/fa6';
import { BsRobot } from 'react-icons/bs';

const ProjectTypes = [
  {
    id: 1,
    type: "Web Projects",
    image: TbWorldWww,
    projects: [
      {
        id: 201,
        img: "https://th.bing.com/th/id/OIP.J1VVS2X-BrpRZFWhnt_RzQHaHa?rs=1&pid=ImgDetMain",
        name: "Healthsphere",
        title: "Hospital Management Platform",
        details:
          "HealthSphere is a comprehensive hospital management platform designed to streamline and optimize healthcare operations. Built using a modern MERN stack with MySQL, the platform ensures efficient management of patient records, appointments, billing, and inventory while integrating Redis for caching and Docker for containerized deployment.",
        Techs: [FaHtml5, FaReact, RiTailwindCssFill, SiMysql],
        Code: "",
        link: "",
        video: "/video/commingSoon.mp4"
      },
      {
        id: 202,
        img: "https://th.bing.com/th/id/OIP.J1VVS2X-BrpRZFWhnt_RzQHaHa?rs=1&pid=ImgDetMain",
        name: "E-Mentor",
        title: "Learning Management System",
        details:
          "HealthSphere is a comprehensive hospital management platform designed to streamline and optimize healthcare operations. Built using a modern MERN stack with MySQL, the platform ensures efficient management of patient records, appointments, billing, and inventory while integrating Redis for caching and Docker for containerized deployment.",
        Techs: [FaHtml5, FaReact, RiTailwindCssFill, SiMysql],
        Code: "",
        link: "",
        video: "/video/webIntro.mp4"
      },
      {
        id: 203,
        img: "https://th.bing.com/th/id/OIP.J1VVS2X-BrpRZFWhnt_RzQHaHa?rs=1&pid=ImgDetMain",
        name: "Sixteen Clothing",
        title: "MultiVendor Ecommerce Platform",
        details:
          "HealthSphere is a comprehensive hospital management platform designed to streamline and optimize healthcare operations. Built using a modern MERN stack with MySQL, the platform ensures efficient management of patient records, appointments, billing, and inventory while integrating Redis for caching and Docker for containerized deployment.",
        Techs: [FaHtml5, FaReact, RiTailwindCssFill, SiMysql],
        Code: "",
        link: "",
        video: "/video/webIntro.mp4"
      },
      {
        id: 204,
        img: "https://th.bing.com/th/id/OIP.J1VVS2X-BrpRZFWhnt_RzQHaHa?rs=1&pid=ImgDetMain",
        name: "Find a Job",
        title: "Online Job Posting Platform",
        details:
          "HealthSphere is a comprehensive hospital management platform designed to streamline and optimize healthcare operations. Built using a modern MERN stack with MySQL, the platform ensures efficient management of patient records, appointments, billing, and inventory while integrating Redis for caching and Docker for containerized deployment.",
        Techs: [FaHtml5, FaReact, RiTailwindCssFill, SiMysql],
        Code: "",
        link: "",
        video: "/video/webIntro.mp4"
      },
      {
        id: 205,
        img: "https://th.bing.com/th/id/OIP.J1VVS2X-BrpRZFWhnt_RzQHaHa?rs=1&pid=ImgDetMain",
        name: "Chefza",
        title: "Online Food Ordering Platform",
        details:
          "HealthSphere is a comprehensive hospital management platform designed to streamline and optimize healthcare operations. Built using a modern MERN stack with MySQL, the platform ensures efficient management of patient records, appointments, billing, and inventory while integrating Redis for caching and Docker for containerized deployment.",
        Techs: [FaHtml5, FaReact, RiTailwindCssFill, SiMysql],
        Code: "",
        link: "",
        video: "/video/webIntro.mp4"
      },
    ],
  },
  {
    id: 2,
    type: "Mobile Projects",
    image: FaMobileScreen ,
    projects: [
      {
        id: 401,
        img: "https://th.bing.com/th/id/OIP.J1VVS2X-BrpRZFWhnt_RzQHaHa?rs=1&pid=ImgDetMain",
        name: "FitFlow",
        title: "Fitness Tracker App",
        details:
          "HealthSphere is a comprehensive hospital management platform designed to streamline and optimize healthcare operations. Built using a modern MERN stack with MySQL, the platform ensures efficient management of patient records, appointments, billing, and inventory while integrating Redis for caching and Docker for containerized deployment.",
        Techs: [FaHtml5, FaReact, RiTailwindCssFill, SiMysql],
        Code: "",
        link: "",
        video: "/video/webIntro.mp4"
      },
      {
        id: 402,
        img: "https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png",
        name: "Ledgerly",
        title: "Expence Tracker App",
        details:
          "HealthSphere is a comprehensive hospital management platform designed to streamline and optimize healthcare operations. Built using a modern MERN stack with MySQL, the platform ensures efficient management of patient records, appointments, billing, and inventory while integrating Redis for caching and Docker for containerized deployment.",
        Techs: [FaHtml5, FaReact, RiTailwindCssFill, SiMysql],
        Code: "",
        link: "",
        video: "/video/webIntro.mp4"
      },
    ],
  },
  {
    id: 3,
    type: "AI Projects",
    image: FaBrain ,
    projects: [
      {
        id: 501,
        img: "https://th.bing.com/th/id/OIP.J1VVS2X-BrpRZFWhnt_RzQHaHa?rs=1&pid=ImgDetMain",
        name: "SOMI Bot",
        title: "ChatBot For Hospital Management System",
        details:
          "HealthSphere is a comprehensive hospital management platform designed to streamline and optimize healthcare operations. Built using a modern MERN stack with MySQL, the platform ensures efficient management of patient records, appointments, billing, and inventory while integrating Redis for caching and Docker for containerized deployment.",
        Techs: [FaHtml5, FaReact, RiTailwindCssFill, SiMysql],
        Code: "",
        link: "",
        video: "/video/webIntro.mp4"
      },
      {
        id: 502,
        img: "https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png",
        name: "E-Mentor Bot",
        title: "ChatBot For Learning Management System",
        details:
          "HealthSphere is a comprehensive hospital management platform designed to streamline and optimize healthcare operations. Built using a modern MERN stack with MySQL, the platform ensures efficient management of patient records, appointments, billing, and inventory while integrating Redis for caching and Docker for containerized deployment.",
        Techs: [FaHtml5, FaReact, RiTailwindCssFill, SiMysql],
        Code: "",
        link: "",
        video: "/video/webIntro.mp4"
      },
    ],
  },
  {
    id: 4,
    type: "IOT Projects",
    image: BsRobot ,
    projects: [
      {
        id: 301,
        img: "https://th.bing.com/th/id/OIP.J1VVS2X-BrpRZFWhnt_RzQHaHa?rs=1&pid=ImgDetMain",
        name: "SmartNest",
        title: "Smart Home Automation System",
        details:
          "HealthSphere is a comprehensive hospital management platform designed to streamline and optimize healthcare operations. Built using a modern MERN stack with MySQL, the platform ensures efficient management of patient records, appointments, billing, and inventory while integrating Redis for caching and Docker for containerized deployment.",
        Techs: [FaHtml5, FaReact, RiTailwindCssFill, SiMysql],
        Code: "",
        link: "",
        video: "/video/webIntro.mp4"
      },
      {
        id: 302,
        img: "https://www.freepnglogos.com/uploads/logo-3d-png/3d-company-logos-design-logo-online-2.png",
        name: "EcoFarm",
        title: "Smart Agriculture System",
        details:
          "HealthSphere is a comprehensive hospital management platform designed to streamline and optimize healthcare operations. Built using a modern MERN stack with MySQL, the platform ensures efficient management of patient records, appointments, billing, and inventory while integrating Redis for caching and Docker for containerized deployment.",
        Techs: [FaHtml5, FaReact, RiTailwindCssFill, SiMysql],
        Code: "",
        link: "",
        video: "/video/webIntro.mp4"
      },
    ],
  },
];

function Projects() {
  const [selectedType, setSelectedType] = useState(ProjectTypes[0]);
  const [selectedProject, setSelectedProject] = useState(selectedType.projects[0]);

  const [fov, setFov] = useState(window.innerWidth < 640 ? 15 : 10); 

    useEffect(() => {
    const handleResize = () => {
        setFov(window.innerWidth < 640 ? 17 : 8);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className="relative w-full min-h-screen text-white font-chakra p-8 flex flex-col items-center">
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
            PROJECT ZONE
          </h2>
        </div>
      </motion.div>

      <div className="relative w-full h-full max-w-8xl mt-24 flex flex-col justify-center items-start">
        <div className="p-6 w-full max-w-7xl mx-auto">
            <div className='flex flex-col md:flex-row justify-center items-start'>
                <motion.div
                    className="w-full overflow-x-auto whitespace-nowrap flex justify-start items-center space-x-4 pb-4 border-b-2 md:w-1/2 scrollbar-hide"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    {ProjectTypes.map((type, index) => (
                    <motion.div
                        key={type.id}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.6 }}
                        onClick={() => {
                        setSelectedType(type);
                        setSelectedProject(type.projects[0]);
                        }}
                        className={`cursor-pointer flex flex-col justify-center items-center rounded-xl w-32 py-5 px-3 mt-4 border-b ${
                            selectedType.id === type.id
                            ? "border border-white"
                            : ""
                        }`}
                        whileHover={{ scale: 1.15 }}
                    >
                        <p className="text-5xl text-center mb-3">{<type.image />}</p>
                        <p className="text-sm text-center">{type.type}</p>
                    </motion.div>
                    ))}
                </motion.div>
                <AnimatePresence mode="wait">
                    <motion.div
                    key={selectedType.id}
                    className="flex flex-col lg:flex-row justify-center items-center space-x-4 mt-4 md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 1, delay: 1 }}
                    >
                    <motion.div
                        className="flex flex-col justify-center items-start md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <div className="flex justify-center items-center">
                        <p className="w-6 h-6 border-b-2 border-r-2"></p>
                        <motion.div
                            className="flex flex-col justify-center items-start"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            <p className="font-bold text-lg ml-4">{selectedType.type}</p>
                        </motion.div>
                        </div>
                        <div className="flex flex-col justify-center items-center border-t-2 border-l-2 -mt-1 ml-6">
                            <motion.div
                            className="overflow-y-auto max-h-72 border-l-2 border-b-2 p-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 3 }}
                            >
                            {selectedType.projects.map((project) => (
                                <div
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className={`cursor-pointer p-2 px-5 w-64 border-b ${
                                    selectedProject.id === project.id
                                    ? "bg-myYellow font-bold text-black"
                                    : ""
                                }`}
                                >
                                {project.name}
                                </div>
                            ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>    
                </AnimatePresence>
            </div>
            <div className="flex flex-col xl:flex-row justify-center items-start mt-8 md:mt-32">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProject.id}
                    className="flex flex-col lg:flex-row p-4 rounded-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 1 }}
                  >
                    <motion.div
                      className="flex flex-col justify-center items-start sm:w-10/12 lg:w-1/3 mb-12"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 3.5 }}
                    >
                      <div className="flex justify-center items-center">
                        <p className="w-6 h-6 border-b-2 border-r-2"></p>
                        <motion.div
                          className="ml-4"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 1, delay: 4 }}
                        >
                          <p className="font-bold text-center text-lg mb-2">{selectedProject.name}</p>
                        </motion.div>
                      </div>
                      <div className="flex flex-col justify-center items-start border-t-2 border-l-2 -mt-1 ml-6 pl-10 pt-10">
                        <motion.div
                          className=""
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1, delay: 4.5 }}
                        >
                          <img src={selectedProject.img} alt='logo' className='w-12 h-12'/>
                          <p className='mt text-2xl font-bold mt-4 text-start'>{selectedProject.name} - {selectedProject.title}</p>
                        </motion.div>
                        <motion.div
                          className=""
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1, delay: 5 }}
                        >
                          <p className="text-sm mt-4 mb-2 text-start">
                            {selectedProject.details}
                          </p>
                        </motion.div>
                        <motion.div
                          className="flex flex-col justify-center items-start"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1, delay: 5 }}
                        >
                            <p className="text-lg font-bold mt-2 mb-2 text-start">
                                Tech Stack
                            </p>
                            <div className="grid grid-cols-5 gap-4 ml-12 mt-3">
                                {selectedProject.Techs.map((Tech, index) => (
                                    <Tech key={index} className="text-myYellow text-3xl hover:text-white" />
                                ))}
                            </div>
                        </motion.div>
                        <div className='flex space-x-5'>
                            <motion.a
                                href={selectedProject.Code}
                                className="px-5 py-3 bg-myYellow text-black font-bold rounded-lg mt-5 border border-myYellow hover-transparent hover:text-white hover:bg-transparent hover:border-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 5 }}
                            >
                                View the code
                            </motion.a>
                            <motion.a
                                href={selectedProject.link}
                                className="px-5 py-3 bg-myYellow text-black font-bold rounded-lg mt-5 border border-myYellow hover-transparent hover:text-white hover:bg-transparent hover:border-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 5 }}
                            >
                                View Demo
                            </motion.a>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex flex-col justify-center items-start sm:w-11/12 lg:w-2/3 sm:ml-2 "
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 5.5 }}
                    >
                        <div className='relative w-10/12 h-full border-b-2 border-l-2 ml-7 -mb-1'>
                            <div className='absolute bg-gray-600 blur-3xl w-full h-full opacity-50'></div>
                            <Canvas shadows>
                                <PerspectiveCamera makeDefault position={[8, 8, 30]} fov={fov} />

                                <Suspense fallback={
                                    <Html>
                                    <p className="text-white text-xl animate-pulse w-full">Loading Model...</p>
                                    </Html>
                                }>
                                    <ambientLight intensity={0.8} color="#FFFFFF" />
                                    <directionalLight intensity={1.2} color="#FFFFFF" position={[5, 10, 10]} castShadow />

                                    <OrbitControls
                                        enableZoom={false}
                                        enablePan={false}
                                        minPolarAngle={Math.PI / 3}
                                        maxPolarAngle={Math.PI / 2.2}
                                    />

                                    <group position={[0, -1, 0]}>
                                        <Laptop videoSrc={selectedProject.video} />
                                    </group>

                                </Suspense>

                                <Environment preset="sunset" />
                            </Canvas>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='w-8 h-8 border-t-2 border-r-2'></div>
                            <p className='ml-8 mt-3 font-bold'>PROJECT VIEW</p>
                        </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
