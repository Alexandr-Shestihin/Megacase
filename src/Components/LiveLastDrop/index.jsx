"use client"
import React from 'react';
import s from './LiveLastDrop.module.css';
import { useTranslation } from 'react-i18next';
import { cardsData } from '../../../public/data';

import {
   FlipCard,
   FrontContent,
   BackContent
} from '../';

const LiveLastDrop = (props) => {

   const { t } = useTranslation()

   return (
      <div className={`pageSubtitle mt22 ${s.title}`}>
         Live <span className={s.grey}>{t("liveLastDrop")}</span>

         <div className="row mt22">
            {cardsData.slice(0, 8).map(el => <FlipCard key={el.id}
               frontContent={<FrontContent dw={el.dw} img={el.img} />}
               backContent={<BackContent
                  dw={el.dw}
                  text={el.text}
                  price={el.price}
                  chance={el.chance}
               />}
               className="my-custom-class" // Добавьте свои классы
               width={'160px'}
               height={'132px'}
            />)}
         </div>
         <div className="row mt12">
            {cardsData.slice(0, 8).map(el => <FlipCard key={el.id}
               frontContent={<FrontContent dw={el.dw} img={el.img} />}
               backContent={<BackContent
                  dw={el.dw}
                  text={el.text}
                  price={el.price}
                  chance={el.chance}
               />}
               className="my-custom-class" // Добавьте свои классы
               width={'160px'}
               height={'132px'}
            />)}
         </div>

      </div>
   )
}

export default LiveLastDrop;
