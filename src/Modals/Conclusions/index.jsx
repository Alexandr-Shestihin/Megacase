
import React, { useEffect } from 'react';
import s from './Conclusions.module.css';
import { useTranslation } from 'react-i18next';
import { Button } from '@/Components';
import { useMenuSelection } from '@/hooks/useMenuSelection';
import API from '@/API';

const Conclusions = (props) => {

   const { t } = useTranslation();
   const { activeID, handler } = useMenuSelection('URL');

   /* const getData = () => {
      API.getHistorySkins()
         .then(data => console.log(data))
   }

   useEffect(() => {
      getData()
   }, []) */

   return (
      <div className={s.container} onClick={handler}>
         <div className="pageTitle">История выводов <span className="pageSubtitle">Скины</span> </div>
         <div className="row mt16">
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
      </div>
   )
}

export default Conclusions;
