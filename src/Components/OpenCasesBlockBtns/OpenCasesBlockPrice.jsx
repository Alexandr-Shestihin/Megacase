"use client"
import React, { useEffect } from 'react';
import s from './OpenCasesBlockBtns.module.css';
import useMenuSelection from '@/utils';

import {
   Button,
} from '..';

const OpenCasesBlockPrice = ({ set, data }) => {

   const { activeID, handler, clear } = useMenuSelection();
   const handlerClick = (e) => {
      handler(e);
      set(prev => ({ ...prev, 'price': e.target.id || prev.price }))
   }

   useEffect(() => {
      if (activeID !== data?.price) {
         clear();
      }
   }, [data])

   return (
      <div className={`${s.btnRow} mt8`} onClick={handlerClick}>
         <Button
            id={'100'}
            active={activeID === '100'}
            className={`${s.btn}`}
            activeI={null}
            inactiveI={null}
         >100$</Button>
         <Button
            id={'500'}
            active={activeID === '500'}
            className={`${s.btn}`}
            activeI={null}
            inactiveI={null}
         >500$</Button>
         <Button
            id={'1 000'}
            active={activeID === '1 000'}
            className={`${s.btn}`}
            activeI={null}
            inactiveI={null}
         >1 000$</Button>
         <Button
            id={'5 000'}
            active={activeID === '5 000'}
            className={`${s.btn}`}
            activeI={null}
            inactiveI={null}
         >5 000$</Button>
      </div>
   )
}

export default OpenCasesBlockPrice;
