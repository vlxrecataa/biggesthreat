import React from 'react';
import { Card } from './cardData';

interface TechCardProps {
  card: Card;
  index: number;
}

export const TechCard: React.FC<TechCardProps> = ({ card, index }) => {
  return (
    <div 
      className="w-48 h-36 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-full h-full rounded-xl bg-gradient-to-br from-black/80 to-black/95 flex items-center justify-center relative flex-col text-white backdrop-blur">
      <div className="w-28 h-10 rounded-full absolute bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 opacity-30 shadow-lg blur-md origin-center top-[75%] left-1/2 transform -translate-x-1/2">
      </div>
        <div className="flex items-center justify-center mb-3">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white/30 shadow-[0px_0px_20px_0px_rgba(255,255,255,.6)]">
            <img 
              src={card.image} 
              alt={card.label} 
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
        <div className="font-medium text-white text-lg">
          {card.label}
        </div>
      </div>
    </div>
  );
};

export default TechCard;