"use client"
import React from 'react';
import s from './BtnBurger.module.css';

const BtnBurger = ({isActive, setIsActive}) => {

   const toggleBurger = () => {
      setIsActive(!isActive);
   };
   
   return (
      <button
         className={`${s.burgerButton} ${isActive ? s.active : ''}`} // Применяем классы из модуля
         onClick={toggleBurger}
      >
         {/* Передаем классы для полосок через className */}
         <span className={`${s.burgerLine} ${s.burgerLineTop}`}></span>
         <span className={`${s.burgerLine} ${s.burgerLineMiddle}`}></span>
         <span className={`${s.burgerLine} ${s.burgerLineBottom}`}></span>
      </button>
   );
}

export default BtnBurger;
