import React from 'react';
import { motion } from 'framer-motion';
import TechCard from './TechCard';
import { Card } from './cardData';

interface CardSectionProps {
  title: string;
  cards: Card[];
}

export const CardSection: React.FC<CardSectionProps> = ({ title, cards }) => {
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

  return (
    <>
      <div className="my-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "50px" }}
          variants={fadeUpVariants}
          custom={0}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent w-1/4"></div>
          <h1 className="text-4xl font-bold text-center text-white">{title}</h1>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent w-1/4"></div>
        </motion.div>
      </div>
      
      <div className="flex flex-wrap gap-1 justify-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "50px" }}
            custom={index}
          >
            <TechCard card={card} index={index} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default CardSection;