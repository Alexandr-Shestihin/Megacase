"use client"
import React, { useState } from 'react';
import s from './FlipCard.module.css';

const FlipCard = ({ frontContent, backContent, width = '160px', height = '150px', className = '', style }) => {
   const [isFlipped, setIsFlipped] = useState(false);

   const handleMouseEnter = () => {
      setIsFlipped(true);
   };

   const handleMouseLeave = () => {
      setIsFlipped(false);
   };

   return (
      <div
      /* style={{ border: '1px solid red' }} */
         className={`${s.flipCard} ${className}`}
         style={{ width: width, height: height, ...style }}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         <div className={`${s.flipCardInner} ${isFlipped ? s.flipped : ''}`}
         style={{ width: width, height: height}}>
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
