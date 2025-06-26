'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ElegantShapeProps {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}

function ElegantShape({
  className = "",
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: ElegantShapeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ 
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]`}
        />
      </motion.div>
    </motion.div>
  );
}

interface FloatingParticleProps {
  delay?: number;
  initialPosition?: number;
}

function FloatingParticle({ delay = 0, initialPosition = 0 }: FloatingParticleProps) {
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0, rotate: 0 }}
      animate={{ 
        y: "-100px", 
        opacity: [0, 1, 1, 0],
        rotate: 360 
      }}
      transition={{
        duration: 10,
        delay,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: Math.random() * 5,
      }}
      className="absolute w-1 h-1 bg-gray-500/20 rounded-full"
      style={{ left: `${initialPosition}%` }}
    />
  );
}

interface GhostTextProps {
  text: string;
  delay?: number;
  verticalPosition?: number;
  repeatDelay?: number;
}

function GhostText({ text, delay = 0, verticalPosition = 50, repeatDelay = 5 }: GhostTextProps) {
  return (
    <motion.div
      initial={{ x: "-100px", opacity: 0 }}
      animate={{ 
        x: "100vw", 
        opacity: [0, 1, 1, 0] 
      }}
      transition={{
        duration: 15,
        delay,
        ease: "linear",
        repeat: Infinity,
        repeatDelay,
      }}
      className="fixed text-xs text-gray-700/30 pointer-events-none z-0 font-mono select-none"
      style={{ top: `${verticalPosition}%` }}
    >
      {text}
    </motion.div>
  );
}

const frontendSkills: string[] = [
  'next.js', 'react', 'css3', 'javascript', 'angular', 'html5', 'jquery', 'vue.js'
];

const backendSkills: string[] = [
  'c++', 'lua', 'mongodb', 'node.js', 'python', 'arduino', 'cassandra', 'mysql'
];

const devopsSkills: string[] = [
  'linux', 'git', 'bash'
];

// Pre-generate random values for ghost texts to prevent re-calculation on re-renders
const ghostTexts = [
  { text: 'undefined is not a function', position: 15, delay: 0, repeatDelay: 8 },
  { text: 'segmentation fault', position: 25, delay: 2, repeatDelay: 12 },
  { text: 'access denied', position: 35, delay: 4, repeatDelay: 6 },
  { text: 'connection timeout', position: 45, delay: 6, repeatDelay: 10 },
  { text: 'null pointer exception', position: 55, delay: 8, repeatDelay: 7 },
  { text: 'stack overflow', position: 65, delay: 10, repeatDelay: 9 },
  { text: 'memory leak detected', position: 75, delay: 12, repeatDelay: 11 }
];

// Pre-generate random positions for particles
const particlePositions = Array.from({ length: 20 }, () => Math.random() * 100);

interface SkillBoxProps {
  skill: string;
  index: number;
}

function SkillBox({ skill, index }: SkillBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.23, 0.86, 0.39, 0.96]
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="relative bg-gray-900/30 border border-gray-700/50 p-3 text-center cursor-default group overflow-hidden select-none"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100"
        initial={false}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10 text-xs text-gray-500 font-mono select-none">
        {skill}
      </div>
    </motion.div>
  );
}

interface MouseTrail {
  id: number;
  x: number;
  y: number;
}

export default function MysteriousPortfolio() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [trails, setTrails] = useState<MouseTrail[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const newTrail: MouseTrail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setTrails(prev => [...prev.slice(-10), newTrail]);
      
      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="h-screen w-full bg-gray-950 text-gray-300 font-mono overflow-hidden cursor-crosshair relative select-none">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02] z-0">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000),
              linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)
            `,
            backgroundSize: '2px 2px',
            backgroundPosition: '0 0, 1px 1px',
          }}
        />
      </div>

      {/* Elegant Shapes */}
      <ElegantShape 
        className="top-20 -left-32 z-0" 
        delay={0.5}
        width={300}
        height={80}
        rotate={-25}
        gradient="from-white/[0.04]"
      />
      <ElegantShape 
        className="top-60 -right-40 z-0" 
        delay={1.2}
        width={250}
        height={60}
        rotate={35}
        gradient="from-white/[0.06]"
      />
      <ElegantShape 
        className="bottom-40 left-10 z-0" 
        delay={2.0}
        width={200}
        height={50}
        rotate={-45}
        gradient="from-white/[0.05]"
      />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 20 }, (_, i) => (
          <FloatingParticle 
            key={i} 
            delay={i * 0.5} 
            initialPosition={particlePositions[i]}
          />
        ))}
      </div>

      {/* Ghost Texts */}
      {ghostTexts.map((ghost, i) => (
        <GhostText 
          key={i} 
          text={ghost.text} 
          delay={ghost.delay} 
          verticalPosition={ghost.position}
          repeatDelay={ghost.repeatDelay}
        />
      ))}

      {/* Mouse Trails */}
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          className="fixed w-0.5 h-0.5 bg-gray-600/20 rounded-full pointer-events-none z-0"
          style={{
            left: trail.x,
            top: trail.y,
          }}
        />
      ))}

      <div className="relative z-10 h-full flex flex-col justify-center px-6 py-8">
        {/* Header */}
        <motion.header 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-light text-gray-800 relative mb-4 select-none"
            animate={{ 
              x: [0, -2, 2, -1, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <span className="relative">
              biggesthreat
              <motion.span
                className="absolute top-0 left-0.5 text-red-500/10"
                animate={{ 
                  clipPath: [
                    "inset(20% 0 60% 0)",
                    "inset(40% 0 40% 0)",
                    "inset(20% 0 60% 0)"
                  ]
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                biggesthreat
              </motion.span>
              <motion.span
                className="absolute top-0 -left-0.5 text-cyan-500/10"
                animate={{ 
                  clipPath: [
                    "inset(60% 0 20% 0)",
                    "inset(70% 0 10% 0)",
                    "inset(60% 0 20% 0)"
                  ]
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                biggesthreat
              </motion.span>
            </span>
          </motion.h1>
          <motion.p 
            className="text-xs text-gray-600 tracking-[4px] uppercase opacity-70 select-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            void.exe
          </motion.p>
        </motion.header>

        <div className="flex-1 flex flex-col justify-center space-y-8">
          {/* Frontend Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className="text-lg text-gray-700 mb-6 text-center relative select-none">
              frontend.arsenal
              <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
              {frontendSkills.map((skill, index) => (
                <SkillBox key={skill} skill={skill} index={index} />
              ))}
            </div>
          </motion.section>

          {/* Backend Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <h2 className="text-lg text-gray-700 mb-6 text-center relative select-none">
              backend.protocols
              <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
            </h2>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
              {backendSkills.map((skill, index) => (
                <SkillBox key={skill} skill={skill} index={index} />
              ))}
            </div>
          </motion.section>

          {/* DevOps Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <h2 className="text-lg text-gray-700 mb-6 text-center relative select-none">
              devops.machinery
              <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
            </h2>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              {devopsSkills.map((skill, index) => (
                <SkillBox key={skill} skill={skill} index={index} />
              ))}
            </div>
          </motion.section>
        </div>

        {/* Terminal Status */}
        <motion.section 
          className="max-w-2xl mx-auto mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className="bg-gray-950/80 border border-gray-700 p-4 font-mono select-none">
            <div className="text-gray-500 text-xs mb-2">
              ~/threat/profile$ cat status.txt
            </div>
            <div className="text-gray-600 text-sm space-y-1">
              <div>&gt; entity.status: active</div>
              <div>&gt; threat.level: classified</div>
              <div>&gt; location: somewhere in the void</div>
              <div>&gt; mission: crafting digital nightmares</div>
              <div>
                &gt; <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block"
                >
                  _
                </motion.span>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}