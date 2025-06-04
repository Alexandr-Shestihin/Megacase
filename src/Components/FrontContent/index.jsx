
import React from 'react';
import s from './FrontContent.module.css';
import Image from 'next/image';

const logoMini = '/assets/img/logo/logoMini.svg';
const arrow = '/assets/icons/arrow.svg';


const FrontContent = ({ dw, img }) => {

   const getDegreeWear = () => {
      if (dw === "FN") {
         return <div className="dw fn">FN</div>
      } else if (dw === "MW") {
         return <div className="dw mw">MW</div>
      } else if (dw === "FT") {
         return <div className="dw ft">FT</div>
      } else if (dw === "WW") {
         return <div className="dw ww">WW</div>
      } else if (dw === "BS") {
         return <div className="dw bs">BS</div>
      }
   }

   return (
      <div className={s.container}>
         <Image src={logoMini} alt="logoMini" width={69} height={12} className={`img ${s.logoMini}`} />
         <Image src={img} alt="Case" width={100} height={29} className={`img ${s.automaticFirearm}`} />
         <div className="row">
            {getDegreeWear()}
            <Image src={arrow} alt="arrow" width={18} height={12} className={`img ${s.arrow}`} />
         </div>
      </div>
   )
}

export default FrontContent;
