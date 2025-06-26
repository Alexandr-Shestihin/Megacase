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
import { useMenuSelection } from '@/utils';

const linkActive = '/assets/icons/linkActive.svg';
const linkUnactive = '/assets/icons/linkUnactive.svg';
const deposit = '/assets/icons/addMoney.svg';
const depositUnactive = '/assets/icons/addMoneyUnactive.svg';
const historyConclusionsActive = '/assets/icons/historyConclusionsActive.svg';
const historyConclusionsUnactive = '/assets/icons/historyConclusionsUnactive.svg';
const historyGamesActive = '/assets/icons/historyGamesActive.svg';
const historyGamesUnactive = '/assets/icons/historyGamesUnactive.svg';
const profitsActive = '/assets/icons/profitsActive.svg';
const profitsUnactive = '/assets/icons/profitsUnactive.svg';
const bonusesActive = '/assets/icons/bonusesActive.svg';
const bonusesUnactive = '/assets/icons/bonusesUnactive.svg';
const accountStatisticsActive = '/assets/icons/accountStatisticsActive.svg';
const accountStatisticsUnactive = '/assets/icons/accountStatisticsUnactive.svg';
const honestyCheckActive = '/assets/icons/honestyCheckActive.svg';
const honestyCheckUnactive = '/assets/icons/honestyCheckUnactive.svg';

const Header = (props) => {

   const [activeLanguage, setActiveLanguage] = useState(false);
   const [userPhoto, setUserPhoto] = useState(null);
   const { activeID, handler } = useMenuSelection();

   const { t, i18n } = useTranslation(); // t - функция перевода, i18n - объект i18n

   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
   };

   const balance = 123455;
   const userName = 'Герасим Муму';

   return (
      <div onClick={handler} className={s.container}>
         <div className={s.leftContainer}>
            <div className={s.imgContainer}><Image src={mainLogo} alt="Logo" width={200} height={100} className="img" /></div>
            <div className={s.btnContainer}>
               <Button
                  id={'URL'}
                  active={activeID === 'URL' && true}
                  className={`${s.btn} btn-text`}
                  activeI={linkActive}
                  inactiveI={linkUnactive}
               ><span className="innerText">Trade URL</span></Button>
               {/* <Button
            id={'deposit'}
            active={activeID === 'deposit' && true}
            className={`${s.btn} btn-text`}
            activeI={deposit}
            inactiveI={depositUnactive}
         ><span className="innerText">{t('rightMemu.deposit')}</span></Button> */}
               <Button
                  id={'historyConclusions'}
                  active={activeID === 'historyConclusions' && true}
                  className={`${s.btn} btn-text`}
                  activeI={historyConclusionsActive}
                  inactiveI={historyConclusionsUnactive}
               ><span className="innerText">{t('rightMemu.historyConclusions')}</span></Button>
               <Button
                  id={'historyGames'}
                  active={activeID === 'historyGames' && true}
                  className={`${s.btn} btn-text`}
                  activeI={historyGamesActive}
                  inactiveI={historyGamesUnactive}
               ><span className="innerText">{t('rightMemu.historyGames')}</span></Button>
               <Button
                  id={'profit'}
                  active={activeID === 'profit' && true}
                  className={`${s.btn} btn-text`}
                  activeI={profitsActive}
                  inactiveI={profitsUnactive}
               ><span className="innerText">{t('rightMemu.profit')}</span></Button>
               <Button
                  id={'bonuses'}
                  active={activeID === 'bonuses' && true}
                  className={`${s.btn} btn-text`}
                  activeI={bonusesActive}
                  inactiveI={bonusesUnactive}
               ><span className="innerText">{t('rightMemu.bonuses')}</span></Button>
               <Button
                  id={'accountStatistics'}
                  active={activeID === 'accountStatistics' && true}
                  className={`${s.btn} btn-text`}
                  activeI={accountStatisticsActive}
                  inactiveI={accountStatisticsUnactive}
               ><span className="innerText">{t('rightMemu.accountStatistics')}</span></Button>
               {/*  <Button
            id={'honestyCheck'}
            active={activeID === 'honestyCheck' && true}
            className={`${s.btn} btn-text`}
            activeI={honestyCheckActive}
            inactiveI={honestyCheckUnactive}
         ><span className="innerText">{t('rightMemu.honestyCheck')}</span></Button> */}
               <Button
                  id={'FAQ'}
                  active={activeID === 'FAQ' && true}
                  className={`${s.btn} ${s.btnFAQ} btn-text`}
                  title='FAQ'
               >FAQ</Button>
            </div>
         </div>
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

            <Button className={`${s.btnMini}`}>
               <Image src={logOut} alt="log Out" width={200} height={100} className={s.logOut} />
            </Button>

            <Button active={true} className={`${s.btnAddMoney}`}>
               <Image src={addMoney} alt="add money" width={200} height={100} className="img" />
               <span>1000 000$</span>
            </Button>

            {/* <Button className={`${s.balance} btn-text`}>
               <Image src={totalScore} alt="total score" width={200} height={100} className="img" />
               {balance.toLocaleString('ru-ru')}$
            </Button> */}
            <Button className={`${s.userInfo} `} >
               <div className={s.userAvatar}>
                  <img src={userPhoto || userIcon} alt="" />
               </div>
               {/* <div className={s.textContainer}>
                  <div className={s.info}>{t('header.info')}</div>
                  <div className={s.fullname}>{userName}</div>
               </div>
               <Image src={logOut} alt="log Out" width={200} height={100} className={s.logOut} /> */}
            </Button>
         </div>
      </div>
   )
}

export default Header;