"use client"
import React from 'react';
import s from './CardFrontContentLiveDrops.module.css';
import Image from 'next/image';
import { getDegreeWear } from '@/utils';

const arrow = '/assets/icons/arrow.svg';
const userIcon = '/assets/icons/userIcon.svg';
const caseOutline = '/assets/img/caseOutline.png';

const CardFrontContentLiveDrops = ({ dw, img, userName, userAvatar }) => {

   return (
      <div className={s.container}>
         <Image src={caseOutline} alt="Case" width={128} height={81} className={`img ${s.caseOutline}`} />
         <div className="row row_center">
            <Image src={userAvatar || userIcon} alt="logoMini" width={20} height={20} className={`img ${s.userAvatar}`} />
            <div className={s.name}>{userName}</div>
         </div>
         <Image src={img} alt="Case" width={100} height={29} className={`img ${s.automaticFirearm}`} />
         <div className="row">
            {getDegreeWear(dw, s.full)}
            <Image src={arrow} alt="arrow" width={18} height={12} className={`img ${s.arrow}`} />
         </div>
      </div>
   )
}

export default CardFrontContentLiveDrops;
