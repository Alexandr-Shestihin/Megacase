"use client"
import React, { useState, useCallback, useEffect } from 'react';
import s from './OpenCasesBlock.module.css';
import { useTranslation } from 'react-i18next';

import { formatNumericPercentInput, formatNumericPriceInput, useDebounce } from '../../utils';

import Image from 'next/image';

const price = '/assets/icons/addMoney.svg';
const caseIcon = '/assets/img/case.png';
const create = '/assets/icons/create.svg';
const share = '/assets/icons/share.svg';
const caseLarge = '/assets/img/caseLarge.png';
const caseI = '/assets/icons/active.svg';

import {
   Button,
   Item,
   Input,
   OpenCasesBlockPrice,
   OpenCasesBlockPercent,
   FlipCard,
   CardFrontContent,
   CardBackContent
} from '../';

import { cardsData } from '../../../public/data';

const OpenCasesBlock = (props) => {

   const initialValue = { percent: '100', price: '123 455' };
   const [data, setData] = useState(initialValue);
   const { t } = useTranslation();

   // Вспомогательная функция для форматирования с пробелами и обработки нескольких точек
   const formatWithSpaces = (value) => {
      if (!value) return '';

      const cleanedValue = formatNumericPriceInput(value); // Clean up input

      // Разделяем на целую и дробную части
      const [integerPart, fractionalPart] = cleanedValue.split('.');

      // Форматируем целую часть с пробелами
      const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

      // Соединяем обратно
      return fractionalPart !== undefined ? `${formattedIntegerPart}.${fractionalPart}` : formattedIntegerPart;
   };

   // Debounced function to set the price
   const debouncedSetPrice = useDebounce((value) => {
      setData(prev => ({ ...prev, price: value }));
   }, 100);

   const handler = useCallback((e, key) => {
      const value = e.target.value;

      if (key === "price") {
         debouncedSetPrice(formatWithSpaces(value));
      } else if (key === "percent") {
         const formattedValue = formatNumericPercentInput(value);
         setData(prev => ({ ...prev, [key]: formattedValue }));
      } else {
         setData(prev => ({ ...prev, [key]: value }));
      }
   }, [debouncedSetPrice]);

   return (
      <div className={`${s.container} mt12`}>
         <div className={s.left}>
            <div className="pageSubtitle">{t("openCasesBlock.pageSubtitlePrice")}</div>
            <Input
               set={(e) => handler(e, "price")}
               value={data.price}
               img={price}
               className={'mt12'}
            />
            <OpenCasesBlockPrice handler={handler} set={setData} data={data} />
            <div className="pageSubtitle mt22">{t("openCasesBlock.pageSubtitleChance")}</div>
            <Input set={(e) => handler(e, "percent")} value={`${data.percent}%`} className={'mt12'} />
            <OpenCasesBlockPercent handler={handler} set={setData} data={data} />
            <div className={`${s.statisticsBlock} mt12`}>
               <div className={s.photoBlock}>
                  <Image src={caseIcon} alt="Case" width={200} height={100} className="img" />
                  <div className="pageSubtitle">CS2</div>
               </div>
               <div className={s.dataBlock}>
                  <Item name={t("openCasesBlock.statistics.one")} value={'10%'} />
                  <Item name={t("openCasesBlock.statistics.two")} value={'10%'} />
                  <Item name={t("openCasesBlock.statistics.three")} value={'80.0004%'} />
                  <Item name={t("openCasesBlock.statistics.four")} value={'0.000023%'} />
                  <Item name={t("openCasesBlock.statistics.five")} value={'12 569$'} />
               </div>
            </div>
            <Button
               className={`${s.btn} btn-2 btn-text mt12`}
               activeI={create}
               inactiveI={create}
            >{t("openCasesBlock.createBtn")}</Button>
         </div>

         <div className={s.middle}>
            <div className="row">
               <div className="pageTitle">{t("openCasesBlock.title")}</div>
               <Button
                  className={`${s.btnShare} btn-text`}
                  activeI={share}
                  inactiveI={share}
               >{t("openCasesBlock.shareBtn")}</Button>
            </div>
            <Image src={caseLarge} alt="Case" width={528} height={358} className={`img mt26 ${s.caseImg}`} />
            <Button
               className={`${s.btn} btn-3 btn-text mt54`}
               activeI={caseI}
               inactiveI={caseI}
            >{t("openCasesBlock.openBtn")}$12</Button>
         </div>

         <div className={s.right}>
            <div className="row">
               <div className="pageSubtitle">{t("openCasesBlock.fillingCase")}</div>
               <div className={s.count}>{cardsData.length}{t("openCasesBlock.count")}</div>
            </div>
            <div className={`mt12 ${s.flipContainer}`}>
               {cardsData.map(el => <FlipCard key={el.id}
                  frontContent={<CardFrontContent dw={el.dw} img={el.img} />}
                  backContent={<CardBackContent
                     dw={el.dw}
                     text={el.text}
                     price={el.price}
                     chance={el.chance}
                  />}
                  className="my-custom-class" 
                  width={'120px'}
                  height={'120px'}
               />)}

            </div>
         </div>
      </div>
   )
}

export default OpenCasesBlock;
