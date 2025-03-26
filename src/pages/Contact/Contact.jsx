import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BiLogoTelegram } from 'react-icons/bi'
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import InputContainer from '../../component/Input/InputContainer';

const iconMap = {
  github: FaGithub,
  stackoverflow: FaStackOverflow,
  linkedin: FaLinkedin,
  discord: FaDiscord,
  twitter: FaTwitter,
  gmail: SiGmail,
  facebook: FaFacebook,
  instagram: FaInstagram,
};

const AnimatedIcon = ({ link, platform, delay }) => {
  const Icon = iconMap[platform];

  if (!Icon) {
    return null;
  }

  return (
    <motion.div
      className="flex flex-col justify-center items-end"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Icon className="text-xl md:text-3xl text-white" />
      </a>
    </motion.div>
  );
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    description: '', 
  });
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!formData.description) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        .then(
          (result) => {
            console.log('Form submitted successfully:', result.text);
            alert('Message sent successfully!');
          },
          (error) => {
            console.error('Error sending message:', error.text);
            alert('Failed to send message');
          }
        );
    }
  };
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
            CONTACT ZONE
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
            <BiLogoTelegram  className='mr-6 text-5xl md:text-xl'/>
            <p className='text-start'>
            I'm always open to exciting opportunities, collaborations, or just a chat about technology. Feel free to reach out, and I'll get back to you as soon as possible. Let's connect and create something amazing together!
            </p>
          </motion.div>
          <motion.div 
            className="flex justify-center items-start mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay:4 }}
          >
            <BiLogoTelegram  className='mr-6 text-5xl md:text-xl'/>
            <p className='text-start'>
              Have any questions or want to collaborate? Feel free to drop me an email <span className='text-myYellow'>shadowsara21@gmail.com</span>, and I'll get back to you as soon as possible. I'm always open to new opportunities!
            </p>
          </motion.div>
          <motion.div 
            className="flex justify-center items-start mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay:6 }}
          >
            <BiLogoTelegram  className='mr-6 text-xl'/>
            <p className='text-start'>
              Also you can connect me throught the social Media below 👾 Happy Hacking!
            </p>
          </motion.div>
        </div>
        <motion.div 
            className="grid grid-cols-8 gap-5 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay:7 }}
          >
            <AnimatedIcon link="https://github.com/your-profile" platform="github" delay={0.1} />
            <AnimatedIcon link="https://stackoverflow.com/users/your-profile" platform="stackoverflow" delay={0.2} />
            <AnimatedIcon link="https://www.linkedin.com/in/your-profile" platform="linkedin" delay={0.3} />
            <AnimatedIcon link="https://discord.com/users/your-profile" platform="discord" delay={0.4} />
            <AnimatedIcon link="https://twitter.com/your-profile" platform="twitter" delay={0.5} />
            <AnimatedIcon link="https://mail.google.com/mail/u/0/" platform="gmail" delay={0.6} />
            <AnimatedIcon link="https://www.facebook.com/your-profile" platform="facebook" delay={0.7} />
            <AnimatedIcon link="https://www.instagram.com/your-profile" platform="instagram" delay={0.8} />
          </motion.div>
        <div className=''>
          
        </div>
        <motion.div 
            className="flex flex-col items-center justify-center w-10/12 mt-4 mb-28"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeInOut', delay:8 }}
          >
            <form onSubmit={handleSubmit}>
              <InputContainer
                label="Name"
                value={formData.name}
                onChange={(value) => handleChange('name', value)}
                placeholder="Enter your name"
                error={errors.email}
                width="50%"
                height="auto"
              />
              
              <InputContainer
                label="Email"
                type="email"
                value={formData.email}
                onChange={(value) => handleChange('email', value)}
                error={errors.email}
                placeholder="Enter your email"
                width="100%"
                height="auto"
              />
              
              <InputContainer
                label="Description"
                value={formData.description}
                onChange={(value) => handleChange('description', value)}
                error={errors.description} 
                placeholder="Enter a description"
                width="100%"
                height="auto"
              />

            <button type="submit" className="mt-8  border-2 px-8 py-3 rounded-lg hover:bg-white hover:text-black hover:animate-pulse">Submit</button>
            </form>
            <p className='text-xl text-center font-bold mt-5'>MEET ME IN THE METAVERSE</p>
          </motion.div>
      </div>
    </div>
  )
}

export default Contact