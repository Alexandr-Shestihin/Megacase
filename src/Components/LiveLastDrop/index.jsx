"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import s from './LiveLastDrop.module.css';
import { cardsDataLiveDrops } from '../../../public/data';
import { useTranslation } from 'react-i18next';

import {
   FlipCard,
   CardFrontContentLiveDrops,
   CardBackContentLiveDrops,
   TopCard
} from '../';

const userIcon = '/assets/icons/userIcon.svg';

const LiveLastDrop = (props) => {

   const { t } = useTranslation()

   const containerRef = useRef(null);
   const [translateX, setTranslateX] = useState(0);
   const animationIntervalRef = useRef(null);
   const [isPaused, setIsPaused] = useState(false); // Состояние для паузы
   const cardWidth = 160;  // Ширина карточки
   const animationSpeed = 5; // Скорость анимации (px/ms)
   const cardCount = cardsDataLiveDrops.length; // Количество карточек


   const calculateTotalWidth = useCallback(() => {
      if (containerRef.current) {
         const totalWidth = containerRef.current.scrollWidth;
         return totalWidth;
      }
      return 0;
   }, []);

    const startAnimation = useCallback(() => {
        if (isPaused) return; // Не запускаем, если на паузе

        const totalWidth = calculateTotalWidth();
        if (totalWidth === 0) return;
        animationIntervalRef.current = setInterval(() => {
            setTranslateX(prevTranslateX => {
                const newTranslateX = prevTranslateX + animationSpeed; // Увеличиваем translateX
                const fullWidth = cardWidth * cardCount; // Полная ширина всех карточек

                if (newTranslateX >= cardWidth) {
                    return -cardWidth;  // Сбрасываем translateX
                }

                return newTranslateX;
            });
        }, 16); //  Примерно 60 кадров в секунду (1000ms / 60 ≈ 16ms)
    }, [animationSpeed, cardWidth, calculateTotalWidth, isPaused, cardCount]);

   const pauseAnimation = useCallback(() => {
      clearInterval(animationIntervalRef.current);
      setIsPaused(true);
   }, []);

   const resumeAnimation = useCallback(() => {
      setIsPaused(false);
      startAnimation();
   }, [startAnimation]);

   useEffect(() => {
      const totalWidth = calculateTotalWidth();

      if (totalWidth > 0) {
         startAnimation();
      }

      return () => {
         clearInterval(animationIntervalRef.current);
      };
   }, [startAnimation, calculateTotalWidth]);

   return (
      <div className={s.container}>
         <TopCard value={3334} img={userIcon} name={t("menuBtn.indicator")} />
         <div className={`${s.cordRow}`} ref={containerRef} onMouseEnter={pauseAnimation} onMouseLeave={resumeAnimation}>
            {cardsDataLiveDrops.map(el => (
               <FlipCard
                  key={el.id}
                  frontContent={<CardFrontContentLiveDrops
                     dw={el.dw}
                     img={el.img}
                     userName={el.user.name}
                     userAvatar={el.user.avatar}
                  />}
                  backContent={<CardBackContentLiveDrops
                     dw={el.dw}
                     text={el.text}
                     price={el.price}
                     chance={el.chance}
                     userName={el.user.name}
                     userAvatar={el.user.avatar}
                  />}
                  className={`my-custom-class ${s.flipCard}`}
                  width={'160px'}
                  height={'150px'}
                  style={{ transform: `translateX(${translateX}px)` }}
               />
            ))}
         </div>
      </div>
   );
};

export default LiveLastDrop;