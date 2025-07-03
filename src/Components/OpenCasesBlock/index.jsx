"use client"
import React, { useState, useCallback, useMemo, useRef } from 'react';
import s from './OpenCasesBlock.module.css';
import { useTranslation } from 'react-i18next';
import { useMenuSelection } from '@/utils';
import Image from 'next/image';

const price = '/assets/icons/addMoney.svg';
const caseIcon = '/assets/img/case.png';
const create = '/assets/icons/create.svg';
const share = '/assets/icons/share.svg';
const caseLarge = '/assets/img/caseLarge.png';
const caseLargeOpen = '/assets/img/caseAnimation/open.gif';
const caseI = '/assets/icons/active.svg';

import {
   Button, Input, OpenCasesBlockPrice,
   OpenCasesBlockPercent, FlipCard, CardFrontContent,
   CardBackContent, MenuBtn, SignProgress, Sign
} from '../';
import { cardsData } from '../../../public/data';

const OpenCasesBlock = (props) => {
   const initialValue = { percent: '20', price: 123455, balance: 1000000 };
   const [data, setData] = useState(initialValue);
   const { t } = useTranslation();
   const [caseImg, setCaseImg] = useState(() => caseLarge)

   const handlerPrice = useCallback((value) => {
      setData(prev => ({ ...prev, price: value }));
   }, []);

   const handlerPercent = useCallback((value) => {
      setData(prev => ({ ...prev, percent: value }));
   }, []);

   const { activeID, handler } = useMenuSelection('CS2');

   const minPrice = useCallback((id) => {
      if (id == 'CS2') {
         return 0.2
      } else if (id == 'Dota2' || id == 'Rust') {
         return 0.5
      } else return 0
   }, [])

   const minPriceValue = useMemo(() => minPrice(activeID), [activeID]);

   //Анимация центрального блока
   const [isImageLoaded, setIsImageLoaded] = useState(false);

   const handleImageLoad = () => {
      setIsImageLoaded(true);
   };

   return (
      <div className={`${s.container}`}>

         <div className={s.left}>
            <MenuBtn activeID={activeID} handler={handler} />
            <div className="pageSubtitle mt19">{t("openCasesBlock.pageSubtitlePrice")}</div>

            <Input set={handlerPrice} value={data.price} max={data.balance} min={minPriceValue} className={'mt16'} />

            <OpenCasesBlockPrice handler={handlerPrice} set={setData} data={data} max={data.balance} />
            <div className="pageSubtitle mt22">{t("openCasesBlock.pageSubtitleChance")}</div>

            <Input set={handlerPercent} value={`${data.percent}`} className={'mt12'} />

            <OpenCasesBlockPercent handler={handlerPercent} set={setData} data={data} />

            <div className="row">
               <Button className={`${s.btnCreate} btn-3 btn-text mt19`} activeI={create} inactiveI={create} >{t("openCasesBlock.createBtn")}</Button>
               <Button className={`${s.btnCreate} ${s.btnCreate_fast} btn-1 btn-text mt19`} >{t("openCasesBlock.createFastBtn")}</Button>
            </div>
         </div>

         <div className={s.middle}>

            <div className="row">
               {/* <div className="pageTitle">{t("openCasesBlock.title")}</div> */}
               <SignProgress className={s.signProgress} name={t("openCasesBlock.pageSubtitlePrice")} value={434500} symbol={'$'} max={data.balance} />
               <Sign className={s.sign} name={t("openCasesBlock.droppedSkin")} value={'???'} />
               <SignProgress className={s.signProgress} name={t("openCasesBlock.droppedSkin")} value={50} symbol={'%'} max={100} />
            </div>
            <div className={s.imageContainer} onMouseOver={() => setCaseImg(caseLargeOpen)} onMouseLeave={() => setCaseImg(caseLarge)} >
               <Image src={caseImg} alt="Case" layout="fill" objectFit="cover" className={`img ${s.caseImg} ${isImageLoaded ? `${s.loaded}` : ''}`}
                  onLoad={handleImageLoad} />
            </div>
            <div className={s.row}>
               <Button className={`${s.btn} btn-3 btn-text`} activeI={caseI} inactiveI={caseI} >{t("openCasesBlock.openBtn")}$12</Button>
               <Button className={`${s.btnShare} btn-text`} activeI={share} inactiveI={share} >{t("openCasesBlock.shareBtn")}</Button>
            </div>

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