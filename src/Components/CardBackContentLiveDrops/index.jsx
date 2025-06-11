"use client"
import React from 'react';
import s from './CardBackContentLiveDrops.module.css';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { getDegreeWear } from '@/utils';

const userIcon = '/assets/icons/userIcon.svg';
const arrow = '/assets/icons/arrowLeft.svg';
const caseOutline = '/assets/img/caseOutline.png';

const CardBackContentLiveDrops = ({ dw, text, price, chance, userName, userAvatar }) => {

   const { t } = useTranslation();

   return (
      <div className={s.container}>
         <Image src={caseOutline} alt="Case" width={128} height={81} className={`img ${s.caseOutline}`} />
         <div className={`row_center ${s.userContainer}`}>
            <Image src={userAvatar || userIcon} alt="user avatar" width={20} height={20} className={`img ${s.userAvatar}`} />
            <div className={s.name}>{userName}</div>
         </div>
         <div className={s.text} dangerouslySetInnerHTML={{ __html: text }} />
         <div className="row">
            <div className={s.key}>{t("liveLastDrop.cardLiveDrops.price")}</div>
            <div className={s.value}>{price}</div>
         </div>
         <div className="row">
            <div className={s.key}>{t("liveLastDrop.cardLiveDrops.chance")}</div>
            <div className={s.value}>{chance}</div>
         </div>
         {getDegreeWear(dw, <Image src={arrow} alt="arrow" width={18} height={12} className={`img ${s.arrow}`} />)}
      </div>
   )
}

export default CardBackContentLiveDrops;
