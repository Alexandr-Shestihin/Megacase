
import React from 'react';
import s from './LeftMenu.module.css';

import inactiveIcon from '../../assets/icons/inactive.svg';
import activeIcon from '../../assets/icons/active.svg';

import {
   Button,
   MyCase
} from '../';
import { useTranslation } from 'react-i18next';

const LeftMenu = (props) => {

   const { t } = useTranslation();

   const cases = [
      {
         id: 123,
         price: 12,
         left: 6,
         openCount: '(x12)',
      },
      {
         id: 124,
         price: 12,
         left: 6,
         openCount: '(x12)',
      },
      {
         id: 125,
         price: 12,
         left: 6,
         openCount: '(x12)',
      },
      {
         id: 126,
         price: 12,
         left: 6,
         openCount: '(x12)',
      },
      {
         id: 127,
         price: 12,
         left: 6,
         openCount: '(x12)',
      },
      {
         id: 128,
         price: 12,
         left: 6,
         openCount: '(x12)',
      },
      {
         id: 129,
         price: 12,
         left: 6,
         openCount: '(x12)',
      },
      {
         id: 130,
         price: 12,
         left: 6,
         openCount: '(x12)',
      },
      {
         id: 131,
         price: 12,
         left: 6,
         openCount: '(x12)',
      },
   ];

   return (
      <div className={s.container}>
         <div className="pageSubtitle">{t('leftMenu.title')}</div>
         <Button
            className={`${s.btn} mt12`}
            onClick={() => console.log('Counter-Strike 2')}
            activeI={activeIcon}
            inactiveI={inactiveIcon}
         >Counter-Strike 2</Button>
         <Button
            className={s.btn}
            onClick={() => console.log('Dota 2')}
            activeI={activeIcon}
            inactiveI={inactiveIcon}
         >Dota 2</Button>
         <Button
            className={s.btn}
            onClick={() => console.log('Rust')}
            activeI={activeIcon}
            inactiveI={inactiveIcon}
         >Rust</Button>

         <div className="pageSubtitle mt12">{t('leftMenu.subtitle')}</div>
         {cases.map(el => <MyCase
            key={el.id}
            id={el.id}
            price={el.price}
            left={el.left}
            openCount={el.openCount}
         />)}

      </div>
   )
}

export default LeftMenu;
