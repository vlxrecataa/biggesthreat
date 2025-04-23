import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Aurora from '@/components/ui/Aurora';
import AnimatedContent from '@/components/ui/AnimatedContent';

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.7 + i * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav className="relative w-full flex flex-col p-6 md:p-14 text-white z-10 overflow-hidden">
      <div className="top-0 left-0 w-full h-full z-0 absolute opacity-50">
        <AnimatedContent
          distance={80}
          direction="vertical"
          reverse={true}
          config={{ tension: 10, friction: 15 }}
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
        >
          <Aurora
            colorStops={["#a5b4fc", "#ffffff", "#fda4af"]}
            blend={1.0}
            amplitude={1.5}
            speed={1.0}
          />
        </AnimatedContent>
      </div>

      <div className="relative z-10 flex justify-between items-center w-full">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]"
        >
          <Image src="https://kokonutui.com/logo.svg" alt="Logo" width={20} height={20} />
          <span className="text-sm md:text-xl text-white/60 tracking-wide">Digital Studio</span>
        </motion.div>

        <motion.button 
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </motion.button>

        <div className="hidden md:flex gap-6 text-base text-white font-normal">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="relative overflow-visible">
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute -inset-1 bg-white/[0.03] border border-white/[0.08] rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <a 
                  href={link.href}
                  className="relative px-2 py-1 inline-block cursor-pointer transition-all duration-300 hover:text-white"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className="md:hidden mt-4 overflow-hidden"
        variants={mobileMenuVariants}
        initial="closed"
        animate={mobileMenuOpen ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col gap-4 py-2 bg-black/20 backdrop-blur-md rounded-lg border border-white/10">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2"
            >
              <a 
                href={link.href} 
                className="block w-full text-lg font-medium"
              >
                {link.name}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}