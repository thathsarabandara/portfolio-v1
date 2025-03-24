import React from 'react'
import { IoCodeSlash, IoContract, IoHomeOutline } from 'react-icons/io5';
import { TbTargetArrow } from 'react-icons/tb';
import NavBtn from '../NavBtn/NavBtn';
import { PiGraduationCap, PiStudent } from 'react-icons/pi';
import { FaCertificate, FaPhone } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

function NavBar() {
    const navItems = [
        { name: 'Home', link: 'home', icon: IoHomeOutline },
        { name: 'Education', link: 'education', icon: PiGraduationCap },
        { name: 'AboutMe', link: 'aboutme', icon: PiStudent },
        { name: 'Licenses', link: 'licenses', icon: FaCertificate },
        { name: 'Skills', link: 'skills', icon: IoCodeSlash },
        { name: 'Projects', link: 'projects', icon: MdWork },  
        { name: 'Services', link: 'services', icon: TbTargetArrow },
        { name: 'Contact', link: 'contact', icon: FaPhone }
      ];

  return (
    <div>
        <div className='flex flex-col justify-center items-start z-20'>
        {navItems.map(item => (
          <NavBtn 
            key={item.name}
            link={item.link}
            name={item.name}
            icon={item.icon}
          />
        ))}
        </div>
    </div>
  )
}

export default NavBar