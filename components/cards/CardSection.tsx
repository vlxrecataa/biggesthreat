import React, { useRef, useEffect } from 'react';
import TechCard from './TechCard';
import { Card } from './cardData';

interface CardSectionProps {
  title: string;
  cards: Card[];
}

export const CardSection: React.FC<CardSectionProps> = ({ title, cards }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.tech-card');
          
          cards.forEach((card, index) => {
            const row = Math.floor(index / 7);
            const col = index % 3;
            const staggerDelay = (row * 100) + (col * 80);
            
            setTimeout(() => {
              card.classList.remove('card-hidden');
              card.classList.add('card-visible');
            }, staggerDelay);
          });
        }
      });
    }, observerOptions);

    if (sectionRef.current) cardObserver.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) cardObserver.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <div className="my-16">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent w-1/4"></div>
          <h1 className="text-4xl font-bold text-center text-white">{title}</h1>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent w-1/4"></div>
        </div>
      </div>
      
      <div ref={sectionRef} className="flex flex-wrap gap-6 justify-center ">
        {cards.map((card, index) => (
          <TechCard key={index} card={card} index={index} />
        ))}
      </div>
    </>
  );
};

export default CardSection;