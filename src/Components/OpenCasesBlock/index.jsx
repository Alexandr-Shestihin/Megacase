"use client"
import React, { useState, useCallback, useEffect } from 'react';
import s from './OpenCasesBlock.module.css';
import { useTranslation } from 'react-i18next';

import { formatNumericPercentInput, formatNumericPriceInput, useDebounce } from '../../utils';

import Image from 'next/image';

const price = '/assets/icons/addMoney.svg';
const caseIcon = '/assets/img/case.png';

import {
   Item,
   Input,
   OpenCasesBlockPrice,
   OpenCasesBlockPercent
} from '../';

const OpenCasesBlock = (props) => {

   const initialValue = { percent: '100', price: '123 455' };
   const [data, setData] = useState(initialValue);
   const { t } = useTranslation();

   // Helper function to format with spaces and handle multiple dots
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
      <div className={s.container}>
         <div className={s.left}>
            <div className="pageSubtitle">{t("openCasesBlock.pageSubtitlePrice")}</div>
            <Input
               set={(e) => handler(e, "price")}
               value={data.price}
               img={price}
               className={'mt12'}
            />
            <OpenCasesBlockPrice handler={handler} set={setData} data={data} />
            {/* <div className={`${s.btnRow} mt8`}>
               <Button
                  className={`${s.btn}`}
                  onClick={() => console.log('100$')}
                  activeI={null}
                  inactiveI={null}
               >100$</Button>
               <Button
                  className={`${s.btn}`}
                  onClick={() => console.log('500')}
                  activeI={null}
                  inactiveI={null}
               >500$</Button>
               <Button
                  className={`${s.btn}`}
                  onClick={() => console.log('1000')}
                  activeI={null}
                  inactiveI={null}
               >1 000$</Button>
               <Button
                  className={`${s.btn}`}
                  onClick={() => console.log('5000')}
                  activeI={null}
                  inactiveI={null}
               >5 000$</Button>
            </div> */}
            <div className="pageSubtitle mt22">{t("openCasesBlock.pageSubtitleChance")}</div>
            <Input set={(e) => handler(e, "percent")} value={`${data.percent}%`} className={'mt12'} />
            <OpenCasesBlockPercent handler={handler} set={setData} />
            {/* <div className={`${s.btnRow} mt8`}>
               <Button
                  className={`${s.btn}`}
                  onClick={() => console.log('100%')}
                  activeI={null}
                  inactiveI={null}
               >10%</Button>
               <Button
                  className={`${s.btn}`}
                  onClick={() => console.log('100%')}
                  activeI={null}
                  inactiveI={null}
               >30%</Button>
               <Button
                  className={`${s.btn}`}
                  onClick={() => console.log('100%')}
                  activeI={null}
                  inactiveI={null}
               >50%</Button>
               <Button
                  className={`${s.btn}`}
                  onClick={() => console.log('100%')}
                  activeI={null}
                  inactiveI={null}
               >100%</Button>
            </div> */}
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
         </div>
         <div className={s.middle}>
            <div className="pageTitle">{t("openCasesBlock.title")}</div>
         </div>
         <div className={s.right}></div>
      </div>
   )
}

export default OpenCasesBlock;
