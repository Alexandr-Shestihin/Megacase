"use client"

import React from 'react';
import s from './MenuBtn.module.css';

import useMenuSelection from '@/utils';

import {
   Button
} from '../';
import { useTranslation } from 'react-i18next';

const inactiveIcon = '/assets/icons/inactive.svg';
const activeIcon = '/assets/icons/active.svg';

const MenuBtn = (props) => {

   const { activeID, handler } = useMenuSelection();

   const { t } = useTranslation();

   return (
      <div onClick={handler} className={`row ${s.row}`}>
         <Button
            id={'Counter-Strike'}
            active={activeID === 'Counter-Strike' && true}
            className={`${s.btn} btn-text`}
            activeI={activeIcon}
            inactiveI={inactiveIcon}
            title='Counter-Strike 2'
         >CS 2</Button>
         <Button
            id={'Dota-2'}
            active={activeID === 'Dota-2' && true}
            className={`${s.btn} btn-text`}
            activeI={activeIcon}
            inactiveI={inactiveIcon}
            title='Dota 2'
         >Dota 2</Button>
         <Button
            id={'Rust'}
            active={activeID === 'Rust' && true}
            className={`${s.btn} btn-text`}
            activeI={activeIcon}
            inactiveI={inactiveIcon}
            title='Rust'
         >Rust</Button>
         <Button
            id={'FAQ'}
            active={activeID === 'FAQ' && true}
            className={`${s.btn} ${s.btnFAQ} btn-text`}
            title='FAQ'
         >FAQ</Button>
         <div className={s.indicatorContainer}>
            <div className={s.indicator}>
               <div className={s.circle}></div>
               <div className={s.indicatorCount}>3334</div>
            </div>
            <div className={`innerText ${s.indicatorText}`}>{t("menuBtn.indicator")}</div>
         </div>
      </div>
   )
}

export default MenuBtn;