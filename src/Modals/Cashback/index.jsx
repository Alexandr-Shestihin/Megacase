
import React from 'react';
import s from './Cashback.module.css';

import { useTranslation } from 'react-i18next';

import {
   SpoilerItem
} from '@/Components/index';

import {
   Button
} from '@/Components';

/* const bgOrange = '/assets/img/bgOrange.png'; */
const addMoney = '../../assets/icons/addMoney.svg';
/* import Image from 'next/image'; */

const Cashback = (props) => {

   const { t } = useTranslation();

   return (
      <div className={`${s.modalContainer}`}>
         <div className={`pageTitle ${s.title}`}>{t("сashback.title")} <span className="pageSubtitle">{t("сashback.subtitle")}</span> </div>

         {/* <Image src={frameCashback} alt="arrow" width={560} height={121} className={`mt12 img ${s.img}`} /> */}
         <div className={`mt12 ${s.statisticsBlock}`}>
            <div className={`${s.block}`}>
               <div className={s.statisticsTitle}>Мой процент</div>
               <div className={s.statisticsSubtitle}>1%</div>
            </div>
            <div className={`${s.block}`}>
               <div className={s.statisticsTitle}>Мой доход</div>
               <div className={s.statisticsSubtitle}>123 345$</div>
            </div>
            <div className={`${s.block}`}>
               <div className={s.statisticsTitle}>Доступно средств</div>
               <div className={s.statisticsSubtitle}>12$</div>
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