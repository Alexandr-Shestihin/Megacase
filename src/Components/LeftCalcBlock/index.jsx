
import React, { useState, useCallback, useMemo } from 'react';
import s from './LeftCalcBlock.module.css';

import { useTranslation } from 'react-i18next';

const create = '/assets/icons/create.svg';

import {
   Button, Input, OpenCasesBlockPrice,
   OpenCasesBlockPercent, MenuBtn
} from '../';
import { useMenuSelection } from '@/hooks/useMenuSelection';

const LeftCalcBlock = ({initialValue}) => {
   const [data, setData] = useState(initialValue);

   const { activeID, handler } = useMenuSelection('CS2');
   const { t } = useTranslation();

   const minPrice = useCallback((id) => {
      if (id == 'CS2') {
         return 0.2
      } else if (id == 'Dota2' || id == 'Rust') {
         return 0.5
      } else return 0
   }, [])

   const minPriceValue = useMemo(() => minPrice(activeID), [activeID]);

   const handlerPrice = useCallback((value) => {
      setData(prev => ({ ...prev, price: value }));
   }, []);

   const handlerPercent = useCallback((value) => {
      setData(prev => ({ ...prev, percent: value }));
   }, []);

   return (
      <div className={s.left}>
         <MenuBtn activeID={activeID} handler={handler} />
         <div className="pageSubtitle mt19">{t("openCasesBlock.price")}</div>

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
   )
}

export default LeftCalcBlock;
