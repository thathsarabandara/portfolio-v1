import React, { Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { TbBrandLaravel, TbBrandReactNative, TbBrandThreejs, TbWorldWww } from 'react-icons/tb';
import { FaBrain, FaDocker, FaFlask, FaHtml5, FaJava, FaNodeJs, FaPython, FaReact, FaVuejs } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiArduino, SiDjango, SiExpress, SiKotlin, SiMysql, SiSpringboot, SiTensorflow } from 'react-icons/si';
import { Canvas } from '@react-three/fiber';
import { Environment, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Laptop } from '../../component/3d_component/Laptop';
import { FaFlutter, FaMobileScreen } from 'react-icons/fa6';
import { BsRobot } from 'react-icons/bs';
import { DiMongodb, DiRedis } from 'react-icons/di';
import Healthsphere from '../../assets/images/projects/web/healthsphere/logo.png'
import EMentor from '../../assets/images/projects/web/ementor/logo.png'
import SixteenClothing from '../../assets/images/projects/web/sixteenclothing/logo.png'
import FindaJob from '../../assets/images/projects/web/findajob/logo.png'
import Chefza from '../../assets/images/projects/web/chefza/logo.png'
import Bigcart from '../../assets/images/projects/web/bigcart/logo.png'
import strom from '../../assets/images/projects/web/stromsportfolio/logo.png'
import { BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoFirebase } from 'react-icons/io5';

