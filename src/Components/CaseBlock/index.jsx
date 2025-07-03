"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import s from './CaseBlock.module.css';
import { casesData } from '@/../public/data';
import { useTranslation } from 'react-i18next';

import {
   FlipCard,
   TopCard,
   MyCaseFront,
   MyCaseBack
} from '..';


const caseIcon = '/assets/icons/inactive.svg';

const CaseBlock = (props) => {

   const { t } = useTranslation();

   const scrollContainerRef = useRef(null);

   const handleWheel = useCallback((event) => {
      event.preventDefault(); // Предотвращаем стандартное поведение прокрутки страницы

      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
         scrollContainer.scrollLeft += event.deltaY; // Прокручиваем горизонтально на deltaY пикселей
      }
   }, []);

   useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
         scrollContainer.addEventListener('wheel', handleWheel, { passive: false }); // Добавляем обработчик события wheel
      }

      return () => {
         if (scrollContainer) {
            scrollContainer.removeEventListener('wheel', handleWheel); // Удаляем обработчик события при размонтировании компонента
         }
      };
   }, [handleWheel]);

   return (
      <div className={s.container}>
         <TopCard value={12333} img={caseIcon} name={t("rowCase.title")} />
         <div ref={scrollContainerRef} className={`${s.cordRow}`}>
            {casesData.map((el, i) => (
               <FlipCard
                  key={el.id}
                  frontContent={<MyCaseFront
                     title={el.title}
                     time={el.time}
                     price={el.price}
                     img={el.img}
                     delay={i}
                  />}
                  backContent={<MyCaseBack
                     number={el.id}
                     time={el.time}
                     chance={el.chance}
                     risk={el.risk}
                     min={el.min}
                     max={el.max}
                     price={el.price}
                  />}
                  className={`my-custom-class ${s.flipCard}`}
                  width={'160px'}
                  height={'150px'}
               /* style={{ transform: `translateX(${translateX}px)` }} */
               />
            ))}
         </div>
      </div>
   );
};

export default CaseBlock;