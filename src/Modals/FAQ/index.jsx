
import React from 'react';
import s from './FAQ.module.css';

import { useTranslation } from 'react-i18next';

import {
   SpoilerItem
} from '@/Components/index';

const FAQ = (props) => {

   const { t } = useTranslation();

   return (
      <div className={`${s.modalContainer}`}>
         <div className={`pageTitle ${s.title}`}>{t("FAQ.title")} <span className="pageSubtitle">{t("FAQ.subtitle")}</span> </div>

         <div className={`mt12 ${s.scrollContainer}`}>
               <SpoilerItem title={'Что такое MEGACASE?'}>
                  <div className={`mt12 ${s.textInner}`}>
                     <div>
                        MEGACASE — это современная онлайн-платформа для открытия кейсов, объединяющая самые культовые вселенные видеоигр:
                        CS2, Dota 2 и Rust в одном месте.
                     </div>
                     <div>Это больше, чем просто кейс-сайт — это новая экосистема азартных открытий, прокачки скинов и лут-битв, где каждый клик может изменить всё.</div>
                  </div>
               </SpoilerItem>

            <div className="mt12">
               <SpoilerItem title={'Как пополнить баланс?'}>
                  <div className={`mt12 ${s.textInner}`}>
                     <div>
                        MEGACASE — это современная онлайн-платформа для открытия кейсов, объединяющая самые культовые вселенные видеоигр:
                        CS2, Dota 2 и Rust в одном месте.
                     </div>
                     <div>Это больше, чем просто кейс-сайт — это новая экосистема азартных открытий, прокачки скинов и лут-битв, где каждый клик может изменить всё.</div>
                  </div>
               </SpoilerItem>
            </div>

            <div className="mt12">
               <SpoilerItem title={'Как сделать вывод?'}>
                  <div className={`mt12 ${s.textInner}`}>
                     <div>
                        MEGACASE — это современная онлайн-платформа для открытия кейсов, объединяющая самые культовые вселенные видеоигр:
                        CS2, Dota 2 и Rust в одном месте.
                     </div>
                     <div>Это больше, чем просто кейс-сайт — это новая экосистема азартных открытий, прокачки скинов и лут-битв, где каждый клик может изменить всё.</div>
                  </div>
               </SpoilerItem>
            </div>

            <div className="mt12">
               <SpoilerItem title={'Как создать свой кейс?'}>
                  <div className={`mt12 ${s.textInner}`}>
                     <div>
                        MEGACASE — это современная онлайн-платформа для открытия кейсов, объединяющая самые культовые вселенные видеоигр:
                        CS2, Dota 2 и Rust в одном месте.
                     </div>
                     <div>Это больше, чем просто кейс-сайт — это новая экосистема азартных открытий, прокачки скинов и лут-битв, где каждый клик может изменить всё.</div>
                  </div>
               </SpoilerItem>
            </div>

            <div className="mt12">
               <SpoilerItem title={'Какой скин самый дорогой?'}>
                  <div className={`mt12 ${s.textInner}`}>
                     <div>
                        MEGACASE — это современная онлайн-платформа для открытия кейсов, объединяющая самые культовые вселенные видеоигр:
                        CS2, Dota 2 и Rust в одном месте.
                     </div>
                     <div>Это больше, чем просто кейс-сайт — это новая экосистема азартных открытий, прокачки скинов и лут-битв, где каждый клик может изменить всё.</div>
                  </div>
               </SpoilerItem>
            </div>

            <div className="mt12">
               <SpoilerItem title={'Какой кейс самый дорогой?'}>
                  <div className={`mt12 ${s.textInner}`}>
                     <div>
                        MEGACASE — это современная онлайн-платформа для открытия кейсов, объединяющая самые культовые вселенные видеоигр:
                        CS2, Dota 2 и Rust в одном месте.
                     </div>
                     <div>Это больше, чем просто кейс-сайт — это новая экосистема азартных открытий, прокачки скинов и лут-битв, где каждый клик может изменить всё.</div>
                  </div>
               </SpoilerItem>
            </div>
         </div>

      </div>
   )
}

export default FAQ;
