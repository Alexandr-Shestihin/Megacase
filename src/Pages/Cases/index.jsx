
import React from 'react';
import s from './Cases.module.css';
import { useTranslation } from 'react-i18next';

const Cases = (props) => {

   const { t } = useTranslation();

   return (
      <div>
         <div className="pageTitle">{t("openCases.title")}</div>
      </div>
   )
}

export default Cases;
