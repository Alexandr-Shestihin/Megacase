"use client"

import React, { useCallback, useEffect, useState } from 'react';
import s from './Conclusions.module.css';
import { useTranslation } from 'react-i18next';
import { Button } from '@/Components';
import { useMenuSelection } from '@/hooks/useMenuSelection';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import API from '@/API';
import ConclusionsItem from './ConclusionsItem';
import loader from '@/../public/assets/loader.gif';
import Image from 'next/image';

const Conclusions = (props) => {

   const [loadStatus, setLoadStatus] = useState({
      isLoad: false,
      message: ''
   });

   const { t } = useTranslation();
   const { activeID, handler } = useMenuSelection('all');
   const [data, setData] = useState([]);

   const getData = useCallback((value, count = 10, page = 1) => {

      if (typeof value === 'string') {

         setLoadStatus(prev => ({ ...prev, isLoad: true }))

         API.getHistorySkins(page, count, value)
            .then(response => {
               setData(prev => [...prev, ...response.data]);
               setLoadStatus({ message: '', isLoad: false });
            })
            .catch((e) => {
               console.error(e.message);
               setLoadStatus({ message: e.message, isLoad: false });
            })
      }

   }, [])

   const { elementRef } = useIntersectionObserver(
      (page) => getData(activeID, 10, page),
      {
         threshold: 0.1,
      }
   );

   useEffect(() => {
      getData(activeID);
   }, [activeID])

   return (
      <div className={s.container}>
         <div className="pageTitle">{t("total.historyConclusions")} <span className="pageSubtitle">{t("total.skins")}</span> </div>
         <div className="row mt16" onClick={handler}>
            <Button
               id={'all'}
               active={activeID === 'all' && true}
               className={`${s.btn} btn-text`}
               title='Trade URL'
               onClick={getData}
            >{t("total.all")}</Button>
            <Button
               id={'received'}
               active={activeID === 'received' && true}
               className={`${s.btn} btn-text`}
               title='Accepted'
            >{t("total.received")}</Button>
            <Button
               id={'sent'}
               active={activeID === 'sent' && true}
               className={`${s.btn} btn-text`}
               title='Sented'
            >{t("total.sent")}</Button>
            <Button
               id={'err'}
               active={activeID === 'err' && true}
               className={`${s.btn} btn-text`}
               title='Error'
            >{t("total.error")}</Button>
         </div>
         <div className={`mt12 ${s.itemContainer}`}>
            {data?.length > 0 ? (
               data.map(el => (
                  <ConclusionsItem
                     key={el?.id}
                     name={el?.itemName}
                     price={el?.price}
                     updatedAt={el?.updatedAt}
                     status={el?.displayStatus}
                     image={el?.image}
                  />
               ))
            ) : (
               loadStatus?.message
            )}
            <div ref={elementRef} style={{ height: '1px', width: '100%' }}>{loadStatus.isLoad && <Image src={loader} alt="log Out" width={200} height={100} className={s.loader} />}</div>
         </div>
      </div>
   )
}

export default Conclusions;
