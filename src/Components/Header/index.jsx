"use client";

import React, { useState } from 'react';
import s from './Header.module.css';

import Image from 'next/image';

import {
   Button,
   BtnBurger,
   MenuMobile,
   MobileMenu
} from '../';

const mainLogo = '../../assets/img/logo/mainLogo.svg';
const totalScore = '../../assets/icons/totalScore.svg';
const addMoney = '../../assets/icons/addMoney.svg';
const languageActive = '../../assets/icons/languageActive.svg';
const languageUnactive = '../../assets/icons/languageUnactive.svg';
const userIcon = '../../assets/icons/userIconUnactive.svg';
const logOut = '../../assets/icons/logOut.svg';
const usa = '../../assets/icons/languages/usa.svg';
const rs = '../../assets/icons/languages/rs.svg';
const user = '../../assets/icons/user.png';

import { useTranslation } from "react-i18next";
import { useMenuSelection } from '@/utils';

const linkActive = '/assets/icons/linkActive.svg';
const linkUnactive = '/assets/icons/linkUnactive.svg';

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
const faqActive = '/assets/icons/faqActive.svg';
const faqUnactive = '/assets/icons/faqUnactive.svg';

const Header = (props) => {

   const [activeLanguage, setActiveLanguage] = useState(false);
   const [userPhoto, setUserPhoto] = useState(null);
   const { activeID, handler } = useMenuSelection();

   const { t, i18n } = useTranslation(); // t - функция перевода, i18n - объект i18n

   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
   };

   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <div className={s.container}>
         <div className={s.leftContainer}>
            <div className={s.imgContainer}><Image src={mainLogo} alt="Logo" width={200} height={100} className="img" /></div>
            <div onClick={handler} className={s.btnContainer}>
               <Button
                  id={'URL'}
                  active={activeID === 'URL' && true}
                  className={`${s.btn} btn-text`}
                  activeI={linkActive}
                  inactiveI={linkUnactive}
               ><span className="innerText">Trade URL</span></Button>
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
               <Button
                  id={'FAQ'}
                  active={activeID === 'FAQ' && true}
                  activeI={faqActive}
                  inactiveI={faqUnactive}
                  className={`${s.btn} ${s.btnFAQ} btn-text`}
                  title='FAQ'
               ><span className="innerText">FAQ</span></Button>
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

            <Button className={`${s.userInfo} `} >
               <div className={s.userAvatar}>
                  <img src={userPhoto || userIcon} alt="" />
               </div>
            </Button>

            <BtnBurger isActive={isMenuOpen} setIsActive={setIsMenuOpen} />

            <MenuMobile isOpen={isMenuOpen} onClose={toggleMenu}>
               <MobileMenu />

               <div>
                  <Button
                     active={activeLanguage}
                     onClick={() => setActiveLanguage(!activeLanguage)}
                     className={`mt8 ${s.btnMini} ${s.btnMiniMobile}`}
                     activeI={languageActive}
                     inactiveI={languageUnactive}
                  >
                     <div className={s.textMenuMob}>{t("header.language")}</div>
                     <div className={`${s.langContainer} ${s.langContainerMobile} ${activeLanguage && s.active}`}>
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

                  <Button className={`mt8 ${s.btnMini} ${s.btnMiniMobile}`}>
                     <Image src={logOut} alt="log Out" width={200} height={100} className={s.logOut} />
                     <div className={s.textMenuMob}>{t("header.logOut")}</div>
                  </Button>

                  <Button className={`mt8 ${s.userInfo} ${s.userInfoMobile}`} >
                     <div className={s.userAvatar}>
                        <img src={userPhoto || userIcon} alt="" />
                     </div>
                     <div className={s.textMenuMob}>{t("header.info")}</div>
                  </Button>
               </div>
            </MenuMobile>
         </div>
      </div>
   )
}

export default Header;