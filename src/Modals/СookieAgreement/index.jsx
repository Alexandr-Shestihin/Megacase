"use client"

import React, { useEffect } from 'react';
import s from './СookieAgreement.module.css';
import { useTranslation } from 'react-i18next';
import { useModalContext } from "@/Total/ModalContext";
const frameСookie = '/assets/img/frameСookie.png';
import Image from 'next/image';
import { useLocalStorage } from '@/hooks/useLocalStorage';
const close = '/assets/icons/close.svg';

const СookieAgreement = (props) => {
   const { t } = useTranslation();
   const { openModal, activeModal } = useModalContext();
   const [storedCookies, setCookies] = useLocalStorage('messageCookies', false);

   const handler = () => {
      openModal(null);
      setCookies(true);
   };

   useEffect(() => {
      let timeoutId;
      console.log('!storedCookies', !storedCookies)
      if (!storedCookies) {
         timeoutId = setTimeout(() => {
            // Проверяем, что модалка еще не открыта другим компонентом
            if (activeModal !== "cookieAgreement") {
               openModal("cookieAgreement");
            }
         }, 4000);
      }
      return () => clearTimeout(timeoutId);
   }, [storedCookies, openModal]); // Добавляем зависимости useEffect

   return (
      <div className={`${s.modal} ${activeModal === "cookieAgreement" ? s.active : ''}`} onClick={() => openModal(null)}>
         <div className={`${s.modal__content} ${activeModal === "cookieAgreement" ? s.active : ''}`} onClick={e => e.stopPropagation()}>
            <Image onClick={() => openModal(null)} src={close} alt="" width={14} height={14} className={s.img} />
            {activeModal === "cookieAgreement" && (
               <div className={`${s.modalContainer}`}>
                  <div className={`pageTitle ${s.title}`}>{t("cookie.title")}
                     <span className="pageSubtitle"> {t("cookie.subtitle")}</span>
                  </div>
                  <Image src={frameСookie} alt="arrow" width={560} height={121} className={`mt12 img}`} />
                  <div className={`${s.notification}`} >
                     <input type="checkbox" id="radio1" name="skinAction" value="return" onChange={handler} />
                     <label htmlFor="radio1">
                        <span>{t("cookieAgreement.notificationFirstPart")}</span>
                        <span onClick={() => openModal("cookie")} className={s.link}> {t("cookieAgreement.notificationLinkPart")} </span>
                        <span>{t("cookieAgreement.notificationLasttPart")}</span>
                     </label>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default СookieAgreement;