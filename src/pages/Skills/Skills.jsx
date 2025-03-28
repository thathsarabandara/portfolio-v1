import React from 'react'
import { motion } from 'framer-motion'
import { HiMiniRocketLaunch } from 'react-icons/hi2'
import Angular from '../../assets/images/Angular.svg';
import Arduino from '../../assets/images/Arduino.svg';
import AWS from '../../assets/images/AWS.svg';
import Azure from '../../assets/images/Azure.svg';
import Bootstrap from '../../assets/images/Bootstrap.svg';
import C from '../../assets/images/C.svg';
import CSS from '../../assets/images/CSS.svg';
import Cassandra from '../../assets/images/Cassandra.svg';
import Django from '../../assets/images/Django.svg';
import Docker from '../../assets/images/Docker.svg';
import DotNet from '../../assets/images/DotNet.svg';
import Eclipse from '../../assets/images/Eclipse.svg';
import ExpressJS from '../../assets/images/ExpressJS.svg';
import FastAPI from '../../assets/images/FastAPI.svg';
import Figma from '../../assets/images/Figma.svg';
import Firebase from '../../assets/images/Firebase.svg';
import Flask from '../../assets/images/Flask.svg';
import Flutter from '../../assets/images/Flutter.svg';
import GCP from '../../assets/images/GCP.svg';
import Gherkin from '../../assets/images/Gherkin.svg';
import Git from '../../assets/images/Git.svg';
import GithubActions from '../../assets/images/GithubActions.svg';
import Github from '../../assets/images/Github.svg';
import GitLab from '../../assets/images/GitLab.svg';
import Gradle from '../../assets/images/Gradle.svg';
import GraphQL from '../../assets/images/GraphQL.svg';
import HTML from '../../assets/images/HTML.svg';
import Java from '../../assets/images/Java.svg';
import JavaScript from '../../assets/images/JavaScript.svg';
import Jenkins from '../../assets/images/Jenkins.svg';
import Jest from '../../assets/images/Jest.svg';
import Kotlin from '../../assets/images/Kotlin.svg';
import Kubernetes from '../../assets/images/Kubernetes.svg';
import Laravel from '../../assets/images/Laravel.svg';
import Linux from '../../assets/images/Linux.svg';
import MaterialUI from '../../assets/images/MaterialUI.svg';
import Maven from '../../assets/images/Maven.svg';
import MongoDB from '../../assets/images/MongoDB.svg';
import MySQL from '../../assets/images/MySQL.svg';
import NestJS from '../../assets/images/NestJS.svg';
import Netlify from '../../assets/images/Netlify.svg';
import NextJS from '../../assets/images/NextJS.svg';
import PHP from '../../assets/images/PHP.svg';
import PostgreSQL from '../../assets/images/PostgreSQL.svg';
import Postman from '../../assets/images/Postman.svg';
import PowerShell from "../../assets/images/powershell.svg"; 
import Prisma from '../../assets/images/Prisma.svg';
import Python from '../../assets/images/Python.svg';
import ReactLogo from '../../assets/images/React.svg';
import Redis from '../../assets/images/Redis.svg';
import Redux from '../../assets/images/Redux.svg';
import Regex from '../../assets/images/Regex.svg';
import Ruby from '../../assets/images/Ruby.svg';
import Sass from '../../assets/images/Sass.svg';
import Selenium from '../../assets/images/Selenium.svg';
import Sequelize from '../../assets/images/Sequelize.svg';
import Spring from '../../assets/images/Spring.svg';
import SQLite from '../../assets/images/SQLite.svg';
import TailwindCSS from '../../assets/images/TailwindCSS.svg';
import TensorFlow from '../../assets/images/TensorFlow.svg';
import ThreeJS from '../../assets/images/ThreeJS.svg';
import TypeScript from '../../assets/images/TypeScript.svg';
import Vite from '../../assets/images/Vite.svg';
import VSCode from '../../assets/images/VSCode.svg';
import VueJS from '../../assets/images/VueJS.svg';
import WordPress from '../../assets/images/WordPress.svg';

