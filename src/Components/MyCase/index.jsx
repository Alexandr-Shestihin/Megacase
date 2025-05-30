
import React from 'react';
import s from './MyCase.module.css';
import caseIcon from '../../assets/icons/case.svg'
import { useTranslation } from 'react-i18next';

const MyCase = ({ id, price, left, openCount }) => {

   const { t } = useTranslation()

   return (
      <div className={`${s.container} btn-1`}>
         <div className={s.mainRow}>
            <img src={caseIcon} alt="" />
            <div>{t('leftMenu.cases.title')} №{id}</div>
            <div>{price}$</div>
         </div>
         <div className={s.addRow}>

         </div>

      </div>
   )
}

export default MyCase;
