
import React from 'react';
import s from './BackContent.module.css';

const BackContent = ({ dw, text, price, chance }) => {
   const getDegreeWear = () => {
      if (dw === "FN") {
         return <div className={`dw fn ${s.full}`}>Factory New</div>
      } else if (dw === "MW") {
         return <div className={`dw mw ${s.full}`}>Minimal Wear</div>
      } else if (dw === "FT") {
         return <div className={`dw ft ${s.full}`}>Field-Tested</div>
      } else if (dw === "WW") {
         return <div className={`dw ww ${s.full}`}>Well-Worn</div>
      } else if (dw === "BS") {
         return <div className={`dw bs ${s.full}`}>Battle-Scarred</div>
      }
   }

   return (
      <div className={s.container}>
         <div className={s.text} dangerouslySetInnerHTML={{ __html: text }} />
         <div className="row">
            <div className={s.name}>{price.name}</div>
            <div className={s.value}>{price.value}</div>
         </div>
         <div className="row">
            <div className={s.name}>{chance.name}</div>
            <div className={s.value}>{chance.value}</div>
         </div>
         <div className="row">
            {getDegreeWear()}
         </div>
      </div>
   )
}

export default BackContent;
