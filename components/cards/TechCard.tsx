import React from 'react';
import { Card } from './cardData';

interface TechCardProps {
  card: Card;
  index: number;
}

export const TechCard: React.FC<TechCardProps> = ({ card, index }) => {
  return (
    <div 
      className="tech-card card-hidden w-[200px] h-[150px] rounded-[10px] p-[1px] bg-gradient-to-br from-white to-[#0c0d0d] relative"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-[5px] aspect-square absolute bg-white shadow-[0_0_10px_#ffffff] rounded-full z-10 right-[10%] top-[10%] animate-[moveDot_6s_linear_infinite]">
      </div>
      <div className="z-[1] w-full h-full rounded-[9px] border border-[#202222] bg-gradient-to-br from-[#444444] to-[#0c0d0d] flex items-center justify-center relative flex-col text-white backdrop-blur-sm">
        <div className="w-[120px] h-[45px] rounded-[100px] absolute bg-[#c7c7c7] opacity-40 shadow-[0_0_50px_#fff] blur-[10px] origin-[10%] top-0 left-0 rotate-[40deg]">
        </div>
        <div className="flex items-center justify-center mb-2">
          <img 
            src={card.image} 
            alt={card.label} 
            className="w-12 h-12 object-contain"
          />
        </div>
        <div className="font-medium text-white">
          {card.label}
        </div>
        <div className="w-full h-[1px] absolute bg-gradient-to-r from-[#888888] via-transparent to-[#1d1f1f] top-[10%]">
        </div>
        <div className="w-[1px] h-full absolute bg-gradient-to-b from-[#747474] via-transparent to-[#222424] left-[10%]">
        </div>
        <div className="w-full h-[1px] absolute bg-[#2c2c2c] bottom-[10%]">
        </div>
        <div className="w-[1px] h-full absolute bg-[#2c2c2c] right-[10%]">
        </div>
      </div>
    </div>
  );
};

export default TechCard;