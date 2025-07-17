"use client"
import React, { useEffect, useRef } from 'react';
import s from './MenuMobile.module.css';

import {
   BtnBurger,
} from '../';

const MenuMobile = ({ isOpen, onClose, children }) => {
   const drawerRef = useRef(null); // Создаем ref для шторки

   // useEffect для добавления/удаления overflow: hidden для body
   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'unset';
      }
      return () => {
         document.body.style.overflow = 'unset'; // clean up on unmount
      };
   }, [isOpen]);

   return (
      <>
         {isOpen && <div className={s.overlay} onClick={onClose} />}

         <div
            className={`${s.drawer} ${isOpen ? s.open : ''}`}
            ref={drawerRef}
         >
            {/* Кнопка закрытия */}
            <div className={s.closeButton}>
               <BtnBurger isActive={isOpen} setIsActive={onClose} />
            </div>

            {/* Содержимое шторки */}
            <div className={s.drawerContent}>
               {children}
            </div>
         </div>
      </>
   );
}

export default MenuMobile;