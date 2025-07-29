
import React, { useState } from 'react';
import s from './SteamTadeURL.module.css';

import { useTranslation } from 'react-i18next';

import {
   Button
} from '@/Components/index';

const SteamTadeURL = (props) => {

   const { t } = useTranslation();
   const [modalInput, setModalInput] = useState('https://steamcommunity.com/id/me/tradeoffers/privacy#trade_offer_access_url');

   return (
      <div className={`${s.modalGetSkin}`}>
         <div className={`pageTitle ${s.title}`}>{t("steamTadeURL.title")} <span className="pageSubtitle">{t("steamTadeURL.subtitle")}</span> </div>

         <input onChange={(e) => setModalInput(e.target.value)} value={modalInput} className={`mt26 linkCopy`} />

         <div className="row">
            <Button className={`${s.btnSave} btn-3 btn-text mt19`} >{t("total.save")}</Button>
            <Button className={`${s.btnSave} ${s.btnChange} btn-1 btn-text mt19`} >{t("total.change")}</Button>
         </div>
      </div>
   )
}

export default SteamTadeURL;
