"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react';
import s from './HistoryGames.module.css';
import { useTranslation } from 'react-i18next';
import { Button } from '@/Components';
import { useMenuSelection } from '@/hooks/useMenuSelection';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import API from '@/API';
import HistoryGamesItem from './HistoryGamesItem';
import loader from '@/../public/assets/loader.gif';
import Image from 'next/image';

const HistoryGames = (props) => {

   const [loadStatus, setLoadStatus] = useState({
      isLoad: false,
      message: ''
   });

   const { t } = useTranslation();
   const { activeID, handler } = useMenuSelection('all');
   const [data, setData] = useState([]);

   let [maxPages, setMaxPages] = useState(0);

   const getData = useCallback((value, count = 10, page = 1) => {

      if (typeof value === 'string' && (maxPages === 0 || page <= maxPages)) {

         console.log('inner')

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
      setData([]);
      getData(activeID);
      setMaxPages(0);
      /* getData(activeID); */
   }, [activeID])

   return (
      <div className={s.container}>
         <div className="pageTitle">{t("rightMemu.historyGames")}</div>
         <div className="row mt16" onClick={handler}>
            <Button
               id={'historyGamesAll'}
               active={activeID === 'historyGamesAll' && true}
               className={`${s.btn} btn-text`}
               title='Trade URL'
            >{t("historyGames.all")}</Button>
            <Button
               id={'historyGamesCases'}
               active={activeID === 'historyGamesCases' && true}
               className={`${s.btn} btn-text`}
               title='Accepted'
            >{t("historyGames.cases")}</Button>
            <Button
               id={'historyGamesSent'}
               active={activeID === 'historyGamesSent' && true}
               className={`${s.btn} btn-text`}
               title='Sented'
            >{t("historyGames.upgrade")}</Button>
         </div>

         <div className={`mt8 ${s.rowContainer}`}>
            <div>{t("historyGames.type")}</div>
            <div>{t("historyGames.bet")}</div>
            <div>{t("historyGames.chance")}</div>
            <div>{t("historyGames.prize")}</div>
            <div>{t("historyGames.date")}</div>
         </div>

         <div className={`mt12 ${s.itemContainer}`}>
            {data?.length > 0 ? (
               data.map(el => (
                  <HistoryGamesItem
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

export default HistoryGames;
