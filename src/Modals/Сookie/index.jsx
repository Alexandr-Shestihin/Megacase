
import React from 'react';
import s from './Сookie.module.css';

import { useTranslation } from 'react-i18next';

import {
   SpoilerItem
} from '@/Components/index';

const frameСookie = '/assets/img/frameСookie.png';
import Image from 'next/image';

const Сookie = (props) => {

   const { t } = useTranslation();

   return (
      <div className={`${s.modalContainer}`}>
         <div className={`pageTitle ${s.title}`}>{t("cookie.title")} <span className="pageSubtitle">{t("cookie.subtitle")}</span> </div>

         <Image src={frameСookie} alt="arrow" width={560} height={121} className={`mt12 img ${s.img}`} />

         <div className={`mt12 ${s.scrollContainer}`}>
            <SpoilerItem title={'1. Что такое cookie?'}>
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
               <SpoilerItem title={'2. Зачем мы используем cookie?'}>
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
               <SpoilerItem title={'3. Какие сторонние сервисы используют cookie?'}>
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
               <SpoilerItem title={'4. Как ты можешь управлять cookie?'}>
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
         </div>
      </div>
   )
}

export default Сookie;