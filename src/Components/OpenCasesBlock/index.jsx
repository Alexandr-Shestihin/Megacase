"use client"

import React from 'react';
import s from './OpenCasesBlock.module.css';
import { useTranslation } from 'react-i18next';

import {
   FlipCard, CardFrontContent, CardBackContent
} from '../';
import { cardsData } from '../../../public/data';
import LeftCalcBlock from '../LeftCalcBlock';
import MiddleCaseBlock from '../MiddleCaseBlock';

const OpenCasesBlock = (props) => {
   const initialValue = { percent: '20', price: 123455, balance: 1000000 };
   const { t } = useTranslation();

   return (
      <div className={`${s.container}`}>

         <div className={s.left}>
            <LeftCalcBlock initialValue={initialValue} />
         </div>

         <div className={s.middle}>
            <MiddleCaseBlock data={initialValue} />
         </div>

         <div className={s.right}>
            <div className="row">
               <div className="pageSubtitle">{t("openCasesBlock.fillingCase")}</div>
               <div className={s.count}>{cardsData.length}{t("openCasesBlock.count")}</div>
            </div>
            <div className={`mt12 ${s.flipContainer}`}>
               {cardsData.map(el => <FlipCard key={el.id}
                  frontContent={<CardFrontContent dw={el.dw} img={el.img} text={el.text} />}
                  backContent={<CardBackContent dw={el.dw}
                     text={el.text} price={el.price} chance={el.chance}
                  />} className="my-custom-class" width={'120px'} height={'120px'} />)}
            </div>
         </div>
      </div>
   )
}

export default OpenCasesBlock;