"use client"
import React, { useState } from 'react';
import s from './TopCard.module.css';

const TopCard = ({ value, img, name }) => {

   const [userPhoto, setUserPhoto] = useState(null);

   return (
      <div className={s.container}>
          <div className={s.userAvatar}>
               <img src={userPhoto || img} alt="" />
            </div>
            <div className={s.text}>{name}</div>
            <div className={s.textCount}>{value.toLocaleString()}</div>
      </div>
   )
}

export default TopCard;
