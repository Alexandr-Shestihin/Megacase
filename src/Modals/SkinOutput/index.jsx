
import React, { useState } from 'react';
import s from './SkinOutput.module.css';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import {
   Button
} from '@/Components/index';

const downloadActive = '/assets/icons/downloadActive.svg';
const skin = '/assets/img/cases/skin.png';

const SkinOutput = (props) => {

   const { t } = useTranslation();
   const [modalInput, setModalInput] = useState('https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url');
   const [isActive, setIsActive] = useState(false);
   const [isChecked, setIsChecked] = useState(null);

   return (
      <div className={`${s.modalGetSkin} ${isActive && s.active}`}>
         <div className="pageTitle">{t("openCasesBlock.skinOutput")} <span className="pageSubtitle">{t("openCasesBlock.historyConclusions")}</span> </div>
         <Image src={skin} alt="" width={332} height={268} />

         {isActive && <div>
            <div>Если данного скина нет в наличии, то </div>

            <div className={`mt8 ${s.radioBlock}`}>
               <input type="radio" id="radio1" name="skinAction" value="replace" onChange={e => setIsChecked(e.target.value)} />
               <label htmlFor="radio1">Заменить на другой скин той же стоимости </label>
            </div>

            <div className={`mt8 ${s.radioBlock}`}>
               <input type="radio" id="radio2" name="skinAction" value="return" onChange={e => setIsChecked(e.target.value)} />
               <label htmlFor="radio2">Вернуть скин и продать на сайте </label>
            </div>

            <div> </div>
         </div>}

         <input onChange={(e) => setModalInput(e.target.value)} value={modalInput} className={`mt26 ${s.linkCopy}`} />
         {isActive || <Button onClick={() => setIsActive(true)} className={`mt8 ${s.takePopUpSkin} btn-3 btn-text`} activeI={downloadActive} inactiveI={downloadActive} >{t("openCasesBlock.take")}</Button>}
         {isActive && <Button className={`mt8 ${s.takePopUpSkin} btn-3 btn-text`} activeI={downloadActive} inactiveI={downloadActive} disabled={!isChecked} >{t("openCasesBlock.take")}</Button>}
         <div className={`${s.notification}`} dangerouslySetInnerHTML={{ __html: t("openCasesBlock.notification") }}></div>
      </div>
   )
}

export default SkinOutput;
