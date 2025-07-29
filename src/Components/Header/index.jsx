"use client";

import React, { useState } from 'react';
import s from './Header.module.css';

import Image from 'next/image';

import {
   Button,
   BtnBurger,
   MenuMobile,
   MobileMenu,
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
import { useRouter } from 'next/navigation';

import { useTranslation } from "react-i18next";
import { useMenuSelection } from '@/hooks/useMenuSelection';
import { useModalContext } from '@/Total/ModalContext';
import useAuthStore from '../../../store/useAuthStore';
import API from '@/API';
import { handleClick } from '@/utils';

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

   const router = useRouter();

   const { isAuth, setIsAuth, user } = useAuthStore();

   const [activeLanguage, setActiveLanguage] = useState(false);
   const [userPhoto, setUserPhoto] = useState(null);

   const { t, i18n } = useTranslation(); // t - функция перевода, i18n - объект i18n

   const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
   };

   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const { openModal, activeModal } = useModalContext(); // Получаем openModal из контекста

   const handleLogOut = async () => {
      const response = await API.logOut();
      if (response?.success) {
         setIsAuth(false);
         router.push('/login');
      }
   }

   //Если пользователь не авторизирован, то не показываем этот компонент
   if (!isAuth) return

   return (
      <div className={s.container}>
         <div className={s.leftContainer}>
            <div className={s.imgContainer}><Image src={mainLogo} alt="Logo" width={200} height={100} className="img" /></div>
            <div className={s.btnContainer}>
               <Button
                  id={'steamTadeURL'}
                  active={activeModal === 'steamTadeURL' && true}
                  className={`${s.btn} btn-text`}
                  activeI={linkActive}
                  inactiveI={linkUnactive}
                  onClick={() => openModal("steamTadeURL")}
               ><span className="innerText">Trade URL</span></Button>

               <Button
                  id={'historyConclusions'}
                  active={activeModal === 'historyConclusions' && true}
                  className={`${s.btn} btn-text`}
                  activeI={historyConclusionsActive}
                  inactiveI={historyConclusionsUnactive}
                  onClick={() => openModal("historyConclusions")}
               ><span className="innerText">{t('rightMemu.historyConclusions')}</span></Button>

               <Button
                  id={'historyGames'}
                  active={activeModal === 'historyGames' && true}
                  className={`${s.btn} btn-text`}
                  activeI={historyGamesActive}
                  inactiveI={historyGamesUnactive}
                  onClick={() => openModal("historyGames")}
               ><span className="innerText">{t('rightMemu.historyGames')}</span></Button>
               <Button
                  id={'profit'}
                  active={activeModal === 'profit' && true}
                  className={`${s.btn} btn-text`}
                  activeI={profitsActive}
                  inactiveI={profitsUnactive}
                  onClick={() => openModal("profit")}
               ><span className="innerText">{t('rightMemu.profit')}</span></Button>
               <Button
                  id={'bonuses'}
                  active={activeModal === 'bonuses' && true}
                  className={`${s.btn} btn-text`}
                  activeI={bonusesActive}
                  inactiveI={bonusesUnactive}
                  onClick={() => openModal("bonuses")}
               ><span className="innerText">{t('rightMemu.bonuses')}</span></Button>
               <Button
                  id={'accountStatistics'}
                  active={activeModal === 'accountStatistics' && true}
                  className={`${s.btn} btn-text`}
                  activeI={accountStatisticsActive}
                  inactiveI={accountStatisticsUnactive}
                  onClick={() => openModal("accountStatistics")}
               ><span className="innerText">{t('rightMemu.accountStatistics')}</span></Button>
               <Button
                  id={'FAQ'}
                  active={activeModal === 'FAQ' && true}
                  activeI={faqActive}
                  inactiveI={faqUnactive}
                  className={`${s.btn} ${s.btnFAQ} btn-text`}
                  title='FAQ'
                  onClick={() => openModal("FAQ")}
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

            <Button onClick={handleLogOut} className={`${s.btnMini}`}>
               <Image src={logOut} alt="log Out" width={200} height={100} className={s.logOut} />
            </Button>

            <Button active={true} className={`${s.btnAddMoney}`}>
               <Image src={addMoney} alt="add money" width={200} height={100} className="img" />
               <span>1000 000$</span>
            </Button>

            <Button onClick={handleClick} className={`${s.userAvatar} `} >
               <img src={user?.photo || userIcon} alt="" />
               {user?.id}
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