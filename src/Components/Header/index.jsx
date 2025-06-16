"use client";

import React, { useState } from 'react';
import s from './Header.module.css';

import Image from 'next/image';

import {
   Button,
   RightMemuMobile
} from '../';
const mainLogo = '../../assets/img/logo/mainLogo.svg';
const totalScore = '../../assets/icons/totalScore.svg';
const addMoney = '../../assets/icons/addMoney.svg';
const languageActive = '../../assets/icons/languageActive.svg';
const languageUnactive = '../../assets/icons/languageUnactive.svg';
const userIcon = '../../assets/icons/userIcon.svg';
const logOut = '../../assets/icons/logOut.svg';
const usa = '../../assets/icons/languages/usa.svg';
const rs = '../../assets/icons/languages/rs.svg';
const user = '../../assets/icons/user.png';

import { useTranslation } from "react-i18next";

const Header = (props) => {

   const [activeLanguage, setActiveLanguage] = useState(false);
   const [userPhoto, setUserPhoto] = useState(null);
   const [menuIsOpen, setMenuIsOpen] = useState(false);

   const { t, i18n } = useTranslation(); // t - функция перевода, i18n - объект i18n

   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
   };

   const balance = 123455;
   const userName = 'Герасим Муму';

   return (
      <div className={s.container}>
         <RightMemuMobile active={menuIsOpen} setActive={setMenuIsOpen} />
         <div className={s.imgContainer}><Image src={mainLogo} alt="Logo" width={200} height={100} className="img" /></div>
         <div className={s.contantContainer}>

            <Button
               active={activeLanguage}
               onClick={() => setActiveLanguage(!activeLanguage)}
               className={`${s.btnMini}`}
               activeI={languageActive}
               inactiveI={languageUnactive}
            >
               <div className={`${s.langContainer} ${activeLanguage && s.active}`}>
                  <div onClick={() => changeLanguage('en')} className={`btn-1 ${s.lan}`}>
                     {t("language.english")}
                     <Image src={usa} alt="usa" width={20} height={20} className="img" />
                  </div>
                  <div onClick={() => changeLanguage('ru')} className={`btn-1 ${s.lan}`}>
                     {t("language.russian")}
                     <Image src={rs} alt="rs" width={20} height={20} className="img" />
                  </div>
               </div>
            </Button>

            <Button active={true} className={`${s.btnMini}`}>
               <Image src={addMoney} alt="add money" width={200} height={100} className="img" />
            </Button>

            <Button className={`${s.balance} btn-text`}>
               <Image src={totalScore} alt="total score" width={200} height={100} className="img" />
               {balance.toLocaleString('ru-ru')}$
            </Button>
            <Button className={`${s.userInfo} `} onClick={() => setMenuIsOpen(!menuIsOpen)}>
               <div className={s.userAvatar}>
                  <img src={userPhoto || userIcon} alt="" />
               </div>
               <div className={s.textContainer}>
                  <div className={s.info}>{t('header.info')}</div>
                  <div className={s.fullname}>{userName}</div>
               </div>
               <Image src={logOut} alt="log Out" width={200} height={100} className={s.logOut} />
            </Button>
         </div>
      </div>
   )
}

export default Header;