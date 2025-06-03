"use client"
import React from 'react';
import s from './RightMemu.module.css';
import { useTranslation } from 'react-i18next';

const RightMemu = (props) => {

   const { t } = useTranslation();

   return (
      <div>
         <div className="pageSubtitle">{t('rightMemu.title')}</div>
      </div>
   )
}

export default RightMemu;
