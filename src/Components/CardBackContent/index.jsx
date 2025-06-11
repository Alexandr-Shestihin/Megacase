"use client"
import React from 'react';
import s from './CardBackContent.module.css';
import { getDegreeWear } from '@/utils';
import { useTranslation } from 'react-i18next';

const CardBackContent = ({ dw, text, price, chance }) => {

   const { t } = useTranslation();

   return (
      <div className={s.container}>
         <div className={s.text} dangerouslySetInnerHTML={{ __html: text }} />
         <div className="row">
            <div className={s.key}>{t("liveLastDrop.cardLiveDrops.price")}</div>
            <div className={s.value}>{price}</div>
         </div>
         <div className="row">
            <div className={s.key}>{t("liveLastDrop.cardLiveDrops.chance")}</div>
            <div className={s.value}>{chance}</div>
         </div>
         <div className="row">
            {getDegreeWear(dw, true)}
         </div>
      </div>
   )
}

export default CardBackContent;
