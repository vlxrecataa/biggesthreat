"use client";

import { useState } from 'react';
import { motion } from "framer-motion";

import Aurora from '@/components/ui/Aurora';
import Squares from '@/components/ui/Squares';
import AnimatedContent from '@/components/ui/AnimatedContent';
import Particles from '@/components/ui/Particles';

import Navbar from '@/components/NavBar';
import Stack from '@/components/Stack';
import Contact from '@/components/Contact';

export default function Component() {
  function handleNothing() {}
  return (
    <div className="min-h-screen w-screen bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none select-none">
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
      <Navbar />
      <div className="h-screen w-full flex items-center relative">
        <AnimatedContent
          distance={100}
          direction="horizontal"
          reverse={false}
          config={{ tension: 50, friction: 5 }}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.2}
        >
          <div className="absolute z-20 bottom-20 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20">
            <p className="w-max bg-gradient-to-br from-[#6ec0f0] to-[#23f172] text-transparent bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-9xl font-bold">
              Crafting Digital<br></br>Masterpieces.
            </p>
          </div>
        </AnimatedContent>
      </div>


      <Stack />

      <Contact />
    </div>
  );
}