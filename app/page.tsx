"use client";

import { useState } from 'react';
import { motion } from "framer-motion";

import Aurora from '@/components/ui/Aurora';
import Particles from '@/components/ui/Particles';
import TrueFocus from '@/components/ui/TrueFocus';

export default function Component() {
  function handleNothing() {}
  return (
    <div className="min-h-screen w-screen bg-black relative overflow-hidden">
      <Aurora
        colorStops={["#42f5a4", "#6ec0f0", "#51f542"]}
        blend={1.0}
        amplitude={1.5}
        speed={1.0}
      />
      <div className="absolute top-0 left-0 w-full h-full z-20">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1000}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={50}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="text-white absolute inset-0 flex items-center justify-center z-10">
        <TrueFocus 
          sentence="Under Development"
          manualMode={false}
          blurAmount={5}
          borderColor="cyan"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      </div>
    </div>
  );
}