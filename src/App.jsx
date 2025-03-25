import './App.css';
import "@fontsource/chakra-petch"; 
import "@fontsource/chakra-petch/700.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './component/Navbar/Navbar/NavBar';
import { useRef, useState, useEffect } from 'react';
import { FaBiohazard, FaPause, FaPlay } from 'react-icons/fa';
import { VscUnmute } from 'react-icons/vsc';
import { IoVolumeMuteOutline } from 'react-icons/io5';
import ReactPlayer from 'react-player';
import Equalizer from './component/Equalizer/Equalizer';


// Importing different audio files for different pages
import music1 from './assets/audio/Loading.mp3';
import music2 from './assets/audio/Education.mp3';
import music3 from './assets/audio/Skills.mp3';
import music4 from './assets/audio/AboutMe.mp3';
import music5 from './assets/audio/Licenses.mp3';
import music6 from './assets/audio/Projects.mp3';
import music7 from './assets/audio/Services.mp3';
import music8 from './assets/audio/Contact.mp3';
import music9 from './assets/audio/Home.mp3';

import Home from './pages/Home/Home';
import Education from './pages/Education/Education';
import Skills from './pages/Skills/Skills';
import AboutMe from './pages/AboutMe/AboutMe';
import Licenses from './pages/Licenses/Licenses';
import Projects from './pages/Projects/Projects';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import LoadingPage from './pages/LoadingPage/LoadingPage';

function AppContent() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5); 
  const [isMuted, setIsMuted] = useState(false);
  const [musicUrl, setMusicUrl] = useState(music1);
  const [musicName, setMusicName] = useState('Royal Entry - Cyberpunk Music');
  const playerRef = useRef(null);
  const location = useLocation();

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    setIsMuted(false); 
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    console.log("Current Path:", location.pathname);
    switch (location.pathname) {
      case '/':
        setMusicUrl(music1);
        setMusicName('Royal Entry - Cyberpunk Music');
        break;
      case '/home':
        setMusicUrl(music9);
        setMusicName('Hustle In the Game - Cyberpunk Music');
        break;
      case '/education':
        setMusicUrl(music2);
        setMusicName('Space Journey - Ambient Music');
        break;
      case '/skills':
        setMusicUrl(music3);
        setMusicName('Tech Vibes - Futuristic Music');
        break;
      case '/aboutme':
        setMusicUrl(music4);
        setMusicName('Royal Entry - Cyberpunk Music');
        break;
      case '/licenses':
        setMusicUrl(music5);
        setMusicName('Hustle In the Game - Cyberpunk Music');
        break;
      case '/projects':
        setMusicUrl(music6);
        setMusicName('Space Journey - Ambient Music');
        break;
      case '/services':
        setMusicUrl(music7);
        setMusicName('Tech Vibes - Futuristic Music');
        break;
      case '/contact':
        setMusicUrl(music8);
        setMusicName('Tech Vibes - Futuristic Music');
        break;
      default:
        setMusicUrl(music1);
        setMusicName('Royal Entry - Cyberpunk Music');
    }
  }, [location]);

  const HazardSection = () => (
    <div className='z-10 fixed left-0 top-0 ml-4 mt-1 flex flex-col justify-center items-start font-bold text-xs sm:text-sm'>
      <p className='animate-pulse'>ON board time : 10:10</p>
      <p className='animate-pulse'>Hazard Alert ! Please beware of it</p>
    </div>
  );

  const MusicSection = () => (
    <div className='z-10 fixed left-0 lg:left-1/3 top-0 mt-12 sm:mt-16 md:mt-16 lg:mt-8 ml-20 sm:ml-56 md:ml-44 lg:ml-16 xl:ml-28 flex flex-col md:flex-row justify-center items-center animate-pulse'>
      <p className='font-bold text-xs sm:text-sm'>{musicName}</p>
      <div className='flex justify-center items-center'>
        <button onClick={togglePlay} className="mx-3">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={toggleMute} className="text-xl">
          {isMuted ? <IoVolumeMuteOutline /> : <VscUnmute />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="mx-2"
        />
      </div>
    </div>
  );

  const ControlSection = () => (
    <div className='z-10 fixed right-0 top-0 mt-1 mr-4 flex flex-col justify-center items-start font-bold text-xs sm:text-sm  animate-pulse'>
      <p>station power : 80%</p>
      <p>oxygen : 40%</p>
      <p>environment : critical</p>
    </div>
  );

  const ShipDetails = () => (
    <div className='z-10 fixed bottom-0 left-0 mb-4 ml-4 flex flex-col justify-center items-start text-xs sm:text-sm'>
      <p className='animate-pulse'>year.2047</p>
      <p className='animate-pulse'>somewhere in space : cyberstation Nova 9.0.1</p>
    </div>
  );

  const DateDetails = () => (
    <div className='z-10 fixed bottom-0 right-0 mb-2 mr-2 flex justify-center items-center animate-pulse'>
      <div className='flex flex-col justify-center items-end mr-2'>
        <div className='flex justify-center items-center'>
          <p className='mr-1 text-xs xs:text-xs sm:text-sm'>19</p>
          <div className='w-16 h-1 xs:w-20 xs:h-2 sm:w-24 sm:h-2 bg-white'></div>
        </div>
        <div className='flex justify-center items-center'>
          <p className='mr-1 text-xs xs:text-xs sm:text-sm'>09</p>
          <div className='w-12 h-1 xs:w-16 xs:h-2 sm:w-20 sm:h-2 bg-white'></div>
        </div>
        <div className='flex justify-center items-center'>
          <p className='mr-1 text-xs xs:text-xs sm:text-sm'>2025</p>
          <div className='w-8 h-1 xs:w-12 xs:h-2 sm:w-16 sm:h-2 bg-white'></div>
        </div>
      </div>
      <div className='bg-white text-black'>
        <FaBiohazard className='text-4xl xs:text-4xl sm:text-5xl animate-spin-slow' />
      </div>
    </div>
  );

  const Equalizers = () => (
    <div className="z-10 fixed left-0 lg:left-1/3 mb-16 sm:mb-4 ml-10 sm:ml-44 md:ml-64 lg:ml-24 bottom-0 w-10/12 animate-pulse">
      <Equalizer isPlaying={isPlaying} />
    </div>
  );

  return (
    <div className="relative w-full h-screen font-chakra">
      <div className="z-20 fixed left-0 top-1/2 transform -translate-y-1/2">
        <NavBar />
      </div>
      <HazardSection />
      <MusicSection />
      <ControlSection />
      <ShipDetails />
      <DateDetails />
      <Equalizers />
      <div className="z-0 fixed bg-gray-950 top-0 left-0 w-full " style={{ width: '100vw', paddingLeft: '0', height: '100vh', overflow: 'auto' }}>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <ReactPlayer
        ref={playerRef}
        url={musicUrl}
        playing={isPlaying}
        volume={isMuted ? 0 : volume}
        controls={false}
        width="0"
        height="0"
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
