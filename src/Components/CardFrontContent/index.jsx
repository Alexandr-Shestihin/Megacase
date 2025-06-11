"use client"
import React from 'react';
import s from './CardFrontContent.module.css';
import Image from 'next/image';
import { getDegreeWearMin } from '@/utils';

const logoMini = '/assets/img/logo/logoMini.svg';

const CardFrontContent = ({ dw, img }) => {

   return (
      <div className={s.container}>
         <Image src={logoMini} alt="logoMini" width={69} height={12} className={`img ${s.logoMini}`} />
         <Image src={img} alt="Case" width={100} height={29} className={`img ${s.arms}`} />
         {getDegreeWearMin(dw)}
      </div>
   )
}

export default CardFrontContent;