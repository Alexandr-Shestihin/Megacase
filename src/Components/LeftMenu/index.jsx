"use client"
import React from 'react';
import s from './LeftMenu.module.css';

const inactiveIcon = '/assets/icons/inactive.svg';
const activeIcon = '/assets/icons/active.svg';

import {
   Button,
   MyCase
} from '../';

import { useTranslation } from 'react-i18next';
import useMenuSelection from '@/utils';
import { cases } from '../../../public/data';

const LeftMenu = (props) => {
   const { activeID, handler } = useMenuSelection();

   const { t } = useTranslation();

   return (
      <div className={s.container} onClick={handler}>
         <div className="pageSubtitle">{t('leftMenu.title')}</div>
         <Button
            id={'Counter-Strike'}
            active={activeID === 'Counter-Strike' && true}
            className={`${s.btn} mt12`}
            activeI={activeIcon}
            inactiveI={inactiveIcon}
         >Counter-Strike 2</Button>
         <Button
            id={'Dota-2'}
            active={activeID === 'Dota-2' && true}
            className={s.btn}
            onClick={() => console.log('Dota 2')}
            activeI={activeIcon}
            inactiveI={inactiveIcon}
         >Dota 2</Button>
         <Button
            id={'Rust'}
            active={activeID === 'Rust' && true}
            className={s.btn}
            activeI={activeIcon}
            inactiveI={inactiveIcon}
         >Rust</Button>

         <div className="pageSubtitle mt12">{t('leftMenu.subtitle')}</div>
         {cases.map(el => <MyCase
            key={el.id}
            id={el.id}
            price={el.price}
            rest={el.rest}
            openCount={el.openCount}
         />)}

      </div>
   )
}

export default LeftMenu;
