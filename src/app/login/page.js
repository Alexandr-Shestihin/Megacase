"use client";

import React, { useEffect } from 'react';
import s from './login.module.css';
import useAuthStore from '@/../store/useAuthStore';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

import {
   Button,
} from '../../Components';
import { useMenuSelection } from '@/hooks/useMenuSelection';
import { useModalContext } from '@/Total/ModalContext';

const tgActive = '../../assets/icons/tgActive.svg';
const tgUnactive = '../../assets/icons/tgUnactive.svg';
const vkActive = '../../assets/icons/vkActive.svg';
const vkUnactive = '../../assets/icons/vkUnactive.svg';
const steamActive = '../../assets/icons/steamActive.svg';
const steamUnactive = '../../assets/icons/steamUnactive.svg';

export default function LoginPage() {

   const { isAuth } = useAuthStore();
   const router = useRouter();
   const { activeID, handler } = useMenuSelection();
   const { t } = useTranslation();

   const { loginWithSteam, loginWithVk, getTelegramAuthUrl } = useAuthStore();

   const handleSteamLogin = () => {
      loginWithSteam();
   };

   const handleVkLogin = async () => {
      await loginWithVk();
   };

   const handleTelegramLogin = async () => {
      try {
         await getTelegramAuthUrl();
      } catch (error) {
         console.error("Telegram Login failed:", error);
      }
   };

   useEffect(() => {
      if (isAuth) {
         router.push('/'); //Перенаправляем на главную, если авторизованы
      }
   }, [isAuth, router]);

   const { openModal, activeModal } = useModalContext(); // Получаем openModal из контекста

   return (
      <div className={s.container}>
         <h1 className='pageTitle'>{t("auth.title")} <span className="pageSubtitle">{t("auth.subtitle")}</span> </h1>
         <Button
            id={'vk'}
            active={activeID === 'vk' && true}
            className={`${s.btn} mt12 btn-text`}
            activeI={vkActive}
            inactiveI={vkUnactive}
            onClick={(e) => {
               handler(e);
               handleVkLogin();
            }}
         >Вконтакте</Button>
         <Button
            id={'tg'}
            active={activeID === 'tg' && true}
            className={`${s.btn} mt8 btn-text`}
            activeI={tgActive}
            inactiveI={tgUnactive}
            onClick={(e) => {
               handler(e);
               handleTelegramLogin();
            }}
         >Telegram</Button>
         <Button
            id={'steam'}
            active={activeID === 'steam' && true}
            className={`${s.btn} mt8 btn-text`}
            activeI={steamActive}
            inactiveI={steamUnactive}
            onClick={(e) => {
               handler(e);
               handleSteamLogin();
            }}
         >Steam</Button>

         <div onClick={() => openModal("userAgreement")}>{t("footer.links.link1")}</div>
      </div>
   );
}