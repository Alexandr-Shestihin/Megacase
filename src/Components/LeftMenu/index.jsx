"use client"
import React from 'react';
import s from './LeftMenu.module.css';

import {
   MyCase
} from '../';

import { useTranslation } from 'react-i18next';
import { cases } from '../../../public/data';

const LeftMenu = (props) => {

   const { t } = useTranslation();

   return (
      <div className={s.container}>

         <div className="pageSubtitle mt12">{t('leftMenu.title')}</div>
         {cases.map(el => <MyCase
            key={el.id}
            id={el.id}
            title={el.id}
            price={el.price}
            rest={el.rest}
            openCount={el.openCount}
         />)}

      </div>
   )
}

export default LeftMenu;
