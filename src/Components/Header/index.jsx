"use client";

import React, { useState } from 'react';
import s from './Header.module.css';

import Image from 'next/image';

import {
   Button,
} from '../';
const mainLogo = '../../assets/img/logo/mainLogo.svg';
const totalScore = '../../assets/icons/totalScore.svg';
const addMoney = '../../assets/icons/addMoney.svg';
const userIcon = '../../assets/icons/userIcon.svg';
const logOut = '../../assets/icons/logOut.svg';
const user = '../../assets/icons/user.png';

import { useTranslation } from "react-i18next";

const Header = (props) => {

   const [userPhoto, setUserPhoto] = useState(null);

   const { t, i18n } = useTranslation(); // t - функция перевода, i18n - объект i18n

   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
   };

   const balance = 123455;
   const userName = 'Герасим Муму';

   return (
      <div className={s.container}>
         <div className={s.langContainer}>
            <button onClick={() => changeLanguage('en')} className='btn-1'>En</button>
            <button onClick={() => changeLanguage('ru')} className='btn-1'>Ру</button>
         </div>


         <div className={s.imgContainer}><Image src={mainLogo} alt="Logo" width={200} height={100} className="img"  /></div>
         <div className={s.contantContainer}>
            <div className={`${s.addMoney} btn-1`}>
               <Image src={addMoney} alt="add money" width={200} height={100} className="img"  />
               </div>
            <div className={`${s.balance} btn-1 btn-text`}>
               <Image src={totalScore} alt="total score" width={200} height={100} className="img"  />
               {balance.toLocaleString('ru-ru')}$
            </div>
            <div className={`${s.userInfo}  btn-1`}>
               <div className={s.userAvatar}>
                  <img src={userPhoto || userIcon} alt="" />
               </div>
               <div className={s.textContainer}>
                  <div className={s.info}>{t('header.info')}</div>
                  <div className={s.fullname}>{userName}</div>
               </div>
               <Image src={logOut} alt="log Out" width={200} height={100} className={s.logOut}  />
            </div>
         </div>
      </div>
   )
}

export default Header;