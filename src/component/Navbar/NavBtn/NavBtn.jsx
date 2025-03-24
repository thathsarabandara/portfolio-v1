import React, { useState } from 'react'
import audiofile from '../../../assets/audio/hover.mp3'

function NavBtn({link, name, icon:Icon}) {
    const [audio] = useState(new Audio(audiofile));

    audio.volume = 0.2;
    const audioHandler= ()=>{
        audio.play();
    }
  return (
    <a href={link}>
        <div className='flex justify-center items-center relative transform -translate-x-12 sm:-translate-x-1/2 transition-transform duration-500 hover:translate-x-0' onMouseEnter={audioHandler}>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[0px] border-r-transparent border-b-[4px] border-b-myYellow"></div>
                    <div className='w-3 h-1 bg-myYellow'></div>
                    <div className="w-0 h-0 border-l-[0px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-myYellow"></div>
                </div>
                <div className='w-12 h-3 bg-myYellow'></div>
                <hr className="h-0.5 w-full bg-black m-0 p-0 border-none" />
                <div className='flex justify-center items-center w-12 h-16  bg-myYellow'>
                    <p className='text-black rotate-90 font-chakra font-bold'>{name}</p>
                </div>
                <hr className="h-0.5 w-full bg-black m-0 p-0 border-none" />
                <div className='w-12 h-3 bg-myYellow'></div>
                <div className='flex justify-between items-center w-full'>
                    <div className='flex justify-center items-center'>
                        <div className='w-3 h-1 bg-myYellow'></div>
                        <div className="w-0 h-0 border-l-[0px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-myYellow"></div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[0px] border-r-transparent border-t-[4px] border-t-myYellow"></div>
                        <div className='w-3 h-1 bg-myYellow'></div>
                    </div>
                </div>
            </div>
            <div className='border border-myYellow bg-transparent'>
                <Icon className='text-2xl sm:text-4xl m-2 p-1 sm:p-2'/>
            </div>
        </div>
    </a>
  )
}

export default NavBtn