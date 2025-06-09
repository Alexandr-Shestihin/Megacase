"use client"
import React from 'react';
import s from './LiveLastDrop.module.css';
import { useTranslation } from 'react-i18next';
import { cardsDataLiveDrops } from '../../../public/data';

import {
   FlipCard,
   CardFrontContentLiveDrops,
   CardBackContentLiveDrops
} from '../';

const LiveLastDrop = (props) => {

   const { t } = useTranslation()

   return (
      <div className={`mt22`}>
         <div className={`pageSubtitle ${s.title}`}>
            Live <span className={s.grey}>{t("liveLastDrop.title")}</span>
         </div>

         <div className={`mt22 ${s.cordRow}`}>
            {cardsDataLiveDrops.map(el => <FlipCard key={el.id}
               frontContent={<CardFrontContentLiveDrops
                  dw={el.dw}
                  img={el.img}
                  userName={el.user.name}
                  userAvatar={el.user.avatar}
               />}
               backContent={<CardBackContentLiveDrops
                  dw={el.dw}
                  text={el.text}
                  price={el.price}
                  chance={el.chance}
                  userName={el.user.name}
                  userAvatar={el.user.avatar}
               />}
               className="my-custom-class"
               width={'160px'}
               height={'150px'}
            />)}
         </div>

      </div>
   )
}

export default LiveLastDrop;
