
import React from 'react';
import s from './Cashback.module.css';

import { useTranslation } from 'react-i18next';

import {
   SpoilerItem
} from '@/Components/index';

import {
   Button
} from '@/Components';

/* const frameCashback = '/assets/img/frameCashback.png'; */
const addMoney = '../../assets/icons/addMoney.svg';
/* import Image from 'next/image'; */

const Cashback = (props) => {

   const { t } = useTranslation();

   return (
      <div className={`${s.modalContainer}`}>
         <div className={`pageTitle ${s.title}`}>{t("сashback.title")} <span className="pageSubtitle">{t("сashback.subtitle")}</span> </div>

         {/* <Image src={frameCashback} alt="arrow" width={560} height={121} className={`mt12 img ${s.img}`} /> */}
         <div className={s.statisticsBlock}>
            <div className={s.percent}>
               <div className={s.statisticsTitle}>Мой процент</div>
            </div>
            <div className={s.profit}>
               <div className={s.statisticsTitle}>Мой доход</div>
            </div>
            <div className={s.balance}>
               <div className={s.statisticsTitle}>Доступно средств</div>
            </div>
         </div>

         <div className={`mt12 ${s.scrollContainer}`}>
            <SpoilerItem title={'1. Что такое кэшбек?'}>
               <div className={`mt12 ${s.textInner}`}>
                  <div>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos distinctio ea nesciunt reprehenderit obcaecati veniam voluptate debitis dolorum eius beatae nam sunt odit alias autem perspiciatis, vitae pariatur a nihil.
                  </div>
                  <div>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos distinctio ea nesciunt reprehenderit obcaecati veniam voluptate debitis dolorum eius beatae nam sunt odit alias autem perspiciatis, vitae pariatur a nihil.
                  </div>
               </div>
            </SpoilerItem>

            <div className={`mt12`}>
               <SpoilerItem title={'2. Как работает кешбек?'}>
                  <div className={`mt12 ${s.textInner}`}>
                     <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos distinctio ea nesciunt reprehenderit obcaecati veniam voluptate debitis dolorum eius beatae nam sunt odit alias autem perspiciatis, vitae pariatur a nihil.
                     </div>
                     <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos distinctio ea nesciunt reprehenderit obcaecati veniam voluptate debitis dolorum eius beatae nam sunt odit alias autem perspiciatis, vitae pariatur a nihil.
                     </div>
                  </div>
               </SpoilerItem>
            </div>

            <div className={`mt12`}>
               <SpoilerItem title={'3. Как получить кэшбек?'}>
                  <div className={`mt12 ${s.textInner}`}>
                     <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos distinctio ea nesciunt reprehenderit obcaecati veniam voluptate debitis dolorum eius beatae nam sunt odit alias autem perspiciatis, vitae pariatur a nihil.
                     </div>
                     <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos distinctio ea nesciunt reprehenderit obcaecati veniam voluptate debitis dolorum eius beatae nam sunt odit alias autem perspiciatis, vitae pariatur a nihil.
                     </div>
                  </div>
               </SpoilerItem>
            </div>

            <Button
               className={`mt16 ${s.btn} btn-3 btn-text`}
               activeI={addMoney}
               inactiveI={addMoney}
            >
               {t("сashback.btn")}</Button>

         </div>
      </div>
   )
}

export default Cashback;