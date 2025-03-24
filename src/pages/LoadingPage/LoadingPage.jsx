import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react';
import Car from '../../component/3d_component/Car';
import { Environment, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const totalTime = 35000;
    const intervalTime = 50;
    const increment = (100 / totalTime) * intervalTime;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return Math.min(prev + increment, 100);
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, intervalTime);
    const timer = setTimeout(() => {
      navigate('/home'); 
    }, totalTime);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <motion.div
      className="absolute top-2/3 left-1/2 h-6 bg-cyberYellow"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    />
  );
};

function LoadingPage() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      <div className="absolute w-full h-full">
        <Canvas>
          <PerspectiveCamera makeDefault position={[-3, 2, 2]} fov={90} />
          <Suspense fallback={
            <Html>
              <p className="text-white text-xl animate-pulse">Loading Model...</p>
            </Html>
          }>
            <ambientLight intensity={0.6} color="#FFFF00" />
            <directionalLight intensity={1} color="#FFFF00" position={[-5, 5, 150]} castShadow />
            <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 4} />
            <Car />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      </div>
      <div className="absolute top-2/3  left-1/2 transform -translate-x-1/2 text-white z-10 font-chakra text-center px-4 md:px-0">
        <p className="text-4xl md:text-5xl font-bold text-myYellow mb-6 animate-pulse">Loading.......</p>
        <motion.div className="flex flex-col text-sm font-bold text-cyberYellow mt-5">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 10 }}>
            Initializing Storm Profile, Connecting to Cyber Station...
          </motion.span>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 20 }}>
            <span className="text-myYellow">Status:</span> Syncing neural interfaces...
          </motion.span>
          <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 30 }}>
            All systems online. Cyberstation operational.
          </motion.span>
        </motion.div>
        <LoadingBar />
      </div>
    </div>
  );
}

export default LoadingPage;