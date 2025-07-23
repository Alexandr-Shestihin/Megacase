"use cLient"
import React from 'react';
import s from './MiddleCaseBlock.module.css';
import { useTranslation } from 'react-i18next';
import useAnimationStore from '../../../store/useAnimationStore';

const share = '/assets/icons/share.svg';
const caseI = '/assets/icons/active.svg';
const automat = '/assets/img/cases/automat.png';
const improveActive = '/assets/icons/improveActive.svg';
const downloadActive = '/assets/icons/downloadActive.svg';
const buyActive = '/assets/icons/buyActive.svg';


import {
   Button, SignProgress, Sign, СaseLargeImg, ScrollingAnimation, Modal
} from '../';
import Image from 'next/image';
import { prizes } from '@/../public/data/index';
import { useModalContext } from '@/Total/ModalContext';

const MiddleCaseBlock = ({ data }) => {

   const { t } = useTranslation();

   const startOpenAnimation = useAnimationStore(state => state.startOpenAnimation);
   const closeCase = useAnimationStore(state => state.closeCase);
   const isOpened = useAnimationStore(state => state.isOpened);
   const isScrollingAnimationEnd = useAnimationStore(state => state.isScrollingAnimationEnd);
   const setDisappearance = useAnimationStore(state => state.setDisappearance);
   const setError = useAnimationStore(state => state.setError);

   const handleTake = () => {
      closeCase();
      openModal('skinOutput')
   }

   const { openModal } = useModalContext();

   return (
      <div className={s.middle}>
         {isOpened && (isScrollingAnimationEnd || <ScrollingAnimation items={prizes} />)}

         <div className={`${s.container1} ${isOpened && (isScrollingAnimationEnd || s.blur)}`}>

            <div className={`${s.row}`}>
               <SignProgress className={s.signProgress} name={t("openCasesBlock.price")} value={434500} symbol={'$'} max={data.balance} />
               <Sign className={s.sign} name={t("openCasesBlock.droppedSkin")} value={'???'} />
               <SignProgress className={s.signProgress} name={t("openCasesBlock.droppedSkin")} value={50} symbol={'%'} max={100} />
            </div>

            <СaseLargeImg className={isOpened && s.blur} />

            {isScrollingAnimationEnd || <div className={s.row}>
               <Button
                  className={`${s.btn} btn-3 btn-text`}
                  activeI={caseI}
                  inactiveI={caseI}
                  onClick={startOpenAnimation}
               >
                  {t("openCasesBlock.openBtn")}</Button>
               <Button onClick={setError} className={`${s.btnShare} btn-text`} activeI={share} inactiveI={share} >{t("openCasesBlock.shareBtn")}</Button>
            </div>}

         </div>

         {isScrollingAnimationEnd && <div className={s.openCaseCard}>
            <Image src={automat} alt="" width={327} height={327} className={s.img} />

            <div className={s.infoBlock}>
               <div className={s.caseName}>Фальшион | Волны MW</div>
               <div className={s.price}> 1 200$</div>
            </div>

            <div className={s.btnRow}>
               <Button onClick={setDisappearance} className={`${s.improve} btn-3 btn-text`} activeI={improveActive} inactiveI={improveActive} >{t("openCasesBlock.improve")}</Button>
               <Button onClick={handleTake} className={`${s.btnShare} btn-text`} activeI={downloadActive} inactiveI={downloadActive} >{t("openCasesBlock.take")}</Button>
               <Button onClick={closeCase} className={`${s.btn} btn-3 btn-text`} activeI={buyActive} inactiveI={buyActive} >{t("openCasesBlock.sell")}</Button>
            </div>
         </div>}

      </div>
   )
}

export default MiddleCaseBlock;
