
import React from 'react';
import s from './Statistics.module.css';

import { useTranslation } from 'react-i18next';

import {
   SpoilerItem
} from '@/Components/index';

import {
   Button
} from '@/Components';

const addMoney = '../../assets/icons/addMoney.svg';

const Statistics = (props) => {

   const { t } = useTranslation();

   return (
      <div className={`${s.modalContainer}`}>
         <div className={`pageTitle ${s.title}`}>{t("statistics.title")} <span className="pageSubtitle">{t("statistics.subtitle")}</span> </div>

         <div className={`mt12 ${s.scrollContainer}`}>
            <div className={s.blockCOntainer}>
               <div className={`row ${s.blockHeader}`}>
                  <div className={s.blockTitle}>Финансовая активность</div>
                  <div className={s.share}>Поделиться</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Statistics;