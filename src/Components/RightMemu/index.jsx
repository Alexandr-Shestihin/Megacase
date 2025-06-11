"use client"
import React from 'react';
import s from './RightMemu.module.css';
import { useTranslation } from 'react-i18next';

import useMenuSelection from '@/utils';

import {
   Button,
   Input
} from '../';

const link = '/assets/icons/link.svg';
const deposit = '/assets/icons/addMoney.svg';
const depositUnactive = '/assets/icons/addMoneyUnactive.svg';
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
const honestyCheckActive = '/assets/icons/honestyCheckActive.svg';
const honestyCheckUnactive = '/assets/icons/honestyCheckUnactive.svg';

import Image from 'next/image';

const RightMemu = (props) => {

   const { activeID, handler } = useMenuSelection();

   const { t } = useTranslation();

   return (
      <div onClick={handler} className={s.container}>
         <div className="pageSubtitle">{t('rightMemu.title')}</div>
         <div className={`btn-1 ${s.changeLink}`}>
            <div className="row">
            <div className={`innerText ${s.imgContainer}`}>
               <Image src={link} alt="link" width={18} height={18} className={`img ${s.img}`} />
               Trade URL Link
            </div>
            <div className={s.changeText}>{t('rightMemu.changeLink')}</div>
            </div>
            <Input
               set={(e) => console.log(e)}
               value={"https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url"}
               className={'mt8'}
            /> 
         </div>
         <Button
            id={'deposit'}
            active={activeID === 'deposit' && true}
            className={`${s.btn} btn-text`}
            activeI={deposit}
            inactiveI={depositUnactive}
         ><span className="innerText">{t('rightMemu.deposit')}</span></Button>
         <Button
            id={'historyConclusions'}
            active={activeID === 'historyConclusions' && true}
            className={`${s.btn} btn-text`}
            activeI={historyConclusionsActive}
            inactiveI={historyConclusionsUnactive}
         ><span className="innerText">{t('rightMemu.historyConclusions')}</span></Button>
         <Button
            id={'historyGames'}
            active={activeID === 'historyGames' && true}
            className={`${s.btn} btn-text`}
            activeI={historyGamesActive}
            inactiveI={historyGamesUnactive}
         ><span className="innerText">{t('rightMemu.historyGames')}</span></Button>
         <Button
            id={'profit'}
            active={activeID === 'profit' && true}
            className={`${s.btn} btn-text`}
            activeI={profitsActive}
            inactiveI={profitsUnactive}
         ><span className="innerText">{t('rightMemu.profit')}</span></Button>
         <Button
            id={'bonuses'}
            active={activeID === 'bonuses' && true}
            className={`${s.btn} btn-text`}
            activeI={bonusesActive}
            inactiveI={bonusesUnactive}
         ><span className="innerText">{t('rightMemu.bonuses')}</span></Button>
         <Button
            id={'accountStatistics'}
            active={activeID === 'accountStatistics' && true}
            className={`${s.btn} btn-text`}
            activeI={accountStatisticsActive}
            inactiveI={accountStatisticsUnactive}
         ><span className="innerText">{t('rightMemu.accountStatistics')}</span></Button>
         <Button
            id={'honestyCheck'}
            active={activeID === 'honestyCheck' && true}
            className={`${s.btn} btn-text`}
            activeI={honestyCheckActive}
            inactiveI={honestyCheckUnactive}
         ><span className="innerText">{t('rightMemu.honestyCheck')}</span></Button>
      </div>
   )
}

export default RightMemu;
