"use client"
import React, { useState } from 'react';
import s from './MyCase.module.css';
import { useTranslation } from 'react-i18next';

const caseIcon = '/assets/icons/case.svg';

const MyCase = ({ id, price, rest, openCount }) => {

   const [active, setActive] = useState(false);

   const { t } = useTranslation();

   const handler = () => {
      setActive(!active)
   }

   return (
      <div className={`${s.container} btn-1`} onClick={handler}>
         <div className={s.mainRow}>
            <div className={s.first}><img src={caseIcon} alt="" /></div>
            <div className={s.middle}>{t('leftMenu.cases.title')} №{id}</div>
            <div className={s.right}>{price}$</div>
         </div>
         {active && (
            <div className={`${s.addRow} mt8`}>
               <div className={s.first}>{openCount}</div>
               <div className={s.middle}>{t('leftMenu.cases.rest')}</div>
               <div className={s.right}>{rest} {t('leftMenu.cases.restCount')}</div>
            </div>
         )}
      </div>
   )
}

export default MyCase;
