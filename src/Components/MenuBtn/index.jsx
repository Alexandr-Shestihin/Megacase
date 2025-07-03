"use client"

import React from 'react';
import s from './MenuBtn.module.css';

import {
   Button
} from '../';
import { useTranslation } from 'react-i18next';

/* const inactiveIcon = '/assets/icons/inactive.svg';
const activeIcon = '/assets/icons/active.svg'; */

const MenuBtn = ({activeID, handler}) => {

   const { t } = useTranslation();

   return (
      <div onClick={handler} className={`row ${s.row}`}>
         <Button
            id={'CS2'}
            active={activeID === 'CS2' && true}
            className={`${s.btn} btn-text`}
            title='Counter-Strike 2'
         >CS 2</Button>
         <Button
            id={'Dota2'}
            active={activeID === 'Dota2' && true}
            className={`${s.btn} btn-text`}
            title='Dota 2'
         >Dota 2</Button>
         <Button
            id={'Rust'}
            active={activeID === 'Rust' && true}
            className={`${s.btn} btn-text`}
            title='Rust'
         >Rust</Button>
      </div>
   )
}

export default MenuBtn;