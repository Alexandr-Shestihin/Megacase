"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react';
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

   let [maxPages, setMaxPages] = useState(2);

   const getData = useCallback((value, count = 10, page = 1) => {

      console.log('ok12345678910')

      if (typeof value === 'string' && maxPages >= page) {

         setLoadStatus(prev => ({ ...prev, isLoad: true }))

         API.getHistorySkins(page, count, value)
            .then(response => {
               setMaxPages(Math.ceil(response.pagination.totalItems / count));
               setData((prev) => {
                  const newData = [...prev, ...response.data];
                  // Фильтруем, чтобы удалить дубликаты (если они вдруг появились)
                  const uniqueData = newData.filter((item, index) =>
                     newData.findIndex(i => i.id === item.id) === index
                  );
                  return uniqueData;
               });
               setLoadStatus({ message: '', isLoad: false });
            })
            .catch((e) => {
               console.error(e.message);
               setLoadStatus({ message: e.message, isLoad: false });
            })
      }
   }, [maxPages, setMaxPages])

   const { elementRef } = useIntersectionObserver(
      (page) => getData(activeID, 10, page),
      maxPages,
      {
         threshold: 0.1,
      }
   );

   useEffect(() => {
      setData([])
      setMaxPages(2);
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
               id={'error'}
               active={activeID === 'error' && true}
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
            <div ref={elementRef} style={{ height: '1px', width: '100%' }} className={s.point}>{loadStatus.isLoad && <Image src={loader} alt="log Out" width={200} height={100} className={s.loader} />}</div>
         </div>
      </div>
   )
}

export default Conclusions;
