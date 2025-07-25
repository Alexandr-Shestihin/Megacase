"use client"

import React, { useEffect, useState } from 'react';
import s from './Conclusions.module.css';
import { useTranslation } from 'react-i18next';
import { Button } from '@/Components';
import { useMenuSelection } from '@/hooks/useMenuSelection';
import API from '@/API';
import ConclusionsItem from './ConclusionsItem';

const Conclusions = (props) => {

   const { t } = useTranslation();
   const { activeID, handler } = useMenuSelection('URL');
   const [data, setData] = useState(null);

   const getData = () => {
      API.getHistorySkins()
         .then(response => setData(response.data))
   }

   useEffect(() => {
      getData()
   }, [])
   console.log('data', data)

   return (
      <div className={s.container}>
         <div className="pageTitle">История выводов <span className="pageSubtitle">Скины</span> </div>
         <div className="row mt16" onClick={handler}>
            <Button
               id={'URL'}
               active={activeID === 'URL' && true}
               className={`${s.btn} btn-text`}
               title='Trade URL'
               onClick={getData}
            >Trade URL</Button>
            <Button
               id={'accepted'}
               active={activeID === 'accepted' && true}
               className={`${s.btn} btn-text`}
               title='Accepted'
            >Получен</Button>
            <Button
               id={'sented'}
               active={activeID === 'sented' && true}
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
