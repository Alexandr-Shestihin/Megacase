"use client"
import React, { useState } from 'react';
import s from './OnlineCard.module.css';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const userIcon = '/assets/icons/userIcon.svg';

const OnlineCard = ({ count }) => {

   const [userPhoto, setUserPhoto] = useState(null);

   const { t } = useTranslation()

   return (
      <div className={s.container}>
         <div className={s.userAvatar}>
            <img src={userPhoto || userIcon} alt="" />
         </div>
         <div className={s.text}>{t("menuBtn.indicator")}</div>
      </div>
   )
}

export default OnlineCard;
