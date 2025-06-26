"use client"
import React, { useEffect, useState } from 'react';
import s from './MyCaseFront.module.css';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const timeIcon = '/assets/icons/time.svg';
const caseMini = '/assets/img/caseMini.png';

const MyCaseFront = ({ title, time, price, img, delay }) => {

   const { t } = useTranslation()

   //Анимация появления картинок кейсов
   const [isImageLoaded, setIsImageLoaded] = useState(false);

   useEffect(() => {
      const timout = setTimeout(() => {
         setIsImageLoaded(true);
      }, delay * 155)
      return () => clearTimeout(timout)
   }, [])

   return (
      <div className={s.container}>
         <div className="row">
            <div className={s.title}>{title}</div>
            <div className={s.timeConteiner}>
               <Image src={timeIcon} alt="time" width={14} height={14} className="img" />
               <div className={s.time}>{time}</div>
            </div>
         </div>
         <div className={s.imageContainer}>
            <Image src={img || caseMini} alt="case" layout="fill" objectFit="contain" className={`img ${s.caseImg} ${isImageLoaded ? `${s.loaded}` : ''}`}
               />
         </div>
         <div className="row">
            <div className={s.price}>{t("rowCase.myCase.statistics.price")}</div>
            <div className={s.price}>{price.toLocaleString()}$</div>
         </div>
      </div>
   )
}

export default MyCaseFront;
