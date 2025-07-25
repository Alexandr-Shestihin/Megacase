"use client"

import React, { useCallback, useEffect, useState } from 'react';
import s from './Conclusions.module.css';
import { useTranslation } from 'react-i18next';
import { Button } from '@/Components';
import { useMenuSelection } from '@/hooks/useMenuSelection';
import API from '@/API';
import ConclusionsItem from './ConclusionsItem';

const Conclusions = (props) => {

   const { t } = useTranslation();
   const { activeID, handler } = useMenuSelection('all');
   const [data, setData] = useState(null);

   const getData = useCallback((value) => {
      API.getHistorySkins(1, 10, value)
         .then(response => setData(response.data))
   }, [])

   useEffect(() => {
      getData(activeID)
   }, [activeID])

   console.log('activeID', activeID)

   return (
      <div className={s.container}>
         <div className="pageTitle">История выводов <span className="pageSubtitle">Скины</span> </div>
         <div className="row mt16" onClick={handler}>
            <Button
               id={'all'}
               active={activeID === 'all' && true}
               className={`${s.btn} btn-text`}
               title='Trade URL'
               onClick={getData}
            >Все</Button>
            <Button
               id={'received'}
               active={activeID === 'received' && true}
               className={`${s.btn} btn-text`}
               title='Accepted'
            >Получен</Button>
            <Button
               id={'sent'}
               active={activeID === 'sent' && true}
               className={`${s.btn} btn-text`}
               title='Sented'
            >Отправлен</Button>
            <Button
               id={'err'}
               active={activeID === 'err' && true}
               className={`${s.btn} btn-text`}
               title='Error'
            >Ошибка</Button>
         </div>
         <div className={`mt12 ${s.itemContainer}`}>
            {data?.map(el => <ConclusionsItem
               key={el?.id}
               name={el?.itemName}
               price={el?.price}
               updatedAt={el?.updatedAt}
               status={el?.displayStatus}
               image={el?.image}
            />)}
         </div>
      </div>
   )
}

export default Conclusions;
