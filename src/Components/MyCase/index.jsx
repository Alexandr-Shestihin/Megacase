"use client"
import React, { useState } from 'react';
import s from './MyCase.module.css';
import { useTranslation } from 'react-i18next';

const caseIcon = '/assets/icons/case.svg';

const MyCase = ({ id, price, rest, openCount, ...args }) => {

   const [active, setActive] = useState(false);

   const { t } = useTranslation();

   const handler = () => {
      setActive(!active)
   }

   return (
      <div className={`${s.container} ${active && s.active} btn-1`} onClick={handler} {...args}>
         <div className={s.mainRow}>
            <div className={s.left}><img src={caseIcon} alt="" /></div>
            <div className={s.middle}><span className={s.textHidden_mob}>{t('leftMenu.cases.title')}</span> №{id}</div>
            <div className={s.right}>{price}$</div>
         </div>
         <div className={`${s.addRow} mt8`}>
            <div className={s.left}>{openCount}</div>
            <div className={s.middle}>{t('leftMenu.cases.rest')}</div>
            <div className={s.right}>{rest} {t('leftMenu.cases.restCount')}</div>
         </div>
      </div>
   )
}

export default MyCase;
