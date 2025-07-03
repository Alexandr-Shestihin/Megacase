"use client"
import React from 'react';
import s from './CardFrontContent.module.css';
import Image from 'next/image';
import { getDegreeWear } from '@/utils';

const CardFrontContent = ({ dw, img, text }) => {

   return (
      <div className={s.container}>
         <div className={s.text} dangerouslySetInnerHTML={{ __html: text }} />
         <Image src={img} alt="Case" width={100} height={29} className={`img ${s.arms}`} />
         {getDegreeWear(dw)}
      </div>
   )
}

export default CardFrontContent;