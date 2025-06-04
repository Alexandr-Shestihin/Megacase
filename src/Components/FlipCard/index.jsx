"use client"
import React, { useState } from 'react';
import s from './FlipCard.module.css';

const FlipCard = ({ frontContent, backContent, width = '120px', height = '120px', className = '' }) => {
   const [isFlipped, setIsFlipped] = useState(false);

   const handleMouseEnter = () => {
      setIsFlipped(true);
   };

   const handleMouseLeave = () => {
      setIsFlipped(false);
   };

   return (
      <div
         className={`${s.flipCard} ${className}`}
         style={{ width: width, height: height }}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         <div className={`${s.flipCardInner} ${isFlipped ? s.flipped : ''}`}>
            <div className={s.flipCardFront}>
               {frontContent}
            </div>
            <div className={s.flipCardBack}>
               {backContent}
            </div>
         </div>
      </div>
   );
}

export default FlipCard;
