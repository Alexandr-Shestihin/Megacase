"use client"
import React from 'react';
import s from './MyCaseBack.module.css';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import {
   Item
} from '../';

const timeIcon = '/assets/icons/time.svg';

const MyCaseBack = ({ number, time, chance, risk, min, max, price }) => {

   const { t } = useTranslation();

   return (
      <div className={s.container}>
         <div className="row">
            <div className={s.title}>№{number}</div>
            <div className={s.timeConteiner}>
               <Image src={timeIcon} alt="time" width={14} height={14} className="img" />
               <div className={s.time}>{time}</div>
            </div>
         </div>

         <div className={s.dataBlock}>
            <Item name={t("rowCase.myCase.statistics.chance")} value={chance} />
            <Item name={t("rowCase.myCase.statistics.risk")} value={risk} />
            <Item name={t("rowCase.myCase.statistics.min")} value={min} />
            <Item name={t("rowCase.myCase.statistics.max")} value={max} />
         </div>

         <div className="row">
            <div className={s.price}>{t("rowCase.myCase.statistics.price")}</div>
            <div className={s.price}>{price.toLocaleString()}$</div>
         </div>
      </div>
   )
}

export default MyCaseBack;