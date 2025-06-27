"use client"
import React from 'react';
import s from './CardFrontContentLiveDrops.module.css';
import Image from 'next/image';
import { getDegreeWear, getDegreeWearMin } from '@/utils';

const userIcon = '/assets/icons/userIcon.svg';

const CardFrontContentLiveDrops = ({ dw, img, userName, userAvatar }) => {

   return (
      <div className={s.container}>
         <div className={`row_center ${s.userContainer}`}>
            <Image src={userAvatar || userIcon} alt="logoMini" width={20} height={20} className={`img ${s.userAvatar}`} />
            <div className={s.name}>{userName}</div>
         </div>
         <Image src={img} alt="Case" width={129} height={48} className={`img ${s.arms}`} />
         <span className={s.desktop}>
            {getDegreeWear(dw)}
         </span>
         <span className={s.mobile}>
            {getDegreeWearMin(dw)}
         </span>
      </div>
   )
}

export default CardFrontContentLiveDrops;
