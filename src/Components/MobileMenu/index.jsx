"use client"
import React from 'react';
import s from './MobileMenu.module.css';

import {
   MobileMenuItem
} from '../';
import { useMenuSelection } from '@/utils';

import { useTranslation } from "react-i18next";

const linkActive = '/assets/icons/linkActive.svg';
const linkUnactive = '/assets/icons/linkUnactive.svg';

const historyConclusionsActive = '/assets/icons/historyConclusionsActive.svg';
const historyConclusionsUnactive = '/assets/icons/historyConclusionsUnactive.svg';
const historyGamesActive = '/assets/icons/historyGamesActive.svg';
const historyGamesUnactive = '/assets/icons/historyGamesUnactive.svg';
const profitsActive = '/assets/icons/profitsActive.svg';
const profitsUnactive = '/assets/icons/profitsUnactive.svg';
const bonusesActive = '/assets/icons/bonusesActive.svg';
const bonusesUnactive = '/assets/icons/bonusesUnactive.svg';
const accountStatisticsActive = '/assets/icons/accountStatisticsActive.svg';
const accountStatisticsUnactive = '/assets/icons/accountStatisticsUnactive.svg';
const faqActive = '/assets/icons/faqActive.svg';
const faqUnactive = '/assets/icons/faqUnactive.svg';

const MobileMenu = (props) => {

   const { t, i18n } = useTranslation(); // t - функция перевода, i18n - объект i18n

   const { activeID, handler } = useMenuSelection();

   return (
      <div onClick={handler} className='mt54'>
         <MobileMenuItem
            id={'URL'}
            active={activeID === 'URL' && true}
            className={`${s.btn} btn-text`}
            activeI={linkActive}
            inactiveI={linkUnactive}
         >Trade URL</MobileMenuItem>
         <MobileMenuItem
            id={'historyConclusions'}
            active={activeID === 'historyConclusions' && true}
            className={`${s.btn} btn-text`}
            activeI={historyConclusionsActive}
            inactiveI={historyConclusionsUnactive}
         >{t('rightMemu.historyConclusions')}</MobileMenuItem>
         <MobileMenuItem
            id={'historyGames'}
            active={activeID === 'historyGames' && true}
            className={`${s.btn} btn-text`}
            activeI={historyGamesActive}
            inactiveI={historyGamesUnactive}
         >{t('rightMemu.historyGames')}</MobileMenuItem>
         <MobileMenuItem
            id={'profit'}
            active={activeID === 'profit' && true}
            className={`${s.btn} btn-text`}
            activeI={profitsActive}
            inactiveI={profitsUnactive}
         >{t('rightMemu.profit')}</MobileMenuItem>
         <MobileMenuItem
            id={'bonuses'}
            active={activeID === 'bonuses' && true}
            className={`${s.btn} btn-text`}
            activeI={bonusesActive}
            inactiveI={bonusesUnactive}
         >{t('rightMemu.bonuses')}</MobileMenuItem>
         <MobileMenuItem
            id={'accountStatistics'}
            active={activeID === 'accountStatistics' && true}
            className={`${s.btn} btn-text`}
            activeI={accountStatisticsActive}
            inactiveI={accountStatisticsUnactive}
         >{t('rightMemu.accountStatistics')}</MobileMenuItem>
         <MobileMenuItem
            id={'FAQ'}
            active={activeID === 'FAQ' && true}
            className={`${s.btn} ${s.btnFAQ} btn-text`}
            activeI={faqActive}
            inactiveI={faqUnactive}
            title='FAQ'
         >FAQ</MobileMenuItem>
      </div>
   )
}

export default MobileMenu;
