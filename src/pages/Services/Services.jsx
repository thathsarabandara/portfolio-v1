import React from 'react'
import { motion } from 'framer-motion'
import { MdWork } from 'react-icons/md'

function ServiceCard({ service }) {
  return (
    <div className="flex justify-start items-end w-full px-4">
      {/* Main Card */}
      <div className="flex flex-col justify-start items-start w-[250px] sm:w-[500px] md:w-[300px] max-w-3xl h-56 border-2 border-r-0 px-4 py-5 
        group transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_20px_#facc15]">
        <div className="text-4xl text-yellow-300">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold mt-4 text-white group-hover:text-yellow-300">
          {service.title}
        </h3>
        <p className="text-gray-400 mt-2 group-hover:text-yellow-200">
          {service.description}
        </p>
      </div>

      {/* Right Border & Arrow Indicator */}
      <div className="flex flex-col justify-center items-center mt-5 transition-all duration-300">
        <div className="w-8 h-48 border-r-2 border-t-2 border-gray-300 hover:border-yellow-400"></div>
        <div className="w-0 h-0 border-l-[0px] border-l-transparent border-r-[32px] border-r-transparent 
          border-t-[32px] border-gray-300 group-hover:border-yellow-400"></div>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Full-Stack Development",
    icon: "💻",
    description: "Scalable web applications using React.js, Angular, Node.js, and Python.",
  },
  {
    title: "Cloud & DevOps Solutions",
    icon: "☁️",
    description: "Deploy and automate workflows with AWS, GCP, Docker, and CI/CD pipelines.",
  },
  {
    title: "AI & IoT Integration",
    icon: "🤖",
    description: "Building intelligent applications using AI models and IoT devices.",
  },
  {
    title: "Mobile App Development",
    icon: "📱",
    description: "Cross-platform mobile apps with Flutter and React Native.",
  },
  {
    title: "UI/UX Design & Optimization",
    icon: "🎨",
    description: "Creating user-friendly, aesthetic, and responsive digital experiences.",
  },
  {
    title: "API Development & Integration",
    icon: "🔗",
    description: "RESTful and GraphQL APIs for seamless connectivity and automation.",
  },
];

function Services() {
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
            SERVICES ZONE
          </h2>
        </div>
      </motion.div>

      <div className="relative w-full h-full max-w-8xl mt-32 flex flex-col justify-center items-center">
        <div className='flex flex-col justify-center items-start ml-4 md:ml-16'>
          <motion.div 
            className="flex justify-center items-start mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay:2 }}
          >
            <MdWork  className='mr-6 text-5xl md:text-xl'/>
            <p className='text-start'>
            You Just Steped In to My Services Zone, Here What I Offer,
            </p>
          </motion.div>
          <motion.div 
            className="flex justify-center items-start mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay:4 }}
          >
            <p className='text-start'>
            I specialize in designing and developing scalable, efficient, and innovative solutions across various domains. From crafting intuitive user interfaces to building robust backend systems, I ensure seamless integration of cutting-edge technologies. My expertise spans full-stack development, cloud solutions, DevOps automation, and AI-powered applications. Let’s collaborate to bring your ideas to life with modern, high-performance solutions.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <motion.div 
            className="flex justify-center items-start mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay:(index+12) * 0.5}}
          >
            <ServiceCard key={index} service={service} />
          </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services