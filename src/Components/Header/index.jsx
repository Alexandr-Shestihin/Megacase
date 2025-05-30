
import React from 'react';
import s from './Header.module.css';

import {
   Button,
} from '../';

import mainLogo from '../../assets/img/logo/mainLogo.svg';
import totalScore from '../../assets/icons/totalScore.svg';
import addMoney from '../../assets/icons/addMoney.svg';
import userIcon from '../../assets/icons/userIcon.svg';
import logOut from '../../assets/icons/logOut.svg';
import user from '../../assets/icons/user.png';

import { useTranslation } from 'react-i18next';

const Header = (props) => {

   const { t, i18n } = useTranslation(); // t - функция перевода, i18n - объект i18n

   const changeLanguage = (lng) => {
      console.log('Header.jsx: changeLanguage called with:', lng);  // <<-- ADD THIS LINE
      i18n.changeLanguage(lng);
      console.log('Header.jsx: i18n.language after changeLanguage:', i18n.language);
   };

   const balance = 123455;
   const userPhoto = null;
   const userName = 'Герасим Муму';

   return (
      <div className={s.container}>
         <div className={s.langContainer}>
            <button onClick={() => changeLanguage('en')} className='btn-1'>En</button>
            <button onClick={() => changeLanguage('ru')} className='btn-1'>Ру</button>
         </div>


         <div className={s.imgContainer}><img src={mainLogo} alt="" /></div>
         <div className={s.contantContainer}>
            <div className={`${s.addMoney} btn-1`}><img src={addMoney} alt="" /></div>
            <div className={`${s.balance} btn-1 btn-text`}>
               <img src={totalScore} alt="" />
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
               <img src={logOut} alt="" className={s.logOut} />
            </div>
         </div>
      </div>
   )
}

export default Header;