const ProjectTypes = [
  {
    id: 1,
    type: "Web Projects",
    image: TbWorldWww,
    projects: [
      {
        id: 201,
        img: Healthsphere,
        name: "Healthsphere",
        title: "Hospital Management Platform",
        details:
          "HealthSphere is a comprehensive hospital management platform designed to streamline and optimize healthcare operations. Built using a modern MERN stack with MySQL, the platform ensures efficient management of patient records, appointments, billing, and inventory while integrating Redis for caching and Docker for containerized deployment.",
        Techs: [FaReact, RiTailwindCssFill, SiMysql , FaNodeJs , SiExpress , DiRedis , FaDocker ],
        Code: "https://github.com/thathsarabandara/HealthSphereProject-",
        link: "",
        video: "/video/commingSoon.mp4"
      },
      {
        id: 202,
        img: EMentor,
        name: "E-Mentor",
        title: "Learning Management System",
        details:
          "E-Mentor is an advanced learning management system (LMS) built with Next.js and MySQL. It provides an interactive platform for students and teachers to manage courses, assignments, and assessments. Redis caching improves response time, while Docker ensures smooth deployment. This LMS is designed for scalability, making it ideal for institutions and online education platforms.",
        Techs: [FaReact, RiTailwindCssFill, SiMysql , RiNextjsFill , FaDocker , DiRedis ],
        Code: "https://github.com/thathsarabandara/E-Mentor-frontend",
        link: "",
        video: "/video/commingSoon.mp4"
      },
      {
        id: 203,
        img: SixteenClothing,
        name: "Sixteen Clothing",
        title: "MultiVendor Ecommerce Platform",
        details:
          "Sixteen Clothing is a Laravel-based multivendor e-commerce platform that facilitates seamless online shopping. The platform supports multiple vendors, product management, order tracking, and secure payments. MySQL serves as the database backbone, while Redis improves performance. Docker integration ensures easy deployment, making it an efficient solution for large-scale e-commerce applications.",
        Techs: [ TbBrandLaravel, RiTailwindCssFill, SiMysql , DiRedis , FaDocker],
        Code: "https://github.com/RasuwanK/ecommerce-app",
        link: "",
        video: "/video/commingSoon.mp4"
      },
      {
        id: 204,
        img: FindaJob,
        name: "Find a Job",
        title: "Online Job Posting Platform",
        details:
          "Find a Job is an online job portal built with React and Spring Boot, providing a streamlined hiring process for job seekers and employers. The platform enables job postings, applications, and interview scheduling. MySQL handles data storage, ensuring fast retrieval of job listings. Designed for efficiency and scalability, it supports both small and large businesses in their recruitment needs.",
        Techs: [ FaReact, RiTailwindCssFill, FaJava , SiSpringboot,  SiMysql],
        Code: "https://github.com/thathsarabandara/findajob",
        link: "",
        video: "/video/commingSoon.mp4"
      },
      {
        id: 205,
        img: Chefza,
        name: "Chefza",
        title: "Online Food Ordering Platform",
        details:
          "Chefza is an intuitive food ordering platform developed using Vue.js and Django. It enables users to browse restaurant menus, place orders, and track deliveries in real-time. PostgreSQL ensures secure and efficient data management. The platform is designed for scalability, catering to small businesses and large restaurant chains looking to expand their online presence.",
        Techs: [FaVuejs, RiTailwindCssFill, FaPython, SiDjango , BiLogoPostgresql],
        Code: "",
        link: "",
        video: "/video/commingSoon.mp4"
      },
      {
        id: 206,
        img: Bigcart,
        name: "Bigcart",
        title: "E-commerce Platform",
        details:
          "Bigcart is a full-featured e-commerce platform built using the MERN stack with MongoDB. It offers product listing, cart management, order tracking, and secure payments. With a React frontend and Node.js backend, the platform ensures a seamless shopping experience for users. It is designed for scalability and includes a user-friendly interface for both customers and vendors.",
        Techs: [FaReact, RiTailwindCssFill, DiMongodb , FaNodeJs, SiExpress],
        Code: "",
        link: "",
        video: "/video/commingSoon.mp4"
      },
      {
        id: 207,
        img: strom,
        name: "Strom's Portfolio",
        title: "My-Portfolio",
        details:
          "Strom's Portfolio is a modern, interactive portfolio website showcasing projects, skills, and achievements. Built with React, Tailwind CSS, and Three.js, it features smooth animations, a dynamic 3D experience, and a responsive design. It serves as a personal branding platform to highlight expertise and career milestones.",
        Techs: [FaReact, RiTailwindCssFill,TbBrandThreejs ],
        Code: "https://github.com/thathsarabandara/portfolio-v1",
        link: "",
        video: "/video/commingSoon.mp4"
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
        img: "",
        name: "FitFlow",
        title: "Fitness Tracker App",
        details:
          "FitFlow is a mobile fitness tracking application built with Flutter and Firebase. It helps users monitor their workouts, track progress, and set fitness goals. The app features real-time data syncing, workout reminders, and performance analytics, making it a comprehensive tool for fitness enthusiasts.",
        Techs: [FaFlutter, IoLogoFirebase],
        Code: "",
        link: "",
        video: "/video/commingSoon.mp4"
      },
      {
        id: 402,
        img: "",
        name: "Ledgerly",
        title: "Expence Tracker App",
        details:
          "Ledgerly is a mobile expense tracking application developed with React Native and Kotlin. It allows users to manage their daily expenses, set budgets, and analyze financial trends. The app features real-time data synchronization, intuitive UI, and secure cloud storage for expense data.",
        Techs: [TbBrandReactNative , SiKotlin],
        Code: "",
        link: "",
        video: "/video/commingSoon.mp4"
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
        img: "",
        name: "SOMI Bot",
        title: "ChatBot For Hospital Management System",
        details:
          "SOMI Bot is an AI-powered chatbot developed with TensorFlow and Flask to assist hospital staff and patients. It provides automated responses for appointment scheduling, doctor availability, and general inquiries, enhancing hospital efficiency and patient engagement.",
        Techs: [FaPython, SiTensorflow, FaFlask],
        Code: "",
        link: "",
        video: "/video/commingSoon.mp4"
      },
      {
        id: 502,
        img: "",
        name: "E-Mentor Bot",
        title: "ChatBot For Learning Management System",
        details:
          "E-Mentor Bot is an AI-powered chatbot designed to assist students and educators within an LMS environment. Developed using TensorFlow and Django, it offers real-time support, automated responses to academic queries, and personalized learning assistance.",
        Techs: [FaPython, SiTensorflow, SiDjango],
        Code: "",
        link: "",
        video: "/video/commingSoon.mp4"
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
        img: "",
        name: "SmartNest",
        title: "Smart Home Automation System",
        details:
          "SmartNest is an IoT-based home automation system that enables remote control of household appliances via a mobile app. Built with Arduino, it integrates smart sensors to provide energy efficiency, security, and convenience for homeowners.",
        Techs: [SiArduino],
        Code: "",
        link: "",
        video: "/video/commingSoon.mp4"
      },
      {
        id: 302,
        img: "",
        name: "EcoFarm",
        title: "Smart Agriculture System",
        details:
          "coFarm is an innovative smart agriculture system designed to optimize farming practices using IoT and automation. Built with Arduino, the system integrates smart sensors for soil moisture, temperature, and humidity monitoring. The platform helps farmers make data-driven decisions, improve crop yields, and reduce water usage, enhancing both productivity and sustainability in agriculture.",
        Techs: [SiArduino],
        Code: "",
        link: "",
        video: "/video/commingSoon.mp4"
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
                          <img src={selectedProject.img} alt='logo' className='w-12 h-12 bg-white rounded-lg'/>
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
                                target='blank'
                                className="px-5 py-3 bg-myYellow text-black font-bold rounded-lg mt-5 border border-myYellow hover-transparent hover:text-white hover:bg-transparent hover:border-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 5 }}
                            >
                                View the code
                            </motion.a>
                            <motion.a
                                href={selectedProject.link}
                                target='blank'
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
