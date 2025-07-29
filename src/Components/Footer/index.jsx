"use client"

import React from 'react';
import s from './Footer.module.css';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import useAuthStore from '../../../store/useAuthStore';
import { useModalContext } from '@/Total/ModalContext';

const logo = '/assets/img/logo/mainLogoUnactive.svg';
const tgIcon = '/assets/icons/tg.svg';
const youTube = '/assets/icons/youTube.svg';
const caseIcon = '/assets/icons/inactive.svg';
const userIcon = '/assets/icons/userIconUnactive.svg';
const improveIcon = '/assets/icons/improveUnactive.svg';

const Footer = (props) => {

   const { isAuth } = useAuthStore();

   const { t } = useTranslation();
   const { openModal, activeModal } = useModalContext(); // Получаем openModal из контекста

   //Если пользователь не авторизирован, то не показываем этот компонент
   if (!isAuth) return

   return (
      <div className={`${s.container} mt19`}>
         <div className={s.companyInfo}>
            <Image src={logo} alt="arrow" width={170} height={29} className={`img ${s.img}`} />
            <div className={s.text}>© Copyright 2025 Megacase. All rights reserved.</div>
         </div>

         <div className={s.links}>
            <div className={s.column}>
               <a href="#">{t("footer.links.link1")}</a>
               <a href="#">{t("footer.links.link2")}</a>
               <a href="#">{t("footer.links.link3")}</a>
            </div>
            <div className={s.column}>
               <a href="#">{t("footer.links.link4")}</a>
               <div onClick={() => openModal("honestyCheck")}>{t("footer.links.link5")}</div>
               <a href="#">{t("footer.links.link6")}</a>
            </div>
         </div>

         <div className={s.socialNetworks}>
            <div className={s.block}>
               <Image src={tgIcon} alt="arrow" width={26} height={26} className={`img ${s.snIcon}`} />
               <div className={s.socNetName}>Telegram {t("footer.channel")}</div>
            </div>
            <div className={s.block}>
               <Image src={youTube} alt="arrow" width={26} height={26} className={`img ${s.snIcon}`} />
               <div className={s.socNetName}>Youtube Shorts</div>
            </div>
         </div>

         <div className={s.statistics}>
            <div className={s.block}>
               <div className={`row ${s.iconRow}`}>
                  <Image src={caseIcon} alt="arrow" width={20} height={20} className={`img ${s.statickIcon}`} />
                  <div>{t("footer.statistics.item1")}</div>
               </div>
               <div className={s.count}>18 300</div>
            </div>
            <div className={s.block}>
               <div className={`row ${s.iconRow}`}>
                  <Image src={userIcon} alt="arrow" width={20} height={20} className={`img ${s.statickIcon}`} />
                  <div>{t("footer.statistics.item2")}</div>
               </div>
               <div className={s.count}>18 300</div>
            </div>
            <div className={`${s.block}`}>
               <div className={`${s.iconRow}`}>
                  <Image src={improveIcon} alt="arrow" width={20} height={20} className={`img ${s.statickIcon}`} />
                  <div>{t("footer.statistics.item3")}</div>
               </div>
               <div className={s.count}>18 300</div>
            </div>
         </div>
      </div>
   )
}

export default Footer;
