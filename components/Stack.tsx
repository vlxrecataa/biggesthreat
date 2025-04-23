import React, { useEffect } from 'react';
import CardSection from './cards/CardSection';
import { frontendCards, backendCards, devopsCards } from './cards/cardData';
import setupAnimationStyles from './cards/animationStyles';

export default function Stack() {
  useEffect(() => {
    const options = {
      behavior: 'smooth',
      block: 'start',
    };
    
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const styleElement = setupAnimationStyles();
    
    return () => {
      document.head.removeChild(styleElement);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="px-4">
      <div className="mb-12 text-center">
        <h2 className="text-xl text-gray-500 uppercase tracking-wider mb-2">My Tech Stack</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 mx-auto mt-6"></div>
      </div>

      <CardSection title="Frontend Technologies" cards={frontendCards} />
      <CardSection title="Backend Technologies" cards={backendCards} />
      <CardSection title="DevOps Tools" cards={devopsCards} />
      
      <div className="mt-16 mb-8">
        <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent w-3/4 mx-auto"></div>
      </div>
    </div>
  );
}