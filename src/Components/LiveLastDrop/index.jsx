"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react';
import s from './LiveLastDrop.module.css';
import { useTranslation } from 'react-i18next';
import { cardsDataLiveDrops } from '../../../public/data';

import {
   FlipCard,
   CardFrontContentLiveDrops,
   CardBackContentLiveDrops,
   OnlineCard
} from '../';

const LiveLastDrop = (props) => {

   const [cardsDataLiveDropsData, setCardsDataLiveDrops] = useState(() => cardsDataLiveDrops);

   const containerRef = useRef(null);
   const isPausedRef = useRef(false);
   const [cardWidth, setCardWidth] = useState(160); // Ширина карточки
   const [transitioning, setTransitioning] = useState(false); // Флаг анимации

   const shiftCards = useCallback(() => {
      if (isPausedRef.current || transitioning) return;

      setTransitioning(true);

      // После завершения анимации меняем порядок элементов
      setTimeout(() => {
         setTransitioning(false);
         setCardsDataLiveDrops((prev) => {
            const next = [...prev.slice(1), prev[0]];
            return next;
         });
      }, 500);
   }, [transitioning, isPausedRef]);

   useEffect(() => {
      const interval = setInterval(shiftCards, 1000);

      return () => clearInterval(interval);
   }, [shiftCards]);

   const pause = () => {
      isPausedRef.current = true;
   };

   const resume = () => {
      isPausedRef.current = false;
   };

   const { t } = useTranslation()

   return (
      <div className={`mt19`}>
         {/* <div className={`pageSubtitle ${s.title}`}>
            Live <span className={s.grey}>{t("liveLastDrop.title")}</span>
         </div> */}

         <div className={`cordRow ${s.cordRow} ${transitioning ? 'transitioning' : ''}`} onMouseEnter={pause} onMouseLeave={resume}>
            <OnlineCard />
            {cardsDataLiveDropsData.map(el => <FlipCard key={el.id}
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
            />)}
         </div>

      </div>
   )
}

export default LiveLastDrop;
