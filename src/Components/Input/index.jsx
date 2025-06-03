"use client"
import React, { useMemo } from 'react';
import s from './Input.module.css';

import Image from 'next/image';

const Input = ({ set, value, img, className, ...args }) => {

   const paddingLeft = useMemo(() => (img ? '48' : '20') + 'px', [img]);

   return (
      <div className={s.inputContainer}>
         <input
            type="text"
            onChange={set}
            value={value}
            className={`${s.input} ${className}`}
            style={{ "paddingLeft": paddingLeft }}
            {...args}
         />
         {img && <Image src={img} alt="Case" width={200} height={100} className={`img ${s.icon}`} />}
      </div>
   )
}

export default Input;
