"use client";

import React, { useCallback, useEffect, useState, useRef } from 'react';
import s from './Conclusions.module.css';
import { useTranslation } from 'react-i18next';
import { Button } from '@/Components';
import { useMenuSelection } from '@/hooks/useMenuSelection';
import API from '@/API';
import ConclusionsItem from './ConclusionsItem';
import loader from '@/../public/assets/loader.gif';
import Image from 'next/image';
import useScrollPagination from '@/hooks/useScrollPagination';

const PAGE_SIZE = 10;

const Conclusions = (props) => {
   const [loadStatus, setLoadStatus] = useState({ isLoad: false, message: '' });
   const { t } = useTranslation();
   const { activeID, handler } = useMenuSelection('all');

   const fetchSkins = useCallback(async (page) => {
      try {
         setLoadStatus(prev => ({ ...prev, isLoad: true }));
         const response = await API.getHistorySkins(page, PAGE_SIZE, activeID);
         setLoadStatus(prev => ({ ...prev, isLoad: false }));
         return response.data;
      } catch (e) {
         console.error(e.message);
         setLoadStatus({ message: e.message, isLoad: false });
         return [];
      }
   }, [activeID]);

   const { data, loading, error, hasMore, observerRef, loadMore } = useScrollPagination(fetchSkins, [], 1);

   // useEffect для первоначальной загрузки данных и при смене activeID
   useEffect(() => {
      // Сбрасываем страницу к 1 при смене activeID и вызываем loadMore
      loadMore();
   }, [activeID, loadMore]);

   return (
      <div className={s.container}>
         <div className="pageTitle">
            История выводов
            <span className="pageSubtitle">Скины</span>
         </div>
         <div className="row mt16" onClick={handler}>
            <Button id={'all'} active={activeID === 'all' && true} className={`${s.btn} btn-text`} title='Trade URL'>
               Все
            </Button>
            <Button id={'received'} active={activeID === 'received' && true} className={`${s.btn} btn-text`} title='Accepted'>
               Получен
            </Button>
            <Button id={'sent'} active={activeID === 'sent' && true} className={`${s.btn} btn-text`} title='Sented'>
               Отправлен
            </Button>
            <Button id={'err'} active={activeID === 'err' && true} className={`${s.btn} btn-text`} title='Error'>
               Ошибка
            </Button>
         </div>
         <div className={`mt12 ${s.itemContainer}`}>
            {data?.map(el => (
               <ConclusionsItem
                  key={el?.id}
                  name={el?.itemName}
                  price={el?.price}
                  updatedAt={el?.updatedAt}
                  status={el?.displayStatus}
                  image={el?.image}
               />
            ))}
            {loading && <Image src={loader} alt="Loading" width={200} height={100} className={s.loader} />}
            {error && <p>Error: {error}</p>}
            {!hasMore && <p>No more data to load</p>}
            <div ref={observerRef} className={s.observer} /> {/* Элемент-наблюдатель */}
         </div>
      </div>
   );
};

export default Conclusions;