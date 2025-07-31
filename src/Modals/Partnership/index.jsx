
import React from 'react';
import s from './Partnership.module.css';

import { useTranslation } from 'react-i18next';

import {
   SpoilerItem
} from '@/Components/index';

import {
   Button
} from '@/Components';

const framePartnership = '/assets/img/framePartnership.png';
const tg = '/assets/icons/tgActive.svg';
import Image from 'next/image';

const Partnership = (props) => {

   const { t } = useTranslation();

   return (
      <div className={`${s.modalContainer}`}>
         <div className={`pageTitle ${s.title}`}>{t("partnership.title")} <span className="pageSubtitle">{t("partnership.subtitle")}</span> </div>

         <Image src={framePartnership} alt="arrow" width={560} height={121} className={`mt12 img ${s.img}`} />

         <div className={`mt12 ${s.scrollContainer}`}>
            <SpoilerItem title={'1. Как это работает?'}>
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
               <SpoilerItem title={'2. Для кого подходит?'}>
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
               <SpoilerItem title={'3. Сколько я могу заработать?'}>
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
               activeI={tg}
               inactiveI={tg}
            >
               {t("partnership.btn")}</Button>

         </div>
      </div>
   )
}

export default Partnership;