const techLogos = [
  { name: "Angular", src: Angular },
  { name: "Arduino", src: Arduino },
  { name: "AWS", src: AWS },
  { name: "Azure", src: Azure },
  { name: "Bootstrap", src: Bootstrap },
  { name: "C", src: C },
  { name: "CSS", src: CSS },
  { name: "Cassandra", src: Cassandra },
  { name: "Django", src: Django },
  { name: "Docker", src: Docker },
  { name: "DotNet", src: DotNet },
  { name: "Eclipse", src: Eclipse },
  { name: "ExpressJS", src: ExpressJS },
  { name: "FastAPI", src: FastAPI },
  { name: "Figma", src: Figma },
  { name: "Firebase", src: Firebase },
  { name: "Flask", src: Flask },
  { name: "Flutter", src: Flutter },
  { name: "GCP", src: GCP },
  { name: "Gherkin", src: Gherkin },
  { name: "Git", src: Git },
  { name: "GithubActions", src: GithubActions },
  { name: "Github", src: Github },
  { name: "GitLab", src: GitLab },
  { name: "Gradle", src: Gradle },
  { name: "GraphQL", src: GraphQL },
  { name: "HTML", src: HTML },
  { name: "Java", src: Java },
  { name: "JavaScript", src: JavaScript },
  { name: "Jenkins", src: Jenkins },
  { name: "Jest", src: Jest },
  { name: "Kotlin", src: Kotlin },
  { name: "Kubernetes", src: Kubernetes },
  { name: "Laravel", src: Laravel },
  { name: "Linux", src: Linux },
  { name: "MaterialUI", src: MaterialUI },
  { name: "Maven", src: Maven },
  { name: "MongoDB", src: MongoDB },
  { name: "MySQL", src: MySQL },
  { name: "NestJS", src: NestJS },
  { name: "Netlify", src: Netlify },
  { name: "NextJS", src: NextJS },
  { name: "PHP", src: PHP },
  { name: "PostgreSQL", src: PostgreSQL },
  { name: "Postman", src: Postman },
  { name: "PowerShell", src: PowerShell },
  { name: "Prisma", src: Prisma },
  { name: "Python", src: Python },
  { name: "React", src: ReactLogo },
  { name: "Redis", src: Redis },
  { name: "Redux", src: Redux },
  { name: "Regex", src: Regex },
  { name: "Ruby", src: Ruby },
  { name: "Sass", src: Sass },
  { name: "Selenium", src: Selenium },
  { name: "Sequelize", src: Sequelize },
  { name: "Spring", src: Spring },
  { name: "SQLite", src: SQLite },
  { name: "TailwindCSS", src: TailwindCSS },
  { name: "TensorFlow", src: TensorFlow },
  { name: "ThreeJS", src: ThreeJS },
  { name: "TypeScript", src: TypeScript },
  { name: "Vite", src: Vite },
  { name: "VSCode", src: VSCode },
  { name: "VueJS", src: VueJS },
  { name: "WordPress", src: WordPress },
];

const AnimatedLogo = ({ src, delay }) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay }}
    >
      <img
        className="w-12 h-12 transform transition duration-300 ease-in-out hover:scale-110"
        src={src}
        alt="logo"
      />
    </motion.div>
  );
};

const AnimatedText = ({ text, delay }) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-end"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay }}
    >
      <p className="text-lg mr-2">{text}</p>
    </motion.div>
  );
};

const technologies = [
  "HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "TAILWIND", 
  "VUE", "NEXT", "DOCKER", "KUBERNETS", "JENKINS", 
  "PYTHON", "C", "C++", "REDIS", "NLP", 
  "GIT", "DEVOPS"
];

function Skills() {
  return (
    <div className="relative w-full min-h-screen text-white font-chakra p-8 flex flex-col items-center">
      <motion.div 
        className="absolute top-20 left-8 md:left-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex  items-center space-x-3">
          <div className="p-2 flex justify-center items-center w-10 h-10 border border-myYellow animate-pulse">
            <div className="w-8 h-5 bg-myYellow"></div>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-myYellow tracking-widest neon-text">
            SKILL ZONE
          </h2>
        </div>
      </motion.div>

      <div className="relative w-full h-full max-w-8xl mt-32 flex flex-col justify-center items-start">
        <div className='flex flex-col justify-center items-start ml-4 md:ml-16'>
          <motion.div 
            className="flex justify-center items-start mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay:2 }}
          >
            <HiMiniRocketLaunch  className='mr-6 text-5xl md:text-xl'/>
            <p className='text-start'>
              I am a full-stack developer and AI enthusiast with a passion for building intelligent and scalable systems. I specialize in React.js, Next.js, and Tailwind CSS for dynamic UIs and Node.js, Express.js, and MySQL/MongoDB for efficient backend development.
            </p>
          </motion.div>
          <motion.div 
            className="flex justify-center items-start mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay:4 }}
          >
            <HiMiniRocketLaunch  className='mr-6 text-5xl md:text-xl'/>
            <p className='text-start'>
            With expertise in Docker, Kubernetes, and Redis caching, I ensure high-performance and scalable deployments. I integrate CI/CD pipelines for seamless development workflows and leverage AWS & Firebase for cloud solutions.
            </p>
          </motion.div>
          <motion.div 
            className="flex justify-center items-start mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay:6 }}
          >
            <HiMiniRocketLaunch  className='mr-6 text-5xl md:text-xl'/>
            <p className='text-start'>
              As an AI enthusiast, I explore machine learning, NLP, and automation, integrating AI-driven insights into applications. Strong in data structures, algorithms, and problem-solving, I thrive in fast-paced, collaborative environments using Agile, Git, and DevOps practices
            </p>
          </motion.div>
        </div>
        <div className='flex flex-col-reverse md:flex-row justify-center md:justify-start items-start ml-4 md:ml-16 w-full mt-6 space-x-3'>
        <motion.div 
            className="flex flex-col justify-center items-start md:items-end ml-4 md:ml-16 w-11/12 md:w-2/12 mb-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay:7 }}
          >
            <div className='flex justify-start items-center'>
              <motion.div 
                className="flex flex-col justify-center items-end"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeInOut', delay:8 }}
              >
                <p className='text-lg mr-2'>
                    Skill badges
                </p>
              </motion.div>
                <div className='w-6 h-6 border-l-2 border-b-2'></div>
            </div>
            <div className='flex flex-col justify-center items-end border-t-2 border-r-2 pl-12 py-1 mr-5 -mt-1'>
              {technologies.map((tech, index) => (
                <AnimatedText key={tech} text={tech} delay={9 + index} />
              ))}
            </div>
          </motion.div>
          <div className='grid grid-cols-6 md:grid-cols-12 w-10/12 md:w-8/12 gap-5 m'>
            {techLogos.map((tech, index) => (
              <AnimatedLogo key={tech.name} src={tech.src} delay={(index + 24) * 0.3} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